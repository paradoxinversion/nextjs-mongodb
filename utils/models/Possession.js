/**
 * This schema/model represents a Possession that can be 'owned' by a person
 */
import mongoose, { Schema } from "mongoose";

const Possession = new Schema({
  possessionName: String,
  possessionValue: Number,
  owner: { type: Schema.Types.ObjectId, ref: "Person" },
});

const Possession = mongoose.model("Possession", PossessionSchema);
export default Possession;
