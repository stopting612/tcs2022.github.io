import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import bcrypt from "bcrypt";

interface ResponseData {
  error?: string;
  msg?: string;
}


const validateForm = async (
  email: string,
  password: string
) => {



  await dbConnect();
  const emailUser = await User.findOne({ email: email });
  if (emailUser) {
    return { error: "Email already exists" };
  }

  if (password.length < 5) {
    return { error: "Password must have 5 or more characters" };
  }

  return null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const { email, password } = req.body.data;

  const errorMessage = await validateForm(email, password);
  if (errorMessage) {
    return res.status(400).json(errorMessage as ResponseData);
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create new User on MongoDB
  const newUser = new User({
    email,
    hashedPassword,
  });

  newUser
    .save()
    .then((response: any) =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser }),
      res.end()
      
    )
    .catch((err: string) =>
      res.status(400).json({ error: "Error on '/api/register': " + err }),res.end()
    );
}