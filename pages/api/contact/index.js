import { connectDatabase, insertDocument } from "../../../lib/db-util";

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Connecting to DB failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      client.close();
      res.status(442).json({ message: "Invalid input" });
      return;
    }

 
    const newMessage = {
      email,
      name,
      message,
    };

    let result;
    try {
      result = await insertDocument(client, "messages", newMessage);
      newMessage._id = result._id;
      res.status(201).json({ message: "Added", comment: newMessage });
    } catch (error) {
      res.status(500).json({ message: "Inserting message failed!" });
    }
  }
  client.close();
}
export default handler;
