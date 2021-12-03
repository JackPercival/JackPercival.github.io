import React from "react";

function Service({ service }) {
  const { title, content, icon, color, contentColor, padding } = service;


  return (
    <div
      className="service-box rounded data-background text-center"
      data-color="#6C6CE5"
      style={{
        // background: color,
        // boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
      }}
    >
      <>
        {padding? (
          <img src={icon} alt={title} className="rounded" style={{padding: '15px'}} />
        ) : (
          <img src={icon} alt={title} className="rounded"/>
        )}
        <h3 className="mb-3 mt-0">{title}</h3>
        {/* <p className="mb-0">{content}</p> */}
      </>
    </div>
  );
}

export default Service;
