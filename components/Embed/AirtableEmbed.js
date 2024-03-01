// AirtableEmbed.js
import React from "react";

function AirtableEmbed({ embedConfig }) {
  return (
    <div className="airtable-embed">
      <iframe
        src={embedConfig.url}
        onWheel={() => {}}
        width="100%"
        height="633"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        title="Airtable Embed"
      ></iframe>
    </div>
  );
}

export default AirtableEmbed;
