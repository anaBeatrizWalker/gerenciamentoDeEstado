import React from 'react'
import Card from './Card'

export default props =>{
    
    const { max, min } = props
    //const min = props.min
    //const max = props.max

    return (
        <Card title='Média dos Números' green>
            <div>
                <span>
                    <span>Resulado:</span>
                    <strong>{(max + min)/2}</strong>
                </span>
            </div>
        </Card>
    )
}