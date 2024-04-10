import jwt from "jsonwebtoken";

const Permission = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split("")[1];
    const verify = jwt.verify(token, "12345");
    console.log(verify);
    next();
  } catch (error) {
    res.status(403).json({
      status: "403 Forbidden",
      message: "Bạn không có quyền truy cập"
    });
  }
};
export default Permission;
