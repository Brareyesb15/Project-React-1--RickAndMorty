const { ADD_FAVS, DELETE_FAVS,ORDER,FILTER, MOSTRAR } = require('../Redux/types');

const initialState = {
    myFavorites : [],  
    allCharacters: []  
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVS:
            
            return {
                ...state,
                myFavorites: [...state.allCharacters ,action.payload],
                allCharacters : [...state.allCharacters,action.payload]
            }
           
            
        case  FILTER:
            const copia = [...state.allCharacters];
            const filtrar = copia.filter(pj => pj.gender === action.payload)
            return {
                ...state,
                myFavorites : filtrar
       
            }
        case DELETE_FAVS:
            return {
              ...state,
              allCharacters: state.allCharacters.filter(a => a.id !== action.payload)
             
            }

        case ORDER:
                return {
                    ...state,
                    myFavorites: [...action.payload] 
                }
        
        case MOSTRAR:
            return {
                ...state,
                myFavorites: [...state.allCharacters]
            }           
           
        default : 
            return state;
}
}

export default rootReducer;