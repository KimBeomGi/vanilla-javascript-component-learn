/**
 * TODO: Virtual DOM과 Real DOM을 비교하여 변경된 노드만 최소 교체하는 updateElement 함수를 완성하세요.
 */
export const updateElement = (parent, realNode, virtualNode) => {
  // 1. realNode는 있고 virtualNode가 없으면 제거: realNode.remove()
  // 2. realNode는 없고 virtualNode가 있으면 추가: parent.appendChild(virtualNode)
  // 3. 둘 다 텍스트 노드인 경우 내용 비교 후 대입: realNode.nodeValue = virtualNode.nodeValue
  // 4. 태그 이름이 다른 경우 교체: parent.replaceChild(virtualNode, realNode)
  // 5. 자식 노드들 재귀 비교: for (let i = 0; i < max; i++) updateElement(...)

  // ✏️ 정답지(solution/src/core/diff.js)를 참고하여 알맞게 구현해 보세요!
  // if (realNode && !virtualNode) return realNode.remove();
  // if (!realNode && virtualNode) return parent.appendChild(virtualNode);
  // if (realNode.nodeType === Node.TEXT_NODE && virtualNode.nodeType === Node.TEXT_NODE) {
  //   if (realNode.nodeValue !== virtualNode.nodeValue) realNode.nodeValue = virtualNode.nodeValue;
  //   return;
  // }
  // if (realNode.nodeName !== virtualNode.nodeName) return parent.replaceChild(virtualNode, realNode);
  // const realChildren = Array.from(realNode.childNodes);
  // const virtualChildren = Array.from(virtualNode.childNodes);
  // const max = Math.max(realChildren.length, virtualChildren.length);
  // for (let i = 0; i < max; i++) updateElement(realNode, realChildren[i], virtualChildren[i]);
};
