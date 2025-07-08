// src/server/models/User.ts
import mongoose, { Schema } from "mongoose";
// 2. Now create the Mongoose Schema
const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// 3. Export the model
export default mongoose.model("User", UserSchema);
// import mongoose, { Schema, Document, Model } from "mongoose";
// // 1. Create an interface representing a User document
// export interface IUser extends Document {
//   name: string;
//   gender: string;
//   email: string;
//   dob: string;
//   password?: string;
//   phoneNo: string;
//   image?: string;
//   role?: string;
//   notification: {
//     Whatsapp: boolean;
//     SMS: boolean;
//   };
//   createdAt: Date;
//   updatedAt: Date;
// }
// // 2. Define the Schema
// const userSchema: Schema<IUser> = new Schema(
//   {
//     name: {
//       type: String,
//       default: "User",
//     },
//     gender: {
//       type: String,
//       default: "N/A",
//     },
//     email: {
//       type: String,
//       default: "N/A",
//     },
//     dob: {
//       type: String,
//       default: "N/A",
//     },
//     password: {
//       type: String,
//     },
//     phoneNo: {
//       type: String,
//       default: "N/A",
//     },
//     image: {
//       type: String,
//     },
//     role: {
//       type: String,
//     },
//     notification: {
//       Whatsapp: {
//         type: Boolean,
//         default: false,
//       },
//       SMS: {
//         type: Boolean,
//         default: false,
//       },
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// // 3. Export the Model
// const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
// export default User;
