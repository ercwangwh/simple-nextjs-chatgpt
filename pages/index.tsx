// require("dotenv").config({ path: `../${process.env.NODE_ENV}.env` });

import { useState, useEffect } from "react";

interface ApiData {
  data: string;
}

export default function Home() {
  // example().then(() => console.log("success"));
  const [post, setPost] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setisLoading] = useState(false);

  // const send = async () => {
  //   const message = await fetch("/api/chat-sponse", {
  //     method: "POST",
  //     body: "Hello world",
  //   });
  //   console.log(message);
  // };
  // useEffect(() => {
  //   fetch("/api/chat-sponse", { method: "POST", body: "Hello world" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setResult(data);
  //       // console.log(data);
  //     });
  // }, []);
  const get = async () => {
    // const res = await create("who are you");
    if (!isLoading) {
      setisLoading(true);
      const res = await fetch("/api/chat-test", { method: "POST", body: post });

      const data: ApiData = await res.json();
      setResult(data.data);
      // const msg = JSON.stringify(data);
      // res.body
      // setResult(res.);
      setisLoading(false);
      // console.log(data);
    }
  };

  // const handle = async () => {
  //   const result = await create("hello world");
  //   return result;
  // };

  //   alert(data);
  // });
  return (
    <div>
      <input
        id="post"
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button onClick={get} disabled={isLoading}>
        Send
      </button>
      <div>{result}</div>
    </div>
  );
}
