import Person from "../../utils/models/Person";
import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    await connectToDatabase();
    const people = await Person.find({}).populate("possessions").lean();
    res.statusCode = 200;
    res.end(JSON.stringify({ people }));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: e.message }));
  }
};
