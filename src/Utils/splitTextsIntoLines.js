export function splitTextIntoLines(element) {
  const words = element.textContent.trim().split(" ");
  element.innerHTML = "";

  const lines = [];
  const containerWidth = element.clientWidth;

  let lineMask = document.createElement("span");
  let lineText = document.createElement("span");

  lineMask.style.display = "block";
  lineMask.style.overflow = "hidden";

  lineText.style.paddingBottom = "0.25em";
  lineText.style.display = "inline-block";
  lineText.style.whiteSpace = "nowrap";

  lineMask.appendChild(lineText);
  element.appendChild(lineMask);

  words.forEach((word) => {
    const prevText = lineText.textContent;
    lineText.textContent = prevText ? `${prevText} ${word}` : word;

    if (lineText.scrollWidth > containerWidth) {
      lineText.textContent = prevText;
      lines.push(lineText);

      lineMask = document.createElement("span");
      lineText = document.createElement("span");

      lineMask.style.display = "block";
      lineMask.style.overflow = "hidden";

      lineText.style.paddingBottom = "0.25em";
      lineText.style.display = "inline-block";
      lineText.style.whiteSpace = "nowrap";
      lineText.textContent = word;

      lineMask.appendChild(lineText);
      element.appendChild(lineMask);
    }
  });

  lines.push(lineText);
  return lines;
}
