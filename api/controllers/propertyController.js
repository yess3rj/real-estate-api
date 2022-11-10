import Property from '../models/Property.js'

const create = async (req, res) => {
    //const { id } = req.user
   // req.body.user = id

    try {
        const property = await Property.create(req.body)
        return res.json({
            mgs: 'Propiedad creada satisfactoriamente',
            property
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al crear nueva propiedad',
            error
        })
    }
}

export { create }