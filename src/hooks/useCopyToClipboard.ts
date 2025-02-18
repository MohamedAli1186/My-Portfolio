import { useCallback } from "react";

const useCopyToClipboard = () => {
  const copyText = useCallback((text: string, element: HTMLElement) => {
    navigator.clipboard.writeText(text).then(() => {
      // Create tooltip element
      const tooltip = document.createElement("div");
      tooltip.textContent = "Copied!";
      tooltip.style.position = "absolute";
      tooltip.style.top = `${element.offsetTop - 30}px`;
      tooltip.style.left = `${element.offsetLeft + 50}px`;
      tooltip.style.backgroundColor = "#f97316";
      tooltip.style.color = "#ffffff";
      tooltip.style.padding = "5px 10px";
      tooltip.style.borderRadius = "5px";
      tooltip.style.fontSize = "12px";
      tooltip.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
      tooltip.style.transition = "opacity 0.3s ease";
      tooltip.style.opacity = "1";
      tooltip.style.zIndex = "10";

      // Append tooltip to the DOM
      document.body.appendChild(tooltip);

      // Remove tooltip after timeout
      setTimeout(() => {
        tooltip.style.opacity = "0";
        document.body.removeChild(tooltip);
      }, 2000);
    });
  }, []);

  const handleClick = useCallback(
    (text: string) => (event: React.MouseEvent<HTMLElement>) => {
      const element = event.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      const adjustedElement = {
        offsetTop: rect.top + window.scrollY,
        offsetLeft: rect.left + window.scrollX,
      };

      copyText(text, adjustedElement as HTMLElement);
    },
    [copyText]
  );

  return { handleClick };
};

export default useCopyToClipboard;
