<script setup lang="ts">
import { ExampleMessage, MessageId } from "../types";
import { executeScriptInCurrentTab } from "../interop";
import { onMessage } from "webext-bridge";

onMessage<ExampleMessage["Payload"], ExampleMessage["Id"]>(
  MessageId.Example,
  ({ data }) => {
    console.log(data.message);
  }
);

const main = async () => {
  await executeScriptInCurrentTab("/tab-scripts/example.js");
};

main();
</script>

<template>
  <div class="content">
    <h1>Welcome</h1>
  </div>
</template>

<style>
.content {
  min-height: 500px;
  min-width: 700px;
}
</style>
