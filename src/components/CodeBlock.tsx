interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "python" }: CodeBlockProps) => {
  return (
    <div className="code-block rounded-md overflow-hidden my-2">
      <div className="flex items-center justify-between px-3 py-1.5 bg-burgundy-muted border-b border-burgundy-muted">
        <span className="text-xs font-medium text-burgundy-dark uppercase tracking-wide">
          {language}
        </span>
      </div>
      <pre className="p-3 overflow-x-auto text-sm leading-relaxed">
        <code className="text-foreground">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
