import { isMobile } from "../utils/userAgent";

if (isMobile()) {
  const int = setInterval(() => {
    try {
      const container = document.querySelector(
        "#hubspot-messages-iframe-container"
      ) as any;
      if (container.style.display === "none") {
        clearInterval(int);
        return;
      }
      container.setAttribute(
        "style",
        "display: none !important; visibility: hidden !important;"
      );
    } catch {}
  }, 200);
}
