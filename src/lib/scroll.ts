// Header ke neeche heading kitni door rukni chahiye (px).
// Header chhota hai to kam karo, heading header se chipak rahi ho to badha do.
const HEADER_OFFSET_MOBILE = 100; // below xl (hamburger header)
const HEADER_OFFSET_DESKTOP = 120; // xl+

// offsetTop fade-in transforms (translate-y) ko ignore karta hai,
// isliye animation ke baad bhi position stable rehti hai.
const getDocTop = (el: HTMLElement) => {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
};

export function scrollToSectionId(id: string) {
  const section = document.getElementById(id);
  if (!section) return false;

  // Pehle [data-anchor], warna section ki pehli h2, warna section khud
  const target = (section.querySelector("[data-anchor]") ??
    section.querySelector("h2") ??
    section) as HTMLElement;

  const offset =
    window.innerWidth >= 1280 ? HEADER_OFFSET_DESKTOP : HEADER_OFFSET_MOBILE;

  const top = getDocTop(target) - offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  return true;
}