import { useEffect } from "react";
import Router from "./Router";
import AccessibilityWidget from "./components/AccessibilityWidget";

function App() {
  useEffect(() => {
    if (document.querySelector("[vw]")) {
      return;
    }

    const vlibrasDiv = document.createElement("div");
    vlibrasDiv.setAttribute("vw", "true");
    vlibrasDiv.className = "enabled";

    const accessButton = document.createElement("div");
    accessButton.setAttribute("vw-access-button", "true");
    accessButton.className = "active";

    const pluginWrapper = document.createElement("div");
    pluginWrapper.setAttribute("vw-plugin-wrapper", "true");

    const topWrapper = document.createElement("div");
    topWrapper.className = "vw-plugin-top-wrapper";

    pluginWrapper.appendChild(topWrapper);
    vlibrasDiv.appendChild(accessButton);
    vlibrasDiv.appendChild(pluginWrapper);
    document.body.appendChild(vlibrasDiv);

    if (!document.querySelector("#vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;

      script.onload = () => {
        // @ts-expect-error window.VLibras is injected by external script
        if (window.VLibras) {
          // @ts-expect-error window.VLibras.Widget is provided by external plugin
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Router />
      <AccessibilityWidget />
    </>
  );
}

export default App;
