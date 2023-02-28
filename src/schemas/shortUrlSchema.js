import Joi from "joi";

export const shortUrlSchema = Joi.object({
    url: Joi.string().uri({scheme: 'https' }).required()
})