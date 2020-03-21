<template>
  <div class="tab-control">
    <div class="option"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabControl'
}
</script>

<style>
  .tab-control {
    height: 45px;
    display: flex;
    align-items: center;
  }

  .option {
    padding: 0 10px;
    border-left: 3px solid #CD2626;
  }
</style>