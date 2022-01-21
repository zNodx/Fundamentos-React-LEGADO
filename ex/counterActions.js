export function inc(){
    return { type : 'INC'}
}
    
export const dec = () => ({ type: 'DEC'})

export function stepChanged(e){
    return{
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}