const express=require('express')
const router=express.Router()
const contactsController=require('../app/controllers/contactsController')
const usersController=require('../app/controllers/usersController')
const {authenticateUser}=require('../app/middlewares/authenticate')

//contacts
router.get('/contacts',authenticateUser,contactsController.list)
router.post('/contacts',authenticateUser,contactsController.create)
router.get('/contacts/:id',authenticateUser,contactsController.show)
router.put('/contacts/:id',authenticateUser,contactsController.update)
router.delete('/contacts/:id',authenticateUser,contactsController.destroy)

//users
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser, usersController.account)
router.delete('/users/logout',authenticateUser, usersController.logout)

module.exports=router