import { Person } from "../../../utils/models";
import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  try {
    await connectToDatabase();
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: e.message }));
  }

  switch (method) {
    case "PUT": {
      const updateFields = req.body.updatePerson;
      const updatePerson = await Person.findByIdAndUpdate(id, updateFields, {
        new: true,
        lean: true,
      });
      res.statusCode = 200;
      res.end(JSON.stringify(updatePerson));
      break;
    }

    default: {
      res.statusCode = 501;
      res.end(JSON.stringify({ error: "Method not implemented" }));
      break;
    }
  }
};
