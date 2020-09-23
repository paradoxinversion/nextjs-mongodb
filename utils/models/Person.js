/**
 * This schema/model represents a Person who can 'own' one or more Possessions
 */
import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema({
  firstName: String,
  lastname: String,
  birthday: Date,
  bio: String,
});

const Person = mongoose.model("Person", PersonSchema);
export default Person;
