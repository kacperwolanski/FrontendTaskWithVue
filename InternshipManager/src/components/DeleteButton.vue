<template>
  <button @click="$emit('delete')">
    <i class="pi pi-trash"></i>
  </button>
</template>

<script>
export default {
  name: 'DeleteButton',
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
