import mongoose from "mongoose";

const pschema = mongoose.Schema(
  {
    // id: { type: Number },
    name: String,
    price: Number,
    descriiption: String,
    image: String,
    author: String,
  },
  {
    // id: false,
    timestamps: true,
  }
);

export const books = mongoose.model("books", pschema);
