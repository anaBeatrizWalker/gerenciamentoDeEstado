import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Soma(props){

    const {min, max} = props 

    return (
        <Card title='Soma dos Números' blue>
            <div>
                <span>
                    <span>Resulado:</span>
                    <strong>{min + max}</strong>
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
export default connect(mapStateToProps)(Soma)