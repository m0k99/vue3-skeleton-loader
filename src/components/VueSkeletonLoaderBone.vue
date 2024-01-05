<script setup lang="ts">
import {onMounted, PropType, ref} from "vue";
import {SkeletonLoaderBoneProps} from "@/types/BoneProps";

const props = defineProps({
  styles: {
    type: Object as PropType<SkeletonLoaderBoneProps['styles']>,
    required: true,
    default: () => ({})
  },
})

const skeleton = ref<HTMLElement | null>(null);

onMounted(() => {
  for (const [property, value] of Object.entries(props.styles)) {
    if (skeleton.value) {
      skeleton.value.style.setProperty(property, value);
    }
  }
})

</script>

<template>
  <div class="vue-skeleton-loader-bone" ref="skeleton">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

.vue-skeleton-loader-bone {
  position: relative;
  overflow: hidden;
  background: var(--baseColor);
  border-radius: var(--borderRadius);
  margin-bottom: var(--marginBottom);

  &.animation-disabled {
    &::after {
      animation: paused;
    }
  }

  &.v-skeleton-loader-text {
    height: var(--height);
    width: var(--width);
    display: block;
  }

  &.v-skeleton-loader-avatar {
    height: var(--height);
    width: var(--width);
    display: inline-block;
  }

  &.v-skeleton-loader-image {
    height: var(--height);
    width: var(--width);
    display: block;
  }

  &.v-skeleton-loader-button {
    height: var(--height);
    width: var(--width);
    display: inline-block;
  }

  &.v-skeleton-loader-chip {
    height: var(--height);
    width: var(--width);
    display: inline-block;
  }

  &.v-skeleton-loader-divider {
    height: var(--height);
    width: var(--width);
    display: block;
  }

  &.wave {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      animation: loading var(--duration) linear infinite;
      background-image: linear-gradient(
          90deg,
          transparent,
          var(--highlightColor),
          transparent
      );
      z-index: 1;
    }

    &.rtl-direction {
      &::after {
        right: 0;
        animation: rtl-loading var(--duration) infinite;
        transform: translateX(100%);
      }
    }
  }

  &.fade {
    animation: fade var(--duration) ease-in-out infinite alternate;;
  }
}


@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes rtl-loading {
  100% {
    transform: translateX(-100%);
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}

</style>
