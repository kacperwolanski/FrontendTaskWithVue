<template>
  <div class="editPhotoContainer">
    <img class="profilePhoto" :src="computedPhotoUrl" />
    <button class="changePhotoButton" @click="changePhoto">
      <i class="pi pi-camera"></i>
      <span>{{ title }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'EditPhoto',
  props: {
    photoUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedPhotoUrl() {
      return this.photoUrl || 'https://via.placeholder.com/150'
    },
  },
  methods: {
    changePhoto() {
      this.$emit('changePhoto')
    },
  },
}
</script>

<style scoped>
.editPhotoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 60px;
  width: 100%;
  min-height: 300px;
  max-width: 500px;
  height: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 2px;
}
.changePhotoButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 200px;
  background: none;
  height: 30px;
  border: 1px solid;
  padding: 20px;
  border-radius: 2px;
  gap: 10px;
  color: rgb(107, 106, 106);
}

.profilePhoto {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
@media (max-width: 650px) {
  .editPhotoContainer {
    max-width: none;
  }
}
</style>
