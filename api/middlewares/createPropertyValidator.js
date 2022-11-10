import joi from "joi";

const createPropertyValidator=async(req,res,next)=>{
    const propertySchema=joi.object({
        street:joi.string().required().max(150),
        streetNumber:joi.number().required(),
        suiteNumber:joi.string().required(),
        zipCode:joi.string().required().length(5),
        city:joi.string().required().max(30),
        country:joi.string().required().max(30),
        suburb:joi.string().required().max(30),
        propertyType:joi.string().valid('apartament', 'house', 'office','warehouse'),
        offerType:joi.string().valid('renta', 'venta'),
        price:joi.number().greater(0),
        description:joi.string().required().max(250),
        rooms:joi.number().required().max(3),
        user:joi.string().required(),
        photos:joi.string().required()
    })
    
    try {
        await propertySchema.validateAsync(req.body)
        next();
    } catch (error) {
        return res.status(400).json({
            msg: "Datos incorrectos",
            error,
          });
    }
}

export {createPropertyValidator}