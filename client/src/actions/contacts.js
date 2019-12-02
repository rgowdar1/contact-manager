import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setContacts=(contacts)=> {
    return {type:'SET_CONTACTS',payload:contacts}
}

export const startSetContacts=()=> {
    return (dispatch)=> {
        axios.get('/contacts',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const contacts=response.data
            dispatch(setContacts(contacts))
        })
    }
}

export const addContact=(contact)=> {
    return {type:'ADD_CONTACT',payload:contact}
}

export const startAddContact=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/contacts',formData, {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Contact should contain all information',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else {
            const contact=response.data
            dispatch(addContact(contact))
            props.history.push('/contacts')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Contact Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
    }
}

export const editContact=(contact,id)=> {
    return {type :'EDIT_CONTACT',
    payload : {
        contact,
        id
         }
    }
}

export const startEditContact=(formData,id,props)=> {
    return (dispatch)=> {
        axios.put(`/contacts/${id}`,formData, {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const contact=response.data
                dispatch(editContact(contact,id))
                props.history.push('/contacts')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Contact Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
}

export const searchContact=(contacts)=> {
    return {type:'SEARCH_CONTACT',payload:contacts}
}

export const startSearchContact=(value)=> {
    return (dispatch)=> {
        axios.get('/contacts',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const contacts=response.data.filter(contact=>{
                return (contact.name.toLowerCase().slice(0,value.length)==value.toLowerCase()||contact.mobile.toString().slice(0,value.length)==value)
            })
            dispatch(searchContact(contacts))
        })
    }
}

export const deleteContact=(id)=> {
    return {type:'DELETE_CONTACT',payload:id}
}

export const startDeleteContact=(id,props)=> {
    return (dispatch)=> {
        Swal.fire({
            title:'Are You sure?',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes, delete it!'
        }).then((result)=> {
            if(result.value) {
        axios.delete(`/contacts/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                dispatch(deleteContact(id))
                props.history.push('/contacts')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Contact Deleted..',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    })
 }
}

