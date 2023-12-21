<template>
      <div>
            <table>
                  <thead>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Area do Projeto</th>
                        <th>Responsável</th>
                        <th>Gasto Mensal</th>
                        <th>Executar</th>
                  </thead>
                  <tbody>
                        <tr v-for="project in projects" :key="project.id">
                              <td>{{ project.id }}</td>
                              <td>{{ project.tittle }}</td>
                              <td>{{ project.area }}</td>
                              <td>{{ project.responsible }}</td>
                              <td>{{ project.price }}</td>
                              <td><button>Executar</button></td>
                        </tr>
                  </tbody>
                  <button class="table-button"><router-link to="/cadastrar">Cadastrar Novo Projeto</router-link></button>
            </table>
      </div>
</template>

<script>
      export default {
            computed: {
                  projects(){
                        return this.$store.state.projectsList.projects
                  }
            },
            mounted() {
                  if (localStorage.getProjects()){
                        this.projects = localStorage.getProjects()
                  }
            },
            unmounted(){
                  localStorage.setItem(this.projects)
            }
      }
</script>

<style>
      table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            margin-bottom: 1rem;
      }

      th, td {
            border: 1px solid #ccc;
            padding: 10px;
      }

      th {
            background-color: #eee;
      }
      .table-button{
            width: 50%;
            height: 50px;
            margin-top: 5px;
            margin-bottom   : 5px;
            background-color: #f1f1f1;
            color: #000;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
      }
      .table-button:hover {
            background-color: #ccc;
      }
</style>