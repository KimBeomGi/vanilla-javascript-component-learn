export const updateElement = (parent, realNode, virtualNode) => {
  if (realNode && !virtualNode) return realNode.remove();
  if (!realNode && virtualNode) return parent.appendChild(virtualNode);
  if (realNode.nodeType === Node.TEXT_NODE && virtualNode.nodeType === Node.TEXT_NODE) {
    if (realNode.nodeValue !== virtualNode.nodeValue) realNode.nodeValue = virtualNode.nodeValue;
    return;
  }
  if (realNode.nodeName !== virtualNode.nodeName) return parent.replaceChild(virtualNode, realNode);
  const realChildren = Array.from(realNode.childNodes);
  const virtualChildren = Array.from(virtualNode.childNodes);
  const max = Math.max(realChildren.length, virtualChildren.length);
  for (let i = 0; i < max; i++) updateElement(realNode, realChildren[i], virtualChildren[i]);
};
