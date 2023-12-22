
export default {
        state: {
            projects: [
                {
                    id: '0',
                    tittle: 'Projeto Impactar',
                    area: 'Engenharia',
                    responsible: 'Thiago',
                    price: 2000.00,
                    executeTime: 2000.00
                }
            ],
        },
        getters:{
            getExecutionProject(state, id){
                return state.executions.find((e) => e.projectID === id)
            },
            getProById: (state) => (id) => {
                const { propertyCountry } = state.properties.find(p=> p.id === id)
                return propertyCountry;
            }
        },
        mutations:{
            addProject(state, payLoad){
                state.projects = [...state.projects, payLoad];
            },
            loadProject(state,payLoad){
                state.projects = payLoad
            },
            addExecuteTime(state, payLoad){
                state.projects.push(payLoad)
            },      
        },
        actions:{
            addProject(context, payLoad){
                setTimeout(()=>{
                    context.commit('addProject', payLoad)
                }, 1000)
            },
            loadProject(context, payLoad){
                setTimeout(()=>{
                    context.commit('loadProject', payLoad)
                }, 1000)
            },
            addExecuteTime(context, payLoad){
                setTimeout(()=>{
                    context.commit('addExecuteTime', payLoad)
                }, 1000)
            }
        }   
  }