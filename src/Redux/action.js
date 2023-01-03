import { ADD_FAVS, DELETE_FAVS } from "./types"

export function addFavs(id) {
    return {
        type: ADD_FAVS,
        payload: id
    }
}

export function deleteFavs(id) {
    return {
        type: DELETE_FAVS,
        payload: id
    }
}

