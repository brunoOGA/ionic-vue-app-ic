<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/outros"></ion-back-button>
          </ion-buttons>
          <ion-title>Doença de Praga</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list v-for="item in displayList" :key="item.id"><ion-item>
            
            <ion-button color="secondary" @click="mostrarInformacoes(item)"><ion-icon :icon="reader"></ion-icon></ion-button>
            <ion-label>{{item.nome}}</ion-label>
            <ion-button color="warning" @click.self="handleEdit(item)"><ion-icon :icon="pencil"></ion-icon></ion-button>
            <ion-button color="danger" @click.self="handleDelete(item)"><ion-icon :icon="trash"></ion-icon></ion-button>
          </ion-item>
        </ion-list>
        <doenca-info :is-open="informacoes.show" :initialValues="informacoes.data" @modal-close="handleInfoClosed"/>
        <nova-doenca :is-open="modalInfo.show" :initialValues="modalInfo.data" @modal-closed="handleModalClosed"/>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button @click="showModal">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { 
  add,
  pencil,
  trash,
  reader,
} from 'ionicons/icons';
import { 
  IonPage,
  IonBackButton,
  IonButtons,
} from '@ionic/vue';
import { defineComponent, reactive, computed} from 'vue';
import { useRouter } from 'vue-router';
import NovaDoenca from "./new.vue";
import DoencaInfo from "./info.vue";

export default defineComponent({
  components: { 
    IonPage,
    IonBackButton,
    IonButtons,
    NovaDoenca,
    DoencaInfo,
  },
  setup() {
    const listData = reactive<Map<string, any>>(new Map<string, any>());


    const informacoes = reactive<{show: boolean; data: any}>({
      show: false,
      data: null,
    });

    const mostrarInformacoes = (item: any) => {
      informacoes.show = true;
      informacoes.data = item;
      
    };

    const handleInfoClosed = () => {
      informacoes.show = false;
    }

    const modalInfo = reactive<{show: boolean; data: any}>({
      show: false,
      data: null,
    });

    const displayList = computed(() => Array.from(listData.values()));

    const showModal = () => {
      modalInfo.show = true;
    };
    const handleDelete = (item: any) => {
      listData.delete(item.id);
    };

    const handleEdit = (item: any) => {
      modalInfo.show = true;
      modalInfo.data = item;
    };

    const handleModalClosed = (eventData: any) => {
      modalInfo.show = false;
      if(!eventData.isCancelled) {
        if(eventData.formInfo.id) {
          listData.set(eventData.formInfo.id, {
            ...eventData.formInfo,
          });
        } else {
          const id = new Date().getTime().toString();
          listData.set(id, {
            id,
            ...eventData.formInfo,
          });
        }
        modalInfo.data = null;
      }
      
    };

    return {
      router: useRouter(),
      add,
      pencil,
      trash,
      reader,
      showModal,
      handleModalClosed,
      modalInfo,
      listData,
      displayList,
      handleDelete,
      handleEdit,
      mostrarInformacoes,
      informacoes,
      handleInfoClosed
    }
  }
});
</script>
