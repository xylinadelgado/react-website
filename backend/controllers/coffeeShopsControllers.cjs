const mongoose = require("mongoose");
//const CoffeeShops = require("../Models/coffeeShops.cjs"); // adjust if your folder/file differs
const CoffeeShops = require("../Models/coffeeShops.cjs");

const getAllCoffeeShops = async (req, res) => {
  try {
    const allCoffeeShops = await CoffeeShops.find({});
    return res.status(200).json(allCoffeeShops);
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
};

const getCoffeeShops = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Bad request (invalid id)" });
    }

    const shop = await CoffeeShops.findById(id);

    if (!shop) {
      return res.status(404).json({ error: "Coffee shop not found" });
    }

    return res.status(200).json(shop);
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
};

module.exports = { getAllCoffeeShops, getCoffeeShops };
