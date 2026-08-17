/**
 * 초간단 Real DOM vs Virtual DOM 비교 및 최소 업데이트 (Diffing Algorithm)
 */
export const updateElement = (parent, realNode, virtualNode) => {
  // 1. 새 노드가 없으면 삭제
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  // 2. 새 노드만 새로 추가된 경우
  if (!realNode && virtualNode) {
    parent.appendChild(virtualNode);
    return;
  }

  // 3. 텍스트 노드 비교 및 교체
  if (realNode.nodeType === Node.TEXT_NODE && virtualNode.nodeType === Node.TEXT_NODE) {
    if (realNode.nodeValue !== virtualNode.nodeValue) {
      realNode.nodeValue = virtualNode.nodeValue;
    }
    return;
  }

  // 4. 태그 이름이 다른 경우 통째로 교체
  if (realNode.nodeName !== virtualNode.nodeName) {
    parent.replaceChild(virtualNode, realNode);
    return;
  }

  // 5. 속성(Attributes) 비교 및 업데이트
  updateAttributes(realNode, virtualNode);

  // 6. 자식 노드 재귀 비교
  const realChildren = Array.from(realNode.childNodes);
  const virtualChildren = Array.from(virtualNode.childNodes);
  const max = Math.max(realChildren.length, virtualChildren.length);

  for (let i = 0; i < max; i++) {
    updateElement(realNode, realChildren[i], virtualChildren[i]);
  }
};

function updateAttributes(realNode, virtualNode) {
  if (realNode.nodeType !== Node.ELEMENT_NODE) return;

  const realAttrs = Array.from(realNode.attributes);
  const virtualAttrs = Array.from(virtualNode.attributes);

  // 안 쓰는 기존 속성 제거
  for (const attr of realAttrs) {
    if (!virtualNode.hasAttribute(attr.name)) {
      realNode.removeAttribute(attr.name);
    }
  }

  // 신규/변경 속성 설정
  for (const attr of virtualAttrs) {
    if (realNode.getAttribute(attr.name) !== attr.value) {
      realNode.setAttribute(attr.name, attr.value);
    }
  }
}
