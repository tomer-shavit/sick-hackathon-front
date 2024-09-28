export const highlightEditableText = (text: string) => {
  const regex = /\[([^\]]+)\]/g; // Matches text in [brackets]
  return text.split(regex).map((part, index) =>
    index % 2 === 1 ? (
      <span
        key={index}
        style={{
          backgroundColor: "rgba(248,119,119,0.3)",
          padding: "0 4px",
          borderRadius: "2px",
        }}
      >
        [{part}]
      </span>
    ) : (
      part
    ),
  );
};

export const hasPlaceholders = (text: string) => {
  const regex = /\[([^\]]+)\]/g;
  return regex.test(text);
};
