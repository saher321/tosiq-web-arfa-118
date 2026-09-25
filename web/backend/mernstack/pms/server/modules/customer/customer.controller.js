import Customer from "./customer.model.js"

export const customers = async (req, res) => {
    try {
        const customers = await Customer.find({})
        return res.send({
            status: true,
            customers
        })
    } catch (error) {
        throw new Error(error)
    }
}
export const addCustomer = async (req, res) => {
    const { fullName, email, phone, address } = req.body
    if (!fullName || !email || !phone) {
        return res.send({
            status: false,
            message: "Please provide remainings fields"
        })
    }

    try {
        const customer = await Customer.findOne({email})
        if (customer){
            return res.send({
                status: false,
                message: "This email is already exists"
            })
        }

        const customerObj = { fullName, email, phone, address }
        const newCustomer = Customer.create(customerObj)
        if (newCustomer) {
            return res.send({
                status: true,
                message: "Customer has been added in PMS"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to add customer"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}
export const deleteCustomer = async (req, res) => {
    const {id} = req.params
    if (!id) {
        return res.send({
            status: false,
            message: "ID not found"
        })
    }

    try {
        const customer = await Customer.findByIdAndDelete({_id: id})
        if (!customer) {
            return res.send({
                status: false,
                message: "Customer not found!"
            })
        }
        const customers = await Customer.find({})
        return res.send({
            status: true,
            message: "Customer has been deleted",
            customers
        })
    } catch (error) {
        throw new Error(error)
    }
}
export const editCustomer = async (req, res) => {
    const {id} = req.params
    if (!id) {
        return res.send({
            status: false,
            message: "ID not found"
        })
    }

    try {
        const customer = await Customer.findById({_id: id})
        if (!customer) {
            return res.send({
                status: false,
                message: "Customer not found!"
            })
        }

        return res.send({
            status: true,
            customer
        })

    } catch (error) {
        throw new Error(error)
    }
}
export const updateCustomer = async (req, res) => {
    const { _id, fullName, email, phone, address } = req.body

    try {
        const updatedCustomer = { fullName, email, phone, address }
        const customer = await Customer.findByIdAndUpdate({_id:_id}, updatedCustomer )
        if (customer) {
            return res.send({
                status: true,
                message: "Customer has been updated"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to update customer"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}