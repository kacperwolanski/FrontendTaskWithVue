<template>
  <div class="headerRow">
    <div :style="{ minWidth: '60px', flex: 0 }"></div>
    <span class="header">Full name</span>
    <div><span class="header">Action</span></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderRow',
}
</script>

<style>
.headerRow {
  display: flex;
  font-weight: bold;
  gap: 60px;
  align-items: center;
  padding: 10px;
}

.header {
  flex: 1;
}
</style>
