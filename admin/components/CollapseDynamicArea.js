import React, { useEffect } from "react";

const CollapseDynamicAreaComponent = () => {
  useEffect(() => {
    // Timeout required to skip the macrotask of rendering
    setTimeout(() => {
      const expandedContent = document.querySelectorAll(
        '[aria-expanded="true"][data-strapi-accordion-toggle="true"]'
      );

      for (let i = 0; i < expandedContent.length; i++) {
        expandedContent[i].click();
      }
    }, 0);
  }, []);

  // Nothing to render, only injected js
  return <></>;
};

export default CollapseDynamicAreaComponent;
