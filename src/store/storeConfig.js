import {createStore, combineReducers} from 'redux'
import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducer,
})

//Função que configura e cria o estado a partir do reducer
function storeConfig(){
    return createStore(reducers)
}
export default storeConfig