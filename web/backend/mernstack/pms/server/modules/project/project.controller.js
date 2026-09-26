import Customer from "../customer/customer.model.js"
import Project from "./project.model.js"

export const projectCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({})
        const customerNames = customers.map((customer) => ({
            id: customer._id,
            text: customer.fullName
        }))
        
        return res.send({
            status: true,
            customerNames
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const projects = async (req, res) => {
    try {
        const projects = await Project.find({})
        return res.send({
            status: true,
            projects
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const addProject = async (req, res) => {
    const { fullName, email, phone, address } = req.body
    if (!fullName || !email || !phone) {
        return res.send({
            status: false,
            message: "Please provide remainings fields"
        })
    }

    try {
        const project = await Project.findOne({email})
        if (project){
            return res.send({
                status: false,
                message: "This email is already exists"
            })
        }

        const projectObj = { fullName, email, phone, address }
        const newProject = Project.create(projectObj)
        if (newProject) {
            return res.send({
                status: true,
                message: "Project has been added in PMS"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to add project"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}
export const deleteProject = async (req, res) => {
    const {id} = req.params
    if (!id) {
        return res.send({
            status: false,
            message: "ID not found"
        })
    }

    try {
        const project = await Project.findByIdAndDelete({_id: id})
        if (!project) {
            return res.send({
                status: false,
                message: "Project not found!"
            })
        }
        const projects = await Project.find({})
        return res.send({
            status: true,
            message: "Project has been deleted",
            projects
        })
    } catch (error) {
        throw new Error(error)
    }
}
export const editProject = async (req, res) => {
    const {id} = req.params
    if (!id) {
        return res.send({
            status: false,
            message: "ID not found"
        })
    }

    try {
        const project = await Project.findById({_id: id})
        if (!project) {
            return res.send({
                status: false,
                message: "Project not found!"
            })
        }

        return res.send({
            status: true,
            project
        })

    } catch (error) {
        throw new Error(error)
    }
}
export const updateProject = async (req, res) => {
    const { _id, fullName, email, phone, address } = req.body

    try {
        const updatedProject = { fullName, email, phone, address }
        const project = await Project.findByIdAndUpdate({_id:_id}, updatedProject )
        if (project) {
            return res.send({
                status: true,
                message: "Project has been updated"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to update project"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}