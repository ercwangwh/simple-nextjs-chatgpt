import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";
import { phraseResolver } from "../../utils/api";
import create from "../../utils/getResponse";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { method } = req;
  // const { query } = req.body as { query: string };
  // if (method === "POST") {
  try {
    // const requestMethod = req.method;
    const response = await create(req.body);
    // res.setHeader("Content-Type", "application/json");
    // res.write(JSON.stringify(response));
    // res.end();
    // console.log(response);
    // res.send(response);
    res.json({ data: response });
    // res.json();
    // res.send("sdfsfsf");
    // res.status(200).json({ redes: "response" });
    // res.end(JSON.stringify(response));
    // res.status(200).json({ response });
    // resolve();
    // console.log(response);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
  // }
};
