<template>
  <button @click="handleEditClick">
    <i class="pi pi-pen-to-square"></i>
  </button>
</template>

<script>
export default {
  name: 'EditButton',
  props: {
    editedUserId: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleEditClick() {
      this.$router.push({
        name: 'EditIntern',
        params: { id: this.editedUserId },
      })
    },
  },
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
