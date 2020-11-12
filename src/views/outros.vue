<template>
  <ion-page>
    <!-- teste -->
    
    <!-- teste -->
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Outros</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

    <ion-tabs >
      <ion-tab-bar slot="botton">
        <ion-tab-button tab="ur" @click="() => router.push('/')">
            <ion-icon :icon="people"></ion-icon>
            <ion-label>Unidade de Referência</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="pesquisa" @click="() => router.push('/pesquisa')">
            <ion-icon :icon="calendar"></ion-icon>
            <ion-label>Pesquisa</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="inbox" @click="() => router.push('/outros')">
            <ion-icon :icon="reorderFourOutline"></ion-icon>
            <ion-label>Outros</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

      <ion-list>
        <ion-item-divider>
          <ion-label>Pesquisa</ion-label>
        </ion-item-divider>
        <ion-button  expand="block">Safra</ion-button>
        <ion-button  expand="block">Cultivar</ion-button>
        <ion-item-divider>
          <ion-label>MIP</ion-label>
        </ion-item-divider>
        <ion-button @click="() => router.push('/praga')" expand="block">Pragas</ion-button>
        <ion-button @click="() => router.push('/doencadepragas')" expand="block">Doenças de Pragas</ion-button>
        <ion-button @click="() => router.push('/inimigosnaturais')" expand="block">Inimigos Naturais</ion-button>
        <ion-item-divider>
          <ion-label>MID</ion-label>
        </ion-item-divider>
        <ion-button  expand="block">Entidades</ion-button>
        <ion-button  expand="block">Profissionais</ion-button>
        <ion-item-divider>
          <ion-label>Pulverização</ion-label>
        </ion-item-divider>
        <ion-button  expand="block">Alvos/Funções</ion-button>
        <ion-button  expand="block">Produtos</ion-button>
        <ion-item-divider>
          <ion-label>Usuários</ion-label>
        </ion-item-divider>
        <ion-button  expand="block">Gerenciamento de Usuários</ion-button>
      </ion-list>
    
      

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { add, people, calendar, reorderFourOutline } from 'ionicons/icons';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonTabs,
  IonTabBar,
  IonTabButton, 
  IonIcon
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon
  },
  setup() {
    return {
      router: useRouter(),
      add,
      people,
      calendar,
      reorderFourOutline
    }
  }
});
</script>

<style scoped>
</style>