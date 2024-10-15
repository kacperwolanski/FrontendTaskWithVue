<template>
  <PageContentContainer header="User List">
    <InputButtonContainer />
    <InternsTable />
  </PageContentContainer>
</template>

<script>
import PageContentContainer from '@/components/PageContentContainer.vue'
import InputButtonContainer from './InputButtonContainer.vue'
import InternsTable from './internsTable/InternsTable.vue'

export default {
  name: 'InternsList',
  components: {
    InputButtonContainer,
    InternsTable,
    PageContentContainer,
  },
}
</script>

<style scoped></style>
