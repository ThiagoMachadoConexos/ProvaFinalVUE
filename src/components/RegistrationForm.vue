<template>
      <div class="form-card">
            <div class="form">
                  <div>
                        <p>Título</p>
                        <input class="form-input" type="text" name="tittle" id="tittle" placeholder="Título.." v-model="tittle">
                  </div>
                  <div>
                        <p>Area do projeto</p>
                        <select class="form-input" v-model="area">
                              <option value="none" selected disabled hidden>Selecione</option>
                              <option value="Engenharia">Engenharia</option>
                              <option value="Arquitetura">Arquitetura</option>
                              <option value="Mecanica">Mecânica</option>
                        </select>
                  </div>
                  <div>
                        <p>Responsável</p>
                        <input class="form-input" type="text" name="tittle" id="tittle" placeholder="Responsável.." v-model="responsible">
                  </div>
                  <div>
                        <p>Gasto mensal do projeto</p>
                        <input class="form-input" type="text" name="tittle" id="tittle" placeholder="Digite um valor.." v-model="price">
                  </div>
                  <div>
                        <button class="form-button" type="submit" @click="add">Cadastrar</button>
                        <button class="form-button" type="reset">Limpar</button>
                  </div>
            </div>
      </div>
</template>

<script>

import { mapActions } from 'vuex'

      export default{
            data(){
                  return{
                        sequence: 1
                  }
            },
            computed: {
            },
            watch: {
                  sequence(){
                        localStorage.setItem('sequence', this.sequence)
                  }
            },
            mounted() {
                  if (localStorage.getItem('sequence')){
                        this.sequence = localStorage.getItem('sequence')
                  }
            },
            beforeUpdate(){
                  
            },
            methods: {
                  ...mapActions(['addProject']),
                  add() {
                        const project = {
                              id: this.sequence,
                              // id: this.$store.state.projectsList.projects.length(),
                              tittle: this.tittle,
                              area: this.area,
                              responsible: this.responsible,
                              price: this.price
                        }
                        this.sequence++
                        this.$store.dispatch('addProject', project)
                        // localStorage.setItem('projects', JSON.stringify(this.$store.state.projectsList.projects))
                        setTimeout(()=>{
                              this.$router.push('/projetos')
                        }, 1500)
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