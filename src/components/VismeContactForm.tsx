import React, { useEffect } from "react";

const VismeContactForm: React.FC = () => {
  useEffect(() => {
    const scriptId = "visme-forms-script";

    // Prevent loading script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="visme_d"
      data-title="Contact Me Contact Form"
      data-url="j0nppd8g-contact-me-contact-form"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="168006"
    />
  );
};

export default VismeContactForm;