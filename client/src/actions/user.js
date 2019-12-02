import axios from '../config/axios'
import Swal from 'sweetalert2'
export const startRegisterUser=(formData,{...props})=> {
    return (dispatch)=> {
    axios.post('/users/register',formData)
    .then(response=> {
        if(response.data._id) {
       return props.history.push('/users/login')
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'User Already Exists',
                showConfirmButton: true,
                timer: 2500
              })
        }
    })
}
}

export const startLoginUser=(formData,props)=> {
        return (dispatch)=> {
        axios.post('/users/login',formData)
            .then(response=> {
                if(response.data.hasOwnProperty('errors')) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Invalid Email/Password',
                        showConfirmButton: true,
                        timer: 2500
                      })
                } else {
                    const token=response.data.token
                    console.log(token)
                   localStorage.setItem('authToken',token)
                    props.history.push('/contacts')
                    window.location.reload()
                }
            })
        }
}
export const setUser=(user)=> {
    return {type:'SET_USER',payload:user}
}

export const startSetUser=()=> {
    return (dispatch)=> {
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const user=response.data
            dispatch(setUser(user))
        })
    }
}


export const removeUser=()=> {
    return {type:'REMOVE_USER'}
}

export const logoutUser=()=> {
    return (dispatch)=> {
        axios.delete('/users/logout',{
            headers:{
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                localStorage.removeItem('authToken')
                dispatch(removeUser())         
		Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User logged out successfully',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(() => {
                window.location.href='/'
              }, 1500);
            }
        })
    }
}
