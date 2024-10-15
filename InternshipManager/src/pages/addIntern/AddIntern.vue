<template>
  <div class="contentContainer">
    <PageContentContainer header="Add Intern">
      <NameInputForm title="Add User" />
    </PageContentContainer>
    <EditPhoto title="Add photo" />
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
