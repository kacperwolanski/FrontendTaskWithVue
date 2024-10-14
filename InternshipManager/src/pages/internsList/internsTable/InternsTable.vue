<template>
  <div class="headerRow">
    <div :style="{ minWidth: '60px', flex: 0 }"></div>
    <span class="header">Full name</span>
    <div><span class="header">Action</span></div>
  </div>
</template>

<script>
export default {
  name: 'InternsTable',
}
</script>

<style>
.headerRow {
  display: flex;
  font-weight: bold;
  gap: 60px;
  align-items: center;
  padding: 30px 100px 0 0;
}

.header {
  flex: 1;
}
</style>
