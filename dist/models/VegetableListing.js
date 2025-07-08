// src/server/models/VegetableListing.ts
import mongoose, { Schema } from "mongoose";
// 2. Create the Schema
const VegetableListingSchema = new Schema({
    farmerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vegetableName: { type: String, required: true },
    quantity: { type: Number, required: true },
    expectedPrice: { type: Number, required: true },
    status: {
        type: String,
        enum: ["active", "sold", "cancelled"],
        default: "active",
    },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
});
// 3. Export the model
export default mongoose.model("VegetableListing", VegetableListingSchema);
