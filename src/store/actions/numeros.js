//Actions Creators para números

import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from './actionsTypes'

export function alterarNumMin(novoNumero){
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}
export function alterarNumMax(novoNumero){
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}