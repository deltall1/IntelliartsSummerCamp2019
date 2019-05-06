const purchase = require("../console/purchase").createPurchase;
const all = require("../console/all").all;
const clear = require("../console/clear").clear;
const report = require("../console/report").conversion;
const help = require("../console/help").help;

module.exports = {
    purchase,
    all,
    clear,
    report,
    help
}