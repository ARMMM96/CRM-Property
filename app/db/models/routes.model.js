const mongoose = require("mongoose");

const routesSchema = new mongoose.Schema({
    url: { type: String, uniqe: true, required: true, trim: true },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "rules" }],
});

const Routes = mongoose.model("Routes", routesSchema);

module.exports = Routes;
