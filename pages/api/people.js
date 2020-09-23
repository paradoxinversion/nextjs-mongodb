import { Person } from "../../utils/models/index";
import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { method } = req;
  res.setHeader("Content-Type", "application/json");

  try {
    await connectToDatabase();
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: e.message }));
  }
  switch (method) {
    case "GET": {
      const people = await Person.find({}).populate("possessions").lean();
      res.statusCode = 200;
      res.end(JSON.stringify({ people }));
      break;
    }
    case "POST": {
      const { firstName, lastName, bio, birthday } = req.body.newPerson;
      const newPerson = new Person({
        firstName,
        lastName,
        bio,
        birthday,
      });

      await newPerson.save();
      res.statusCode = 201;
      res.end(JSON.stringify({ newPerson }));
    }
    default: {
      res.statusCode = 501;
      res.end(JSON.stringify({ error: "Method not implemented" }));
      break;
    }
  }
};
