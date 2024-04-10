import Joi from "joi";

const PostObject = Joi.object({
  title: Joi.string().required().empty().messages({
    "any.required": "Tên không để trống",
    "string.empty": "Tên không đúng định dạng",
  }),
  description: Joi.string().required().empty().messages({
    "any.required": "Mô tả không để trống",
    "string.empty": "Mô tả không đúng định dạng",
  }),
  image: Joi.string().required().empty().messages({
    "any.required": "Ảnh không để trống",
    "string.empty": "Ảnh không đúng định dạng",
  }),
  author: Joi.string().required().empty().messages({
    "any.required": "author không để trống",
    "string.empty": "author không đúng định dạng",
  }),
  category: Joi.number().required().min(1000).messages({
    "any.required": " không để trống",
    "number.min": "không nhỏ hơn 1000",
  }),
});
export const CheckValidate = (req, res, next) => {
  const { title, description, image, author, category } = req.body;
  const { error } = PostObject.validate({
    title,
    description,
    image,
    author,
    category,
  });
  console.log(error.details);
  if (error) {
    res.send({ status: false, messages: error.message });
  } else {
    next();
  }
};
