/**
 * This file contains various helper functions for interacting with the database
 */

import mongoose from "mongoose";

/**
 * Creates a connection to the database
 * @returns The mongoose database connection
 */
export async function connectToDatabase() {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    // We'll return the connection if it's successful.
    return connection;
  } catch (e) {
    switch (e.name) {
      case "MongooseServerSelectionError":
        console.log(
          "DB Connection to the DB failed-- double check DATABASE_URI and ensure remote or local database is reachable"
        );
        break;

      default:
        console.log(
          "Something went wrong while trying to connect to the database."
        );
        break;
    }
    // We'll return null if connection fails.
    return null;
  }
}
