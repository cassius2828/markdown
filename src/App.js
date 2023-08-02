import { useState } from "react";
import "./App.css";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";
import { marked } from "marked";
export const defaultText = `# Welcome to my markdown previewer! 
## There are a lot of cool things to see here
### The text editor will show what you write down below in the previewer
- you can write HTML
- you can write markdown

this is a certification project from [freeCodeCamp](https://freecodecamp.org).
Check them out if you have not gotten the chance to yet!


![Jenny the Teenage Robot](https://pm1.aminoapps.com/6946/d188759063205897a7b88fc14985a13ad4261c4dr1-1332-1000v2_uhq.jpg)
 
 **This is Jenny the Teenage Robot. Aside from being a kick-butt superhero, I chose her due to having a similar color palette. A true win-win** 
 > Jenny is a state-of-the-art robotic protector of Earth, armed with advanced weaponry and devices at her disposal, but wishes to live the life of a normal teenager. 
 >
 \`const learnReact = () => newReactDev\`
 \`\`\`
 {
  character1: Jenny Wakeman,
  character2: Dr. Nora Wakeman,
  character3: Bradley Carbunkle
 } 
 \`\`\`


 >[github](https://github.com/cassius2828)
 >
 `;

//  export const defaultText2 = '`const arrowFunction = () => {}`'
//  export const defaultText3 = ```this is a code block, {cat: 12, dog: 7, fish: 2}```;

function App() {

  

  const [mark, setMark] = useState(defaultText);
  const handleChange = (e) => {
    setMark(e.target.value);
  };

  const [expandEddy, setExpandEddy] = useState(false);
  const handleSizeE = () => {
    setExpandEddy(!expandEddy);
  };

  const [expandPreevy, setExpandPreevy] = useState(false);
  const handleSizeP = () => {
    setExpandPreevy(!expandPreevy);
  };

  return (
    <div className="app-container">
      {/* toggle button logic */}
      {expandEddy ? (
        <Editor
          widthE="75vw"
          heightE="40rem"
          onClick={handleSizeE}
          onChange={handleChange}
        />
      ) : expandPreevy ? (
        <Previewer
          widthP="75vw"
          heightP="40rem"
          heightScroll="35rem"
          onClick={handleSizeP}
          markedText={marked(mark)}
        />
      ) : (
        <>
          <Editor
            style={{ width: "45vw", height: "15rem" }}
            onClick={handleSizeE}
            onChange={handleChange}
          />
          <Previewer
            heightScroll="30rem"
            onClick={handleSizeP}
            markedText={marked(mark)}
          />
        </>
      )}
    </div>
  );
}

export default App;


