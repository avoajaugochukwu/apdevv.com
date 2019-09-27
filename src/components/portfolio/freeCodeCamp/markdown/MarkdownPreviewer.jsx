import React from "react";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import "./markdownpreview.css";

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: ``
    };
    this.handleMarkdownConversion = this.handleMarkdownConversion.bind(this);
  }

  handleMarkdownConversion(e) {
    e.preventDefault();
    let editor = e.target.value;

    this.setState({
      preview: editor
    });
    console.log(this.state.preview);
  }

  componentDidMount() {
    this.setState({
      preview: placeholder
    });
  }
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: "12vh" }}>
        <Helmet>
          <title>
            Markdown Previewer App | FreeCodeCamp | ApDevv.com | Front End
            Developer
          </title>
        </Helmet>
        <h1 className="display-4 text-center"> Markdown Previewer </h1>
        <div className="row justify-content-md-center mt-5">
          <div className="col-sm-5 mb-5">
            <div className="" style={{ backgroundColor: "#92162a" }}>
              <div style={{ color: "white" }}>
                <span className="display-4" >Markdown Editor</span> <span>Clear screen to start</span>
              </div>
              <textarea
                id="editor"
                className="markdown_textarea"
                onChange={this.handleMarkdownConversion}
              >
                {placeholder}
              </textarea>
            </div>
          </div>

          <div className="col-sm-5">
            <div style={{ backgroundColor: "#2962ff", color: "#fff" }}>
              <div style={{ borderBottom: "1px #ccc solid" }}>
                <h2 className="display-4">Preview</h2>
              </div>
              <div className="markdown_preview">
                <Markdown escapeHtml={true} source={this.state.preview} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
 - With different indentation levels.
    - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
// const MarkdownPreviewer = (props) => {
//   return (
//     <div className="container" style={{ paddingTop: "15vh"  }}>
//       <Helmet>
//         <title>Markdown Previewer App | FreeCodeCamp | ApDevv.com | Front End Developer</title>
//       </Helmet>
//         <h1 className="display-4 text-center">Random Quote Machine </h1>
//         <div className="row justify-content-md-center" >
//             <div className="col-sm"></div>
//             <div className="col-sm-8">
//                 <br /><br />
//                 <div>
//                   <textarea id="editor">
//                   </textarea>
//                 </div>
//                 <div id="preview">
//
//                 </div>
//             </div>
//             <div className="col-sm"></div>
//
//         </div>
//     </div>
//   )
// }
//
// export default MarkdownPreviewer
