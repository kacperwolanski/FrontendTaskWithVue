<template>
  <div class="container" :style="{ backgroundColor: backgroundColor || none }">
    <div class="imgContainer">
      <img
        v-if="profileImgUrl"
        :src="profileImgUrl"
        alt="Profile Image"
        class="profileImg"
      />
    </div>
    <span class="userName">{{ userName }}</span>
    <slot class="actionElements"></slot>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    profileImgUrl: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  padding: 10px;
}
.imgContainer {
  min-width: 60px;
}
.profileImg {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  flex: 0 0 auto;
  object-fit: cover;
}
.userName {
  flex: 1;
}
.actionElements {
  flex: 1;
}
</style>
