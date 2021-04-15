import React, { Component } from 'react'

export default class InputNumber extends Component {
    render() {
        return (
            <div>
                <input type="number" placeholder={this.props.placeholder} onChange = {this.props.onChange} value = {this.props.value}/>
            </div>
        )
    }
}
