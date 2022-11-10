import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import User from '../models/User.js'
import config from '../config/index.js'

const register = async (req, res) => {
    try {
        const hashed = await bcrypt.hash(req.body.password, 10)

        req.body.password = hashed

        const user = await User.create(req.body)

        user.password = undefined

        return res.json({
            msg: 'Usuario creado exitosamente',
            user
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al resgistrar usuario, intente más tarde',
            error
        })
    }
}

const login = async(req, res) => {
    const { body } = req
    if(!body.password || !body.email) {
        return res.statur(400).json({
            msg: 'Ingresa correo y contraseña'
        })
    }
    try {
        const user = await User.findOne({
            email: body.email
        })

        if(!user) {
            return res.status(403).json({
                msg: 'Credenciales inválidas'
            })
        }

        const isValid = await bcrypt.compare(body.password, user.password)

        if(!isValid) {
            return res.status(403).json({
                msg: 'Crdenciales inválidas'
            })
        }

        const payload = {
            userId: user.id
        }

        const token = jwt.encode(payload, config.jwtSecret)

        return res.json({
            msg: 'Login correcto',
            token
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al hacer login',
            error
        })
    }
}

export { register, login }