/* js/work.js — "Our Work" accordion: hover (mouse) or tap / Enter (touch, keyboard) opens one project; leaving the list closes it. */
PF.initWork = () => {
const $ = PF.$;
const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
const fineMouse = matchMedia("(hover:hover) and (pointer:fine)").matches;
const list = $("work-list"), rows = [...list.children];
let openRow = null, hoverTimer, leaveTimer;

function setRow(row, open) {
  const body = row.querySelector(".proj-body");
  row.classList.toggle("is-open", open);
  row.querySelector(".proj-head").setAttribute("aria-expanded", open);
  gsap.to(body, { height:open ? "auto" : 0, duration:reduced ? 0 : (open ? .7 : .5), ease:"power3.inOut", overwrite:true });
  if (open && !reduced) gsap.fromTo(body.querySelectorAll(".proj-text>*, .proj-visual"), { opacity:0, y:24 },
    { opacity:1, y:0, duration:.7, stagger:.06, delay:.2, ease:"power3.out", clearProps:"transform", overwrite:true });
}
const show = row => { if (row === openRow) return; if (openRow) setRow(openRow, false); openRow = row; setRow(row, true); };
const hide = row => { if (row === openRow) { openRow = null; setRow(row, false); } };

rows.forEach(row => {
  const head = row.querySelector(".proj-head");
  head.addEventListener("click", e => {
    const mouse = e.pointerType === "mouse";                      // a mouse click never closes what hover opened
    row === openRow && !mouse ? hide(row) : show(row);
    if (e.pointerType === "touch") setTimeout(() => PF.lenis ? PF.lenis.scrollTo(head, { offset:-90 }) : head.scrollIntoView({ behavior:"smooth", block:"start" }), 750);
  });
  if (fineMouse) {
    head.addEventListener("mouseenter", () => hoverTimer = setTimeout(() => show(row), 120));   // small delay avoids accidental opens
    head.addEventListener("mouseleave", () => clearTimeout(hoverTimer));
  }
});
if (fineMouse) {                                                   // leaving the whole list closes the open row
  list.addEventListener("mouseleave", () => leaveTimer = setTimeout(() => openRow && hide(openRow), 400));
  list.addEventListener("mouseenter", () => clearTimeout(leaveTimer));
}
};
