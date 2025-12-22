const express = require("express");
const {
  getAllCoffeeShops,
  getCoffeeShops

} = require("../controllers/coffeeShopsControllers.cjs");

//} = require("../controllers/coffeeShopsControllers.cjs"); // must match your filename exactly

const router = express.Router();

router.get("/", getAllCoffeeShops);
router.get("/:id", getCoffeeShops);

module.exports = router;
