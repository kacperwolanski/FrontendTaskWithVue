<template>
  <div>
    <HeaderRow />
    <div v-for="intern in interns" :key="intern.id">
      <ListItem
        :userName="intern.first_name + ' ' + intern.last_name"
        :profileImgUrl="intern.avatar"
      >
        <div class="userButtons">
          <EditButton :onClick="() => editIntern(intern.id)" />
          <DeleteButton :onClick="() => deleteIntern(intern.id)" />
        </div>
      </ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import HeaderRow from './HeaderRow.vue'
import { deleteIntern, fetchInterns } from '@/features/apiClient'
import EditButton from '@/components/EditButton.vue'
import DeleteButton from '@/components/DeleteButton.vue'

export default {
  name: 'InternsTable',
  components: {
    HeaderRow,
    EditButton,
    DeleteButton,
    ListItem,
  },
  data() {
    return {
      interns: [],
    }
  },
  async mounted() {
    this.interns = await fetchInterns()
  },
  methods: {
    async deleteIntern(id) {
      await deleteIntern(id)
      this.interns = this.interns.filter(intern => intern.id !== id)
    },
    editIntern(id) {
      console.log('editing: ', id)
    },
  },
}
</script>

<style scoped>
.userButtons {
  display: flex;
  gap: 20px;
}
</style>
