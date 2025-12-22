const mongoose = require("mongoose");
const { Schema } = mongoose;

const coffeeShopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    categories: {
      type: [String],
      index: true
    },

    address: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true,
      uppercase: true,
      maxlength: 2
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true
      }
    },

    images: [
      {
        url: String,
        alt: String
      }
    ]
  },
  { timestamps: true }
);

// IMPORTANT: geospatial index
coffeeShopSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("CoffeeShop", coffeeShopSchema);

