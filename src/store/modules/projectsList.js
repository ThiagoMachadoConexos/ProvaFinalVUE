export default {
      state: {
          projects: [
            {
                id: '0',
                tittle: 'Projeto Impactar',
                area: 'Engenharia',
                responsible: 'Thiago',
                price: 2000.00
            }
          ],
      },
      getters:{
      //     valorTotal(state){
      //        return state.produtos.map(p => p.quantidade * p.preco)
      //         .reduce((total, atual) => total + atual, 0)
      //     }
      },
      mutations:{
        addProject(state, payLoad){
            state.projects.push(payLoad)
        },
          
      },
      actions:{
          addProject(context, payLoad){
              setTimeout(()=>{
                  context.commit('addProject', payLoad)
              }, 1000)
          }
      }
  }