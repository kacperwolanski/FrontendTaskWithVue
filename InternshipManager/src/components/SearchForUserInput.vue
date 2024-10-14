<template>
  <div class="inputContainer">
    <input class="inputField" placeholder="Search for users..." />
    <span class="pi pi-search searchIcon"></span>
  </div>
</template>

<script>
export default {
  name: 'SearchForUserInput',
}
</script>

<style scoped>
.inputContainer {
  position: relative;
  display: flex;
  align-items: center;

  min-width: 40%;
}

.inputField {
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgb(235, 235, 235);
  transition: all 0.3s ease;
}

.inputField:focus {
  border-color: transparent;
  box-shadow: none;
}

.searchIcon {
  position: absolute;
  right: 5px;
  color: #888;
  pointer-events: none;
}
</style>
