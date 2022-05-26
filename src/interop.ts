import browser from "webextension-polyfill";

export const executeScriptInCurrentTab = async (file: string) => {
  const tabId = (
    await browser.tabs.query({ active: true, currentWindow: true })
  )[0].id!;

  if (browser.scripting) {
    await browser.scripting.executeScript({
      target: { tabId },
      files: [file],
    });
  } else {
    await browser.tabs.executeScript(tabId, { file });
  }
};
