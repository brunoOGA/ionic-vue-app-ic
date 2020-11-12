<template>
    <ion-modal :is-open="isOpen" @onDidDismiss="handleDidDismiss()">
      <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Inimigo Praga</ion-title>
                <ion-buttons slot="start">
                    <ion-button @click="handleDidDismiss(true)"><ion-icon :icon="arrowBackOutline"></ion-icon></ion-button>
                  </ion-buttons>
            </ion-toolbar>
            
        </ion-header>
        <ion-content class="ion-padding" :fullscreen="true">
              <ion-item>
                <ion-label>Nome: </ion-label>
                {{info.nome}}
              </ion-item>
              <ion-item>
                <ion-label>Responsável Lançamento: </ion-label>
                {{info.responsavelLancamento}}
              </ion-item>
              <ion-item>
                <ion-label>Última Alteração: </ion-label>
                {{new Date(info.data).getDate()}}/{{new Date(info.data).getMonth() + 1}}/{{new Date(info.data).getFullYear()}}
              </ion-item>
              
          <ion-button @click="handleDidDismiss()" expand="full">CLOSE</ion-button>
        </ion-content>
      </ion-page>
    </ion-modal>
</template>

<script lang="ts">
import { 
  arrowBackOutline
} from 'ionicons/icons';
import {
    IonModal,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton
} from "@ionic/vue";
import { defineComponent, SetupContext, reactive, watch } from 'vue';

export default defineComponent({
  name: 'DoencaInfo',
  components: { 
    IonModal,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton
  },
  props: {
    isOpen: {
        default: false,
        required: true,
    },
    initialValues: {
            default: {},
    },
  },
  setup (props: any, ctx: SetupContext) {
    const info = reactive<any> ({});

      watch(
        () => props.initialValues,
        (newVal) => {
          if(newVal) {
            Object.assign(info, props.initialValues);
          }
        }
      );

    const handleDidDismiss = () => {
      ctx.emit('modal-close');
    }

    return {
      handleDidDismiss,
      info,
      arrowBackOutline
    };
  },
});
</script> 

<style scoped>
</style>