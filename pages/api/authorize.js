import { connectToDatabase } from "@/lib/dbConnect";
import model from "@/lib/model";
export default async function handler(req, res) {

  const { password } = req.query;
  await connectToDatabase();
  try {
    const pwd = await model.findOne()

    if(!pwd) return res.status(500).json({ message: "Unauthorized access: NP" });

    if(pwd.password === password) {
      res.status(200).json("success")
    }else {
      return res.status(401).json({ error: 'failed to load data' })
    }
    

  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
