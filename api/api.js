import express from 'express'
import authRoutes from './routes/authRoutes.js'
import { authValidator } from './middlewares/authValidator.js'
import userRouter from './routes/userRoutes.js'
import propertyRouter from './routes/propertyRoutes.js'

const api = express()
api.use(express.json())

api.get('/status', (_, res) => {
    res.json({
        msg: 'API funcionando'
    })
})

api.use('/auth', authRoutes)
api.use('/users', userRouter)
api.use('/property', propertyRouter)


export default api