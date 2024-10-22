interface EmbedCodeProps {
  html: string
}

export const EmbedCode: React.FC<EmbedCodeProps> = ({ html }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}/>
  );
};
