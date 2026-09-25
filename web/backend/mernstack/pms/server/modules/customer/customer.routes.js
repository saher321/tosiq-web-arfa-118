import express from 'express'
import { customers, addCustomer, deleteCustomer, editCustomer, updateCustomer  } from './customer.controller.js'

const customerRouter = express.Router()

customerRouter.get('/customers', customers)
customerRouter.post('/customers/add', addCustomer)
customerRouter.delete('/customers/delete/:id', deleteCustomer)
customerRouter.get('/customers/edit/:id', editCustomer)
customerRouter.put('/customers/update', updateCustomer)

export default customerRouter