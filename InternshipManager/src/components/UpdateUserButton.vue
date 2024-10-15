<template>
  <button class="updateUserButton" @click="submit">
    <span class="label">{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'UpdateUserButton',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      this.$emit(this.title)
    },
  },
}
</script>
<style scoped>
.label {
  text-align: center;

  width: 100%;
}
.updateUserButton {
  max-width: 130px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #489474;
  color: white;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 15px;
}
</style>
