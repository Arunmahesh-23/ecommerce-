
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Product name is required"] },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    images: [
      {
        url: String,
        alt: String
      }
    ],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    inStock: { type: Boolean, default: true },
    tags: [String],
    technicalSpecs: {
      weight: String,
      dimensions: String,
      color: String,
      material: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
