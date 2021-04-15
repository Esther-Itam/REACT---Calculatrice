
export const calculate = ()=>{
    return{
     type: 'CALCULATE',
    }
}

export const updateInput1 = (value)=> {
    return{
     type: 'UPDATE_INPUT_1',
     value: value   
    }   
}

export const updateInput2 = (value)=>{
    return{
     type: 'UPDATE_INPUT_2',
     value: value   
    }   
}

export const changeOperator = (value)=>{
    return {
     type: 'CHANGE_OPERATOR',
     value: value 
    }
}

export const generateNumber = ()=>{
    return {
     type: 'GENERATE_NUMBER'
    }
}