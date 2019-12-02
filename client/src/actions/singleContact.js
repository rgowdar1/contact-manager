import axios from '../config/axios'

export const setSingleContact=(contact)=> {
    return {type:'SINGLE_CONTACT',payload:contact}
}

export const startSingleContact=(id)=> {
    return (dispatch)=> {
        axios.get(`contacts/${id}`,{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const contact=response.data
            dispatch(setSingleContact(contact))
        })
    }
}