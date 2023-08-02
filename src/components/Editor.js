import React from "react";
import { Navbars } from "./Navbars";
import { defaultText } from "../App";

export const Editor = ({ onChange, onClick, widthE, heightE }) => {
  return (
    <div
      style={{ width: widthE, height: heightE }}
      className="editor-container"
    >
      <div className="editor-content">
        <Navbars onClick={onClick} title="Editor" />
      </div>
      <textarea
        onChange={onChange}
        className="textarea"
        id="editor"
        type="text"
      >
        {defaultText}
      </textarea>
    </div>
  );
};
