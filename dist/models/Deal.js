import mongoose, { Schema } from "mongoose";
const DealSchema = new Schema({
    farmer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    broker: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vegetable: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ["completed"], default: "completed" },
    createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Deal", DealSchema);
