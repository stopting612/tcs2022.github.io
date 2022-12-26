import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Faq from "../../models/Faq";
import {MongoClient} from 'mongodb'

if (!process.env.MONGODB_URI) {
        throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri: string = process.env.MONGODB_URI;
interface ResponseData {
  error?: string;
  msg?: any;
  data?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    // validate if it is a POST
    if (req.method !== "GET") {
      return res
        .status(200)
        .json({ error: "This API call only accepts POST methods" });
    }

    const client = await MongoClient.connect(uri)
    const db = client.db();
    const result = await db.collection('faq').find().sort({_id: 1}).toArray();

    res.status(200).json({ data: result});
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
}
