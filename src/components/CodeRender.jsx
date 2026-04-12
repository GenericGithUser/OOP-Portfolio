import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeRender({ content }){
    return (
      <>
        <div className="code border-4 border-green3-cus rounded-2xl overflow-auto m-auto h-[80vh] w-[160vh] max-[800px]:w-[100vh] max-[500px]:w-[85vw] bg-gray-800">
          <SyntaxHighlighter style={gruvboxDark} language="java" showLineNumbers="true" lineNumberStyle={{fontSize: '0.8em'}}>
            {content}
          </SyntaxHighlighter>
        </div>
      </>
    );
}

export default CodeRender