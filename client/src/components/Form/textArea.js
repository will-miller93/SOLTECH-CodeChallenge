import React from "react";

const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" rows="10" {...props} />
  </div>
);

export default TextArea;