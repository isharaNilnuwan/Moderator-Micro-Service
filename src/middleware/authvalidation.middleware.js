const validator = require("../utils/validations")

const loginValidation = async (req, res, next) => {
    const validateRule = {
        "email": "required|email", 
        "password":"required|min:6",
    }

    await validator(req.body, validateRule, {}, (err, status) =>{
        console.log("auth validator")
        if (!status){
            res.status(412)
            .send({
                success: false,
                    message: 'Validation failed',
                    data: err
            })
        
        } else {
            next();
        }
    });
}

module.exports = {
    loginValidation
}