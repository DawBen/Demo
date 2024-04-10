import mongoose from "mongoose";

const pschema = mongoose.Schema(
  {
    // id: { type: Number },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: Number,
      required: true,
    },
    // title: String,
    // description: String,
    // image: String,
    // author: String,
    // category: Number
  },
  {
    // id: false,
    timestamps: true,
  }
);

export const posts = mongoose.model("posts", pschema);
