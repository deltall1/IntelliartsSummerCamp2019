const router = require("express").Router();
const purchaseController = require("../controllers/purchase");
const allController = require("../controllers/all");
const clearController = require("../controllers/clear");
const reportController = require("../controllers/report");

router.post("/purchase", purchaseController.purchase);
router.get("/all", allController.all);
router.post("/clear", clearController.clear);
router.post("/report", reportController.report);

module.exports = router;