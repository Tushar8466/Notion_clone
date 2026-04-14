import { useEffect, useRef } from "react";

function Editor({ page, pages, setPages, setCurrentPage }) {

  const titleRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const updateTitle = (value) => {
    const updatedPages = pages.map((p) =>
      p.id === page.id ? { ...p, title: value } : p
    );

    setPages(updatedPages);

    const updatedPage = updatedPages.find((p) => p.id === page.id);
    setCurrentPage(updatedPage);
  };

  const updateBlocks = (newBlocks) => {
    const updatedPages = pages.map((p) =>
      p.id === page.id ? { ...p, content: newBlocks } : p
    );

    setPages(updatedPages);

    const updatedPage = updatedPages.find((p) => p.id === page.id);
    setCurrentPage(updatedPage);
  };

  return (
    <div className="editor">

      <input
        ref={titleRef}
        className="title"
        value={page.title}
        onChange={(e) => updateTitle(e.target.value)}
        placeholder="Untitled"
      />

      {page.content.map((block, index) => (
        <input
          key={index}
          className="block"
          value={block}
          placeholder="Type '/' for commands..."

          onChange={(e) => {
            const newBlocks = [...page.content];
            newBlocks[index] = e.target.value;
            updateBlocks(newBlocks);
          }}

          onKeyDown={(e) => {

            if (e.key === "Enter") {
              e.preventDefault();
              const newBlocks = [...page.content];
              newBlocks.splice(index + 1, 0, "");
              updateBlocks(newBlocks);
            }

            if (e.key === "Backspace" && block === "") {
              const newBlocks = page.content.filter((_, i) => i !== index);
              updateBlocks(newBlocks);
            }

          }}
        />
      ))}

    </div>
  );
}

export default Editor;