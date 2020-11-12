<template>
    <ion-modal
        :is-open="isOpen"
        @onDidDismiss="handleDidDismiss(true)"
    >
      <ion-page>
          <ion-header>
              <ion-toolbar>
                  <ion-title>Adicionar Anotação de Campo</ion-title>
                  <ion-title class="subtitulo">UR 'Canela' na 'Safra 2020/2021'</ion-title>
                  <ion-buttons slot="start">
                    <ion-button color="danger" @click="handleDidDismiss(true)"><ion-icon :icon="arrowBackOutline"></ion-icon></ion-button>
                  </ion-buttons>
              </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding" fullscream>
            <ion-list>
              <ion-item-divider>
                <ion-label>Dados de Amostragem:</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Data da coleta:</ion-label>
                <ion-datetime 
                  placeholder="..."
                  display-format="DD MM YYYY"
                  v-model="formInfo.dataColeta"
                ></ion-datetime>
              </ion-item>
              <ion-item>
              <ion-label>Estádio da Cultura:</ion-label>
                <ion-select
                    placeholder="Selecionar"
                    :value="formInfo.estadioCultura"
                    @ionChange="formInfo.estadioCultura= $event.target.value"
                    ok-text="Confirmar" cancel-text="Cancelar"
                >
                  <ion-select-option>Pré-emergência</ion-select-option>
                  <ion-select-option >VE</ion-select-option>
                  <ion-select-option>VC</ion-select-option>
                  <ion-select-option>V1</ion-select-option>
                  <ion-select-option>V2</ion-select-option>
                  <ion-select-option>V3</ion-select-option>
                  <ion-select-option>V4</ion-select-option>
                  <ion-select-option>V5</ion-select-option>
                  <ion-select-option>V6</ion-select-option>
                  <ion-select-option>V7</ion-select-option>
                  <ion-select-option>V8</ion-select-option>
                  <ion-select-option>V9</ion-select-option>
                  <ion-select-option>VE</ion-select-option>
                  <ion-select-option>VC</ion-select-option>
                  <ion-select-option>V1</ion-select-option>
                  <ion-select-option>V2</ion-select-option>
                  <ion-select-option>V3</ion-select-option>
                  <ion-select-option>V4</ion-select-option>
                  <ion-select-option>V5</ion-select-option>
                  <ion-select-option>V6</ion-select-option>
                  <ion-select-option>V7</ion-select-option>
                  <ion-select-option>V8</ion-select-option>
                  <ion-select-option>V9</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item >
                <ion-label>% de Desfolha<br>(em número inteiros)</ion-label>
                <ion-input placeholder="..." type="number" v-model="formInfo.desfolha"></ion-input>
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
              <ion-list v-for="item in formInfo.flutuacaoPragas" :key="item.id"> <!---->
                <ion-item>
                  <ion-row>
                    <ion-col>
                      {{item.nome}}
                    </ion-col>
                    <ion-col>
                      {{item.tamanho}}
                    </ion-col>
                    <ion-col>
                      <ion-input type="number" v-model="item.mediaEncontrada"></ion-input>
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
              <ion-list v-for="item in formInfo.doencasPragas" :key="item.id"> <!---->
                <ion-item>
                  <ion-row>
                    <ion-col>
                      {{item.nome}}
                    </ion-col>
                    <ion-col>
                      <ion-input type="number" v-model="item.mediaEncontrada"></ion-input>
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
              <ion-list v-for="item in formInfo.inimigosNaturais" :key="item.id"> <!---->
                <ion-item>
                  <ion-row>
                    <ion-col>
                      {{item.nome}}
                    </ion-col>
                    <ion-col>
                      <ion-input type="number" v-model="item.mediaEncontrada" clearInput></ion-input>
                    </ion-col>
                  </ion-row>
                </ion-item>
              </ion-list>
              </ion-list>
              <ion-button color="danger" @click="handleDidDismiss(true)" expand="full">CANCELAR</ion-button>
              <ion-button @click="handleDidDismiss(false)" expand="full">SALVAR</ion-button>
              
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
    IonDatetime
} from "@ionic/vue";
import {defineComponent, SetupContext, reactive, computed, watch} from 'vue';

export default defineComponent({
    name: 'NovaDoenca',
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
        IonDatetime
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

      //PRAGAS
      const pragas = []
      pragas.push({
        id: 1,
        nome: "Lagarta Da Soja (Anticarsia sp.)",
        tamanho: ">=1,5cm"
      });
      pragas.push({
        id: 2,
        nome: "Lagarta Da Soja (Anticarsia sp.)",
        tamanho: "< 1,5cm",
      });
      pragas.push({
        id: 3,
        nome: "Lagartas com Nomuraea (Doença Branca)",
        tamanho: ">=1,5cm",
      });
      //PRAGAS

      //DOENCAS PRAGAS
      const doencas = []
      doencas.push({
        id: 1,
        nome: "Lagartas com Nomuraea (Doença Branca)",
      });
      doencas.push({
        id: 2,
        nome: "Lagartas com Boculovírus (Doença Preta)",
      });
      //DOENCAS PRAGAS

      //INIMIGOS NATURAIS
      const inimigos = []
      inimigos.push({
        id: 1,
        nome: "Calosoma Granulatum",
      });
      inimigos.push({
        id: 2,
        nome: "Callida Sp.",
      });
      //INIMIGOS NATURAIS

      const formInfo = reactive<any> ({
        dataColeta: "",
        estadioCultura: "",
        desfolha: 0,
        responsavelLancamento: "João Silva",
        flutuacaoPragas: [],
        doencasPragas: [],
        inimigosNaturais: [],
        data: new Date(),
      });

      pragas.forEach(function(item, index) {
        formInfo.flutuacaoPragas.push({id: index, nome: item.nome, tamanho: item.tamanho, mediaEncontrada: 0});
      }); 

      doencas.forEach(function(item, index) {
        formInfo.doencasPragas.push({id: index, nome: item.nome, mediaEncontrada: 0});
      }); 

      inimigos.forEach(function(item, index) {
        formInfo.inimigosNaturais.push({id: index, nome: item.nome, mediaEncontrada: 0});
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
              formInfo: {...formInfo},
            };
          }
          
          ctx.emit('modal-closed', payload);
/*         
          function resetar(item: {mediaEncontrada: 0}) {
            item.mediaEncontrada = 0;
          }

          function resetarVetor(vetor: []) {
            vetor.forEach(resetar)
          }
*/

          Object.assign(formInfo, {
            dataColeta: "",
            estadioCultura: "",
            desfolha: 0,
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

ion-row, ion-item {
  width: 100%;
}

.subtitulo{
  font-size: 16px;
}

</style>