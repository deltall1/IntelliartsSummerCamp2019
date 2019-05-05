const router = require("express").Router();
const purchaseController = require("../controllers/purchase");
const allController = require("../controllers/all");
const clearController = require("../controllers/clear");

router.post("/purchase", purchaseController.purchase);
router.get("/all", allController.all);
router.post("/clear", clearController.clear);
// router.post("/report", func)

module.exports = router;