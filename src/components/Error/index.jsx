import React from "react";
import { FcCancel } from "react-icons/fc";
import "./error.scss";

const Index = ({msg}) => {
  return (
    <div className="Error">
      <div className="error-message">
        <span className="error-message-icon">
          <FcCancel size={80} />
        </span>
        {msg}
       
      </div>
      <div
        onClick={() => window.location.reload()}
        className="error-reload-button"
      >
        Reload Page
      </div>
    </div>
  );
};

export default Index;
