import React from "react";
import { Navbars } from "./Navbars";
import InfiniteScroll from "react-infinite-scroll-component";
import tachyons from 'tachyons';

export const Previewer = ({ markedText, onClick, widthP, heightP, heightScroll }) => {
  return (
    <div
      style={{ width: widthP, height: heightP }}
      className="previewer-container"
    >
      <div>
        <Navbars onClick={onClick} title="Previewer" />
      </div>
      <InfiniteScroll dataLength={100} height={heightScroll}>
        <div
          id="preview"
          className="previewer-content mt2 ml4"
          dangerouslySetInnerHTML={{ __html: markedText }}
        ></div>
      </InfiniteScroll>
    </div>
  );
};
