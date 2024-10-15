<template>
  <div class="contentContainer">
    <PageContentContainer header="Edit Intern">
      <NameInputForm title="Update User" />
    </PageContentContainer>
    <EditPhoto title="Change photo" />
  </div>
</template>

<script>
import EditPhoto from '@/components/EditPhoto.vue'
import NameInputForm from '@/components/NameInputForm.vue'
import PageContentContainer from '@/components/PageContentContainer.vue'

export default {
  name: 'EditIntern',
  components: {
    PageContentContainer,
    NameInputForm,
    EditPhoto,
  },
}
</script>

<style scoped>
.contentContainer {
  display: flex;
  gap: 20px;
  align-items: end;
  justify-content: space-between;
}
@media (max-width: 650px) {
  .contentContainer {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
