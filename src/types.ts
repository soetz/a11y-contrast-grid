export type ExampleMessage = {
  Payload: { message: string };
  Id: "example";
};

export enum MessageId {
  Example = "example",
}
