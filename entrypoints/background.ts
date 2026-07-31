function dismissNotifications(): number {
  const dismissLinks = document.querySelectorAll<HTMLElement>('[id^="dismiss"]');
  dismissLinks.forEach((link) => link.click());
  return dismissLinks.length;
}

export default defineBackground(() => {
  browser.action.onClicked.addListener(async (tab) => {
    if (tab.id == null) return;

    await browser.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      func: dismissNotifications
    });
  });
});
