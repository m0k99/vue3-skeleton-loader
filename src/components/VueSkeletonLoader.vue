<script setup lang="ts">
import {PropType, reactive} from "vue";
import {computeComponents} from "@/util/skeletonChecker";
import {SkeletonLoaderProps} from "@/types";
import {makeStyle} from "@/composables/style";

const props = defineProps({
  loading: {
    type: Boolean as PropType<SkeletonLoaderProps['loading']>,
    required: false,
    default: true
  },
  type: {
    type: String as PropType<SkeletonLoaderProps['type']>,
    required: false,
    default: 'text'
  },
  animation: {
    type: String as PropType<SkeletonLoaderProps['animation']>,
    required: false,
    default: 'wave'
  },
  duration: {
    type: String as PropType<SkeletonLoaderProps['duration']>,
    required: false,
    default: '1.5s'
  },
  baseColor: {
    type: String as PropType<SkeletonLoaderProps['baseColor']>,
    required: false,
    default: '#0000001E'
  },
  highlightColor: {
    type: String as PropType<SkeletonLoaderProps['highlightColor']>,
    required: false,
    default: '#FFFFFF66'
  },
  borderRadius: {
    type: [String, Number] as PropType<SkeletonLoaderProps['borderRadius']>,
    required: false,
    default: ''
  },
  height: {
    type: [String, Number] as PropType<SkeletonLoaderProps['height']>,
    required: false,
    default: ''
  },
  width: {
    type: [String, Number] as PropType<SkeletonLoaderProps['width']>,
    required: false,
    default: ''
  },
  direction: {
    type: String as PropType<SkeletonLoaderProps['direction']>,
    required: false,
    default: 'ltr'
  },
  skeletonStyle: {
    type: Object as PropType<SkeletonLoaderProps['skeletonStyle']>,
    required: false,
    default: () => ({})
  },
  skeletonClassName: {
    type: String as PropType<SkeletonLoaderProps['skeletonClassName']>,
    required: false,
    default: ''
  }
})


const {skeletonName, bonesCount} = computeComponents(props.type)

let styles = reactive({})

if (bonesCount && bonesCount > 0) {

  const boneProps = {
    type: skeletonName,
    borderRadius: props.borderRadius,
    height: props.height,
    width: props.width,
  }
  styles = makeStyle(boneProps)

}

</script>

<template>
  <div class="vue-skeleton-loader">
    <div
      class="vue-skeleton-loader-bone"
      ref="skeleton"
      v-if="loading"
      v-for="index in bonesCount"
      :key="index"
      :class="[
        `v-skeleton-loader-${skeletonName}`,
        {
          'animation-disabled': !animation,
          'rtl-direction': direction === 'rtl'
        },
        animation,
        skeletonClassName
      ]"
      :style="{...styles,...skeletonStyle}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

.vue-skeleton-loader-bone {
  position: relative;
  overflow: hidden;
  background: v-bind(baseColor);
  display: block;
}

.vue-skeleton-loader-bone.animation-disabled::after {
  animation: paused;
}

.vue-skeleton-loader-bone::after {
  content: "";
  position: absolute;
  inset: 0;
  animation-name: v-bind(animation);
  animation-duration: v-bind(duration);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-image: linear-gradient(
    90deg,
    transparent,
    v-bind(highlightColor),
    transparent
  );
  z-index: 1;
}

.vue-skeleton-loader-bone.wave::after {
  animation-name: wave;
  animation-direction: normal;
}

.vue-skeleton-loader-bone.rtl-direction::after {
  animation-name: wave;
  animation-direction: reverse;
}

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
