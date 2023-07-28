const { required } = require('joi');
const joi = require('joi');

const registervalidation=(data)=>{
    const schema = joi.object({
        name:joi.string().required().min(3).max(8),
        
       
        
    })
    return schema.validate(data);    
}

module.exports.registervalidation = registervalidation; 
