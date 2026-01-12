"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="px-2.5 py-1 text-xs font-medium rounded bg-[#3b4252] text-[#d8dee9] hover:bg-[#4c566a] transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="rounded overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#21252b] border-b border-[#181a1f]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e06c75]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e5c07b]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#98c379]" />
          </div>
          <span className="text-[11px] text-[#636d83] ml-1.5">{language}</span>
        </div>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            background: "#282c34",
          }}
          codeTagProps={{
            style: {
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
