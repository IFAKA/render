import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const MDContainer = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code: ({ children }) => {
          return (
            <SyntaxHighlighter
              style={style}
              language={"tsx"}
              wrapLines={true}
              customStyle={{
                height: "100%",
                margin: 0,
                borderRadius: "0.6em",
                backgroundColor: "rgb(51 65 85 / var(--tw-bg-opacity))",
                overflow: "auto",
              }}
              key={String(children)}
            >
              {String(children)}
            </SyntaxHighlighter>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
export default MDContainer;
