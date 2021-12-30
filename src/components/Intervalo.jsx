import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import {alterarNumMin} from '../store/actions/numeros'

function Intervalo(props){

    const {min, max} = props

    //alterarNumMin(30) => não funciona, precisa mapear

    return (
        <Card title='Intervalo de Números' red>7
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly/>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,        
    }
}
function mapActionCreatorsToProps(dispatch){
    return {
        alterarMin(novoNumero){
            //action creator retorna uma action
            const action = alterarNumMin(novoNumero)
            //fazendo o dispatch
            dispatch(action)//action passada para todos os reducers
        }
    }
}

export default connect(
        mapStateToProps, 
        mapActionCreatorsToProps
        )(Intervalo)