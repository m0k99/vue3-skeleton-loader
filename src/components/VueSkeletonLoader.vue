<script setup lang="ts">
import {PropType, reactive} from "vue";
import VueSkeletonLoaderBone from "./VueSkeletonLoaderBone.vue";
import {computeComponents} from "@/util";
import {SkeletonLoaderProps} from "@/types/SkeletonProps";
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
    type: Number as PropType<SkeletonLoaderProps['duration']>,
    required: false,
    default: 1.5
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
    duration: props.duration,
    baseColor: props.baseColor,
    highlightColor: props.highlightColor,
    borderRadius: props.borderRadius,
    height: props.height,
    width: props.width,
    animation: props.animation
  }
  styles = makeStyle(boneProps)

}

</script>

<template>
  <div class="vue-skeleton-loader">
    <VueSkeletonLoaderBone
      v-if="loading"
      v-for="index in bonesCount"
      :key="index"
      :style="skeletonStyle"
      :class="[
        `v-skeleton-loader-${skeletonName}`,
        {
          'animation-disabled': !animation,
          'rtl-direction': direction === 'rtl'
        },
        animation,
        skeletonClassName
      ]"
      :styles="styles"
    >
      <slot></slot>
    </VueSkeletonLoaderBone>
  </div>
</template>
