<script setup lang="ts">
import VueSkeletonLoader from "@/components/VueSkeletonLoader.vue";
</script>

<template>
  <div class="container">
    <div class="avatar">
      <VueSkeletonLoader type="avatar"/>
      <div>
        <VueSkeletonLoader type="text" width="100px" height="10px"/>
        <VueSkeletonLoader type="text" width="70px" height="6px"/>
      </div>
    </div>
    <VueSkeletonLoader type="image"/>
    <VueSkeletonLoader type="divider"/>
    <VueSkeletonLoader type="text@3" :style="{marginBottom:'12px'}"/>
    <VueSkeletonLoader type="chip@2" :duration="0.75"/>
    <VueSkeletonLoader type="button@2" class="action-button"/>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 400px;
  margin: 30px auto;
  padding: 12px;
  border: 2px solid #0000001E;
  border-radius: 0.25rem;

  .avatar {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .action-button {
    display: flex;
    gap: 12px;
    justify-content: end;
  }
}

</style>
