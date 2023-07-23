const jwt = require('jsonwebtoken')
const user = require('../../models/user')
const bcrypt = require('bcryptjs')


const loginController = async (req, res) => {
    const { body } = req
    const { email, password } = body

        const foundedUser = await user.findOne({ email: email })        
        
        const passwordCorrect = foundedUser == undefined
        ? false
        : await bcrypt.compare(password, foundedUser.password)
        
        if (!(foundedUser && passwordCorrect)) {
            return res.status(401).json({
                error: 'usuario o contraseña invalida'
            })
        }        

        const userToken = {
            id: foundedUser._id,
            useremail: foundedUser.email
        }

        const token = jwt.sign(userToken, process.env.JWT_SECRET)

        return res.status(201).send({
            useremail: foundedUser.email,
            usertoken: token
        })
};
module.exports = loginController;