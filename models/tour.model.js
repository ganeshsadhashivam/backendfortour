const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tourSchema = new Schema(
  {
    name: { type: String, required: true },
    info: { type: String, required: true },
    placeImage: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
