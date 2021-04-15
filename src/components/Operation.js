import React, { Component } from 'react'


export default class Operation extends Component {
    operations = [
        {id : 1, name : "+" , sigle: "+"},
        {id : 2, name : "-" , sigle: "-"},
        {id : 3, name : "*" , sigle: "*"},
        {id : 4, name : "/" , sigle: "/"},
    ]        
    render() {
        return (
            <div>
                <select onChange = {this.props.onChange}>
                    <option value="">Sélectionner votre opération</option>
                    {this.operations.map((op) => <option value={op.sigle}>{op.sigle}</option>)}
                </select>
            </div>
        )
    }
}
