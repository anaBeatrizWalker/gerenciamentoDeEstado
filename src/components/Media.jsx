import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Media(props){
    
    console.log(props.min)
    console.log(props.max)

    const {min, max} = props

    return (
        <Card title='Média dos Números' green>
            <div>
                <span>
                    <span>Resulado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}
//Função que mapeia algo que está no estado (inteiro) para dentro das propriedades do componente Media
function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,        
    }
}
export default connect(mapStateToProps)(Media)