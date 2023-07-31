import model from "@/lib/model";
import mongoose from "mongoose";
export default async function handler(req, res) {
  const { type, password } = req.query;

  await mongoose
    .connect(
      "mongodb+srv://devitzmepvk:TISlC040r7P58EjU@cluster0.7ljyzv8.mongodb.net/?retryWrites=true&w=majority",
      {}
    )
    .then(() => console.log("MongoDB Connected"));

  try {
    if (type === "CREATE") {
      const User = new model({ password });
      await User.save();
      return res.status(200).json({ message: "Password Create Successfully" });
    } else if (type === "UPDATE") {
      await model.deleteMany({});
      const User = new model({ password });
      await User.save();
      return res.status(200).json({ message: "Password Update Successfully" });
    } else {
      await model.find().then((pwd) => res.status(200).json(pwd));
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
