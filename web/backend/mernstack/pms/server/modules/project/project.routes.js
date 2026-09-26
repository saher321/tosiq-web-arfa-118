import express from 'express'
import { projects, addProject, deleteProject, editProject, updateProject, projectCustomers  } from './project.controller.js'

const projectRouter = express.Router()

projectRouter.get('/project-customers', projectCustomers)
projectRouter.get('/projects', projects)
projectRouter.post('/projects/add', addProject)
projectRouter.delete('/projects/delete/:id', deleteProject)
projectRouter.get('/projects/edit/:id', editProject)
projectRouter.put('/projects/update', updateProject)

export default projectRouter