import { sendMessage } from "webext-bridge";
import { ExampleMessage, MessageId } from "../types";

const main = async () => {
  const message: ExampleMessage["Payload"] = {
    message: "this was sent from the page",
  };
  await sendMessage(MessageId.Example, message, "popup");
};

main();
