const { ADD_FAVS, DELETE_FAVS } = require('../Redux/types');

const initialState = {
    myFavorites : []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVS:
            return {
                ...state,
                myFavorites: [...state.myFavorites,action.payload]
            }
        case DELETE_FAVS:
            return {
              ...state,
             myFavorites: state.myFavorites.filter(a => a.id !== action.payload)
            }
        default : 
            return state;
}
}

export default rootReducer;