import performance from "./performance";
import { listenerError } from "./listenerError";
import { promiseError } from  './promiseError'
import { requestError,fetchError } from "./requestError";
const execute = () => {
    performance()
    listenerError()
    promiseError()
    requestError()
    fetchError()
}


export default execute