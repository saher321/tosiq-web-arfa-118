export const register = async (req, res) => {
    const { fullName, email, password, role } = req.body

    if (!fullName || !email || !password || !role) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }
}