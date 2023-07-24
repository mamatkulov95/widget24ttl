import { useEffect } from "react";

export function use24StreamWidget() {
  useEffect(() => {
    const ttlStreamReadyPromise = window.TTLStreamReady;
    let ttlStream;

    ttlStreamReadyPromise.then((tStream) => {
      ttlStream = tStream;
      ttlStream.findAndInsert({
        brand: "Samsung",
        productId: "2237",
        retailerDomain: "activ.kz",
        templateType: "master_template",
        resultType: "html",
        contentType: "minisite",
        el: ".exampleWrapperContent",
        language: "kz_ru"
      });
    });

    return () => {
      if (ttlStream) {
        if (typeof ttlStream.cleanup === "function") {
          ttlStream.cleanup();
        }
        const widgetContainer = document.querySelector(
          ".exampleWrapperContent"
        );
        if (widgetContainer) {
          widgetContainer.innerHTML = "";
        }
      }
    };
  }, []);
}
