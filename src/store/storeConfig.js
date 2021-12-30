import {createStore, combineReducers} from 'redux' //combina todos os reducers para gerar a store

const reducers = combineReducers({
    numeros: function(state, action){//chave: nome do estado, valor:função que gera o estado da chave
        console.log(state, ' ', action)
        return {
            min: 1, //valores fixos
            max: 10
        }
    },
    nomes: function(state, action){
        return [
            'Ana',
            'Gustavo',
            'Pedro'
        ]
    }
})

//Função que configura e cria o estado a partir do reducer
function storeConfig(){
    return createStore(reducers)
}
export default storeConfig