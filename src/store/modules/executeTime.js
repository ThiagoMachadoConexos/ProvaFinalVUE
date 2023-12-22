export default {
      state: {
          executions: [
            {
                projectID: 0,
                executeTime: 2000
            }
          ],
      },
      getters:{
            getExecutionProject(state, id){
                  return state.executions.find((e) => e.projectID === id)
            }
      },
      mutations:{
            addExecuteTime(state, payLoad){
            state.projects.push(payLoad)
        },
          
      },
      actions:{
            addExecuteTime(context, payLoad){
              setTimeout(()=>{
                  context.commit('addExecuteTime', payLoad)
              }, 1000)
          }
      }
  }