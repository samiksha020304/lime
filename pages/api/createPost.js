import connectDB from "@/utils/connectDB";
import Post from "@/models/Post";

connectDB();

export default async function handler(req, res) {
  
    try {
      const {  title, Image, header, description, author, date, category} = req.body;
      const post = new Post({
      title,
      Image,
      header,
      description,
      author,
      date,
      category,
    });

    await post.save();
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
