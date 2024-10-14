<template>
  <button @click="$emit('edit')">
    <i class="pi pi-pen-to-square"></i>
  </button>
</template>

<script>
export default {
  name: 'EditButton',
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
