import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import {alterarNumMin , alterarNumMax} from '../store/actions/numeros'

function Intervalo(props){

    const {min, max} = props

    //alterarNumMin(30) => não funciona, precisa mapear

    return (
        <Card title='Intervalo de Números' red>7
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                        onChange={e=> props.alterarMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                        onChange={e=> props.alterarMax(+e.target.value)}/>
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
function mapDispatchToProps(dispatch){
    return {
        alterarMin(novoNumero){
            //action creator retorna uma action
            const action = alterarNumMin(novoNumero)
            //fazendo o dispatch
            dispatch(action)//action passada para todos os reducers
        },
        alterarMax(novoNumero){
            const action = alterarNumMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
        mapStateToProps, 
        mapDispatchToProps
        )(Intervalo)