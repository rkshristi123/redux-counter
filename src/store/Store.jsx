import { legacy_createStore} from "redux"
import { Reducer } from "./Reducer"

let initialstate={
    count:0
}
export const store= legacy_createStore(Reducer,initialstate)