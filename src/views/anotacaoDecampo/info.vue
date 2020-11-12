<template>
    <ion-modal :is-open="isOpen" @onDidDismiss="handleDidDismiss()">
      <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Anotação de Campo</ion-title>
                <ion-buttons slot="start">
                  <ion-button @click="handleDidDismiss(true)"><ion-icon :icon="arrowBackOutline"></ion-icon></ion-button>
                </ion-buttons>
            </ion-toolbar>
            
        </ion-header>
        <ion-content class="ion-padding" :fullscreen="true">
              <ion-item>
                <ion-label>Data de Coleta: </ion-label>
                {{new Date(info.dataColeta).getDate()}}/{{new Date(info.dataColeta).getMonth() + 1}}/{{new Date(info.dataColeta).getFullYear()}}
              </ion-item>
              <ion-item>
                <ion-label>Responsável Lançamento: </ion-label>
                {{info.responsavelLancamento}}
              </ion-item>
              <ion-item>
                <ion-label>Estádio da Cultura: </ion-label>
                {{info.estadioCultura}}
              </ion-item>
              <ion-item>
              <ion-label>% de Desfolha<br>(em número inteiros) </ion-label>
              {{info.desfolha}}
              </ion-item>
              <ion-item-divider>
                <ion-label>Informar Dados Flutuação das Pragas</ion-label>
              </ion-item-divider>
              <ion-list-header>
                <ion-row>
                  <ion-col>
                    Insetos Praga
                  </ion-col>
                  <ion-col>
                    Tamanho
                  </ion-col>
                  <ion-col>
                    Média Encontrada
                  </ion-col>
                </ion-row>
              </ion-list-header>
              <ion-list v-for="item in info.flutuacaoPragas" :key="item.id"> 
                <ion-item>
                  <ion-row>
                    <ion-col>
                      {{item.nome}}
                    </ion-col>
                    <ion-col>
                      {{item.tamanho}}
                    </ion-col>
                    <ion-col>
                      {{item.mediaEncontrada}}
                    </ion-col>
                  </ion-row>
                </ion-item>
              </ion-list>
              <ion-item-divider>
                <ion-label>Informar Dados Doenças das Pragas</ion-label>
              </ion-item-divider>
              <ion-list-header>
                <ion-row>
                  <ion-col>
                    Doença Praga
                  </ion-col>
                  <ion-col>
                    Média Encontrada
                  </ion-col>
                </ion-row>
              </ion-list-header>
              <ion-list v-for="item in info.doencasPragas" :key="item.id"> 
                <ion-item>
                  <ion-row>
                    <ion-col>
                      {{item.nome}}
                    </ion-col>
                    <ion-col>
                      {{item.mediaEncontrada}}
                    </ion-col>
                  </ion-row>
                </ion-item>
              </ion-list>
              <ion-item-divider>
                <ion-label>Informar Dados de Inimigos Naturais</ion-label>
              </ion-item-divider>
              <ion-list-header>
                <ion-row>
                  <ion-col>
                    Inimigos Naturais
                  </ion-col>
                  <ion-col>
                    Média Encontrada
                  </ion-col>
                </ion-row>
              </ion-list-header>
              <ion-list v-for="item in info.inimigosNaturais" :key="item.id"> 
                <ion-item>
                  <ion-row>
                    <ion-col>
                      {{item.nome}}
                    </ion-col>
                    <ion-col>
                      {{item.mediaEncontrada}}
                    </ion-col>
                  </ion-row>
                </ion-item>
              </ion-list>
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


ion-row, ion-item {
  width: 100%;
}

</style>