import { ChatGPTAPI } from "chatgpt";
// import dotenv from "dotenv";

// dotenv.config();

const create = async (message: string) => {
  // sessionToken is required; see below for details
  const api = new ChatGPTAPI({
    sessionToken: process.env.SESSION_TOKEN as string,
  });

  //   console.log(process.env.SESSION_TOKEN);
  // ensure the API is properly authenticated
  await api.ensureAuth();

  // send a message and wait for the response
  const response = await api.sendMessage(message);
//   console.log(response);

//   const conversation = api.getConversation();

//   // send a message and wait for the response
//   const response0 = await conversation.sendMessage("What is OpenAI?");
//   console.log(response0);

//   // send a follow-up prompt to the previous message and wait for the response
//   const response1 = await conversation.sendMessage("Can you expand on that?");
//   console.log(response1);
//   // send another follow-up to the same conversation
//   const response2 = await conversation.sendMessage("Oh cool; thank you");
//   console.log(response2);
  // response is a markdown-formatted string
  //   console.log(response);
  return response;
};

export default create;
