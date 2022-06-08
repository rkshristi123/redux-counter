import { counter_dec, counter_inc, divide, multiply } from "./action.types";


export const add=(value)=>({type:counter_inc ,payload:value})
export const subtract=(value)=>({type:counter_dec,payload:value})
export const multiplication=(value)=>({type:multiply,payload:value})
export const division=(value)=>({type:divide,payload:value})