<template>
    <ion-modal
        :is-open="isOpen"
        @onDidDismiss="handleDidDismiss(true)"
    >
      <ion-page>
          <ion-header>
              <ion-toolbar>
                  <ion-title>Praga</ion-title>
                  <ion-buttons slot="start">
                    <ion-button color="danger" @click="handleDidDismiss(true)"><ion-icon :icon="arrowBackOutline"></ion-icon></ion-button>
                  </ion-buttons>
              </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-list>
              <ion-item>
                <ion-label >Nome:</ion-label>
                <ion-input v-model="formInfo.nome"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label >Nome Científico:</ion-label>
                <ion-input v-model="formInfo.nomeCientifico"></ion-input>
              </ion-item> 

              <ion-item>
              <ion-label >Tamanho</ion-label>
                <ion-select
                  :value="formInfo.tamanho"
                  @ionChange="formInfo.tamanho= $event.target.value"
                >
                  <ion-select-option value=">=1,5cm">&ge;1,5cm</ion-select-option>
                  <ion-select-option value="<1,5cm">&lt;1,5cm</ion-select-option>
                  <ion-select-option>Ninfa(3. ao .instar)</ion-select-option>
                  <ion-select-option>Ponteiros atacados</ion-select-option>
                  <ion-select-option>Adulto</ion-select-option>
                  <ion-select-option>Outro</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
              <ion-button color="danger" @click="handleDidDismiss(true)"  expand="full">CANCELAR</ion-button>
              <ion-button @click="handleDidDismiss(false)"  expand="full">SALVAR</ion-button>

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
    IonButton,
    IonLabel,
    IonInput,
  IonButtons,
} from "@ionic/vue";
import {defineComponent, SetupContext, reactive, computed, watch } from 'vue';

export default defineComponent({
    name: 'NovaPraga',
    components: {
        IonModal,
        IonPage,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButton,
        IonLabel,
        IonInput,
  IonButtons,
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
    setup (props: any, ctx: SetupContext){
      const formInfo = reactive<any> ({
        nome: "",
        nomeCientifico:  "",
        tamanho: "",
        responsavelLancamento: "João Silva",
        data: new Date(),
      });

      const inEditMode = computed(() => props.initialValues?.id ? true : false);

      watch(
        () => props.initialValues,
        (newVal) => {
          if(newVal && inEditMode.value) {
            Object.assign(formInfo, props.initialValues);
          }
        }
      );

      const handleDidDismiss = (isCancelled: boolean) => {
          if(!props.isOpen) return;

          let payload = null;

          if (isCancelled) {
            payload = {
              isCancelled: true, 
              formInfo: null,
            };
          } else if (inEditMode.value) {
            payload = {
              isCancelled: false, 
              formInfo: {...formInfo, responsavelLancamento: "João Silva",
                data: new Date(), id : props.initialValues?.id
              },
            };
          } else {
            delete formInfo.id;
            payload = {
              isCancelled: false, 
              formInfo: {...formInfo },
            };
          }
          
          ctx.emit('modal-closed', payload);

          Object.assign(formInfo, {
            nome: "",
            nomeCientifico:  "",
            tamanho: "",
            responsavelLancamento: "João Silva",
            data: new Date(),
          });
      }

      return {
          inEditMode,
          handleDidDismiss,
          formInfo,
          arrowBackOutline
      };
    }
})

</script>
<style scoped>
</style>