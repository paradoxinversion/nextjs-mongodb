/**
 * This schema/model represents a Person who can 'own' one or more Possessions
 */
import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  bio: String,
  possessions: [{ type: Schema.Types.ObjectId, ref: "Possession" }],
});

// We try to get an existing 'Person' model.
// If one does not exist (throwing an error on check), we create a new one
let Person;
try {
  Person = mongoose.model("Person");
} catch {
  Person = mongoose.model("Person", PersonSchema);
}
export default Person;
