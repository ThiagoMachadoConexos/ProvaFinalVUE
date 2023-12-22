<template>
      <div>
            <table>
                  <thead>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Area do Projeto</th>
                        <th>Responsável</th>
                        <th>Gasto Mensal</th>
                        <th>Tempo de Execução</th>
                  </thead>
                  <tbody>
                        <tr v-for="project in projects" :key="project.id">
                              <td>{{ project.id }}</td>
                              <td>{{ project.tittle }}</td>
                              <td>{{ project.area }}</td>
                              <td>{{ project.responsible }}</td>
                              <td>{{ project.price }}</td>
                              <td>{{ project.executeTime }}</td>
                        </tr>
                  </tbody>
                  <tfoot>
                        <th>Total</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th>{{ total }} </th>
                  </tfoot>
            </table>
      </div>
</template>

<script>

      export default {
            data(){
                  return{
                        projectsArray: []
                  }
            },
            computed: {
                  projects(){
                        return this.$store.state.projectsList.projects
                  },
                  total(){
                        var total =0;
                        this.$store.state.projectsList.projects.forEach(element => {
                              total += element.executeTime
                        })
                        return total
                  }
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
      .button-card {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
      }

      .menu-button:hover {
      background-color: #ccc;
      }

      .table-button{
            width: 50%;
            height: 50px;
            margin-top: 5px;
            margin-bottom   : 5px;
            background-color: #f1f1f1;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
      }

      .table-button:hover {
            background-color: #ccc;
      }
</style>