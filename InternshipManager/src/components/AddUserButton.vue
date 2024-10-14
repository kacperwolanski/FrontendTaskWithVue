<template>
  <button class="addUserButton">
    <span class="plusSign">+</span>
    <span>Add User</span>
  </button>
</template>

<script>
export default {
  name: 'AddUserButton',
}
</script>
<style>
.plusSign {
  font-weight: 600;
  font-size: 20px;
}

.addUserButton {
  border: none;
  background-color: #489474;
  color: white;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 15px;
}
</style>
