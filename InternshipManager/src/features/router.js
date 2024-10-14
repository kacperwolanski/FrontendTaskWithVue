import AddIntern from '@/pages/AddIntern.vue'
import EditIntern from '@/pages/EditIntern.vue'
import InternsList from '@/pages/internsList/InternsList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'InternsList',
    component: InternsList,
  },
  {
    path: '/add-intern',
    name: 'AddIntern',
    component: AddIntern,
  },
  {
    path: '/edit-intern/:id',
    name: 'EditIntern',
    component: EditIntern,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
