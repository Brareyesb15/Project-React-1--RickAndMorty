import { ADD_FAVS, DELETE_FAVS, ORDER, FILTER,MOSTRAR} from "./types"

export function addFavs(props) {
    return {
        type: ADD_FAVS,
        payload: props
    }
}

export function deleteFavs(id) {
    return {
        type: DELETE_FAVS,
        payload: id
    }
}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(orden){
    return {
        type: ORDER,
        payload: orden
    }
}

export function mostrarTodos(){
    return {
        type: MOSTRAR
    } 
}
