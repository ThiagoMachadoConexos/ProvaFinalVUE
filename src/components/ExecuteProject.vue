<template>
      <div class="form-card">
            <div class="form">
                  <div>
                        <p>Título</p>
                        <input class="form-input" type="text" name="tittle" id="tittle" :value="project.tittle" disabled>
                  
                        <p>Area do projeto</p>
                        <input class="form-input" type="text" name="area" id="area" placeholder="Título.." :value="project.area" disabled>
                  
                        <p>Responsável</p>
                        <input class="form-input" type="text" name="responsible" id="responsible" placeholder="Responsável.." :value="project.responsible" disabled>
                  
                        <p>Gasto mensal do projeto</p>
                        <input class="form-input" type="text" name="price" id="price" placeholder="Digite um valor.." :value="project.price" disabled>
                  
                        <p>Tempo de Execução</p>
                        <input class="form-input" type="text" name="executeTime" id="executeTime" placeholder="Digite um valor.." v-model="project.executeTime">
            
                        <button class="form-button" @click="addTime">Cadastrar</button>
                        <button class="form-button"><router-link to="/projetos">Voltar</router-link> </button>
                  </div>
            </div>
      </div>
</template>

<script>

import { mapActions } from 'vuex'

      export default{
            computed: {
                  project(){
                        const id = this.$route.params.id
                        return this.$store.state.projectsList.projects[id]
                  }
            },
            methods: {
                  ...mapActions(['addExecuteTime']),
                  addTime() {
                              const time = {
                                    projectID: this.$route.params.id,
                                    time: this.executeTime
                              }
                        this.$store.dispatch('addExecuteTime', time)
                  }
            }
      }
</script>

<style>
      .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
      }

      .form-card {
            width: 500px;
            height: 400px;
            background-color: #fff;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
      }

      .form-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
      }

      .form-button {
            width: 70%;
            padding: 10px;
            margin-top: 1rem;
            background-color: #f1f1f1;
            border-radius: 5px;
            cursor: pointer;
      }

      .form-button:hover {
            background-color: #ccc;
      }
</style>