import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Outros from '../views/outros.vue';
import Praga from '@/views/pragas/index.vue';
import DoencaDePragas from '@/views/doencaDePragas/index.vue';
import InimigosNaturais from '@/views/inimigoNaturaDePragas/index.vue';
import AnotacaoDeCampo from '@/views/anotacaoDecampo/index.vue';
import UnidadeReferencia from '@/views/ur.vue';
import Pesquisa from '@/views/pesquisa.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/ur'
  },
  {
    path: '/ur',
    name: 'UnidadeReferencia',
    component: UnidadeReferencia
  },
  {
    path: '/outros',
    name: 'Outros',
    component: Outros
  },
  {
    path: '/pesquisa',
    name: 'Pesquisa',
    component: Pesquisa
  },
  {
    path: '/praga',
    name: 'Praga',
    component: Praga
  },
  {
    path: '/doencadepragas',
    name: 'DoencaDePragas',
    component: DoencaDePragas
  },
  {
    path: '/inimigosnaturais',
    name: 'InimigosNaturais',
    component: InimigosNaturais
  },
  {
    path: '/anotacaodecampo',
    name: 'AnotacaoDeCampo',
    component: AnotacaoDeCampo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
