const contactsInitialState=[]

const contactsReducer=(state=contactsInitialState,action)=> {
    switch(action.type) {
        case 'SET_CONTACTS' : {
            return [...action.payload]
        }
        case 'ADD_CONTACT' : {
            return [...state,action.payload]
        }
        case 'EDIT_CONTACT' : {
            return state.map(contact=>{
            if(contact.id==action.payload.id) {
                return {...contact,...action.payload.contact}
            } else {
                return {...contact}
            }
        })
    }
    case 'SEARCH_CONTACT' : {
        return action.payload
    }
    case 'DELETE_CONTACT' : {
        return [...state.filter(contact=>contact.id!=action.payload)]
    }
        default : {
            return [...state]
        }
    }
}

export default contactsReducer