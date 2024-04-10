import express from "express";
import {
  addProduct,
  delProduct,
  getProduct,
  putProduct,
} from "../controllers/product.js";
import Permission from "../middleware/permission.js";

const router = express.Router();
router.post("/products", Permission, addProduct);
router.get("/products", getProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", delProduct);
export default router;
