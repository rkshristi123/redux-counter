import { counter_dec, counter_inc, divide, multiply } from "./action.types"

export const Reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case counter_inc : {
            state.count+=Number(action.payload)
            return {...state}
        }
        case counter_dec : {
            if(state.count>0){
            state.count-=Number(action.payload)
            }
            return {...state}
        }
        case multiply : {
            state.count*=Number(action.payload)
            return {...state}
        }
        case divide : {
            state.count=state.count/Number(action.payload)
            return {...state}
        }
        default : {
            return {...state}
        }
    }

   
}