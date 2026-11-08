
/* js/work.js — "Our Work" accordion.
   One project is always open. Hover (mouse) or tap / Enter (touch, keyboard) switches to another one.
   Every project opens to the same height (the tallest one), so the page below never jumps. */
PF.initWork = () => {
const $ = PF.$;
const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
const fineMouse = matchMedia("(hover:hover) and (pointer:fine)").matches;
const list = $("work-list"), rows = [...list.children];
let openRow = null, hoverTimer;

// 1. Give every project the same expanded height, so switching never changes the page height.
const equalize = () => {
  list.style.removeProperty("--inner-h");
  const tallest = Math.max(...rows.map(r => r.querySelector(".proj-inner").offsetHeight));
  list.style.setProperty("--inner-h", tallest + "px");
};

// 2. Open or close one row (the closing and opening rows use the same timing, so the total height stays constant).
function setRow(row, open) {
  const body = row.querySelector(".proj-body");
  row.classList.toggle("is-open", open);
  row.querySelector(".proj-head").setAttribute("aria-expanded", open);
  gsap.to(body, { height:open ? "auto" : 0, duration:reduced ? 0 : .7, ease:"power3.inOut", overwrite:true });
  if (open && !reduced) gsap.fromTo(body.querySelectorAll(".proj-text>*, .proj-visual"), { opacity:0, y:24 },
    { opacity:1, y:0, duration:.7, stagger:.06, delay:.2, ease:"power3.out", clearProps:"transform", overwrite:true });
}
const show = row => {
  if (row === openRow) return;
  if (openRow) setRow(openRow, false);
  openRow = row;
  setRow(row, true);
};

// 3. Start with the first project open (no animation).
equalize();
openRow = rows[0];
openRow.classList.add("is-open");
openRow.querySelector(".proj-head").setAttribute("aria-expanded", true);
gsap.set(openRow.querySelector(".proj-body"), { height:"auto" });

// 4. Events.
rows.forEach(row => {
  const head = row.querySelector(".proj-head");
  head.addEventListener("click", e => {
    show(row);                                                    // a click never closes a project, it only opens it
    if (e.pointerType === "touch") setTimeout(() => PF.lenis ? PF.lenis.scrollTo(head, { offset:-90 }) : head.scrollIntoView({ behavior:"smooth", block:"start" }), 750);
  });
  if (fineMouse) {
    head.addEventListener("mouseenter", () => hoverTimer = setTimeout(() => show(row), 120));   // small delay avoids accidental opens
    head.addEventListener("mouseleave", () => clearTimeout(hoverTimer));
  }
});

// 5. Re-measure when the window is resized or the fonts finish loading.
ScrollTrigger.addEventListener("refreshInit", equalize);
if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
};
