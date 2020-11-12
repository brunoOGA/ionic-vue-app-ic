<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Gerenciamento de URs</ion-title>
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
        <ion-item>
        <ion-button color="secondary" ><ion-icon :icon="reader"></ion-icon></ion-button>
        <ion-label>Canela - Antonio da Silva</ion-label>
        <ion-button color="warning" ><ion-icon :icon="pencil"></ion-icon></ion-button>
        <ion-button color="danger" ><ion-icon :icon="trash"></ion-icon></ion-button>
        </ion-item>
    </ion-list>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">MIP</ion-title>
        </ion-toolbar>
      </ion-header>
    

      <ion-fab class="botao"> 
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab> 
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { add, people, calendar, reorderFourOutline, pencil, trash, reader } from 'ionicons/icons';
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
      reorderFourOutline,
      pencil, 
      trash, 
      reader
    }
  }
});
</script>

<style scoped>
.botao {
    position: absolute;
    bottom: 72px;
    right: 32px;
}

</style>