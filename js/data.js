/* js/data.js — YOUR CONTENT: marquee phrases, projects and reviews.
   Add a project: copy one block inside PROJECTS. Add a review: copy one line inside REVIEWS. */
window.PF = window.PF || {};
PF.content = (() => {
// Marquee phrases: keep an even number of items. Short, specific, outcome-focused.
const MARQUEE = ["fast websites that rank", "clean code that scales", "wordpress to full-stack", "top rated on upwork", "built to last", "let’s build yours"];
// Projects shown in "Our Work". url "#" shows "Live link coming soon". frame:false = image has its own transparent background.
const PROJECTS = [
  { title:"Dream Records", type:"SaaS platform", subtitle:"Music Distribution & Royalty Management SaaS Platform",
    about:"A comprehensive platform where music labels manage artist submissions, releases, streaming analytics, royalty tracking and payments from one centralized dashboard. Built as a commercial SaaS, it is provided to labels on a recurring monthly service model.",
    features:["Music submission and release management","Distribution workflow for Spotify and Apple Music","Streaming analytics and revenue tracking","Royalty, balance and payment management","Excel-based analytics report processing","Artist and label management","Centralized dashboard and data management"],
    role:"Full-Stack Development, Backend Development, Database Management, API Integration",
    stack:["React.js","Node.js","Express.js","MongoDB","REST APIs","AWS S3"],
    url:"#", image:"images/dream-records.webp", size:[1000,643], tint:"#F0535B", frame:false },
  { title:"KGZ Graphics", type:"WordPress website", subtitle:"Professional WordPress Website Development",
    about:"A professional, responsive WordPress website built on an existing theme and plugins, enhanced with custom code to achieve the required design and functionality. The focus was a clean visual experience, better usability and layouts that match the brand’s identity.",
    features:["WordPress website development","Theme and plugin configuration","Elementor-based page building","Custom CSS, JavaScript and PHP enhancements","Responsive design implementation","Website functionality customization","UI and performance improvements"],
    role:"WordPress Development, Website Customization, Responsive Design",
    stack:["WordPress","Elementor","HTML5","CSS3","JavaScript","PHP"],
    url:"https://demo-site.kgzgraphics.com/", image:"images/kgz-graphics.webp", size:[1000,638], tint:"#F28C28" },
  { title:"Thrive Global", type:"WordPress website", subtitle:"Corporate & Event Website Development",
    about:"A professional corporate and event website built with WordPress, using an existing theme and plugins with custom code enhancements for the required design and functionality. The focus was a polished user experience, responsive layouts and an effective way to present the brand and its events.",
    features:["WordPress website development","Theme and plugin customization","Elementor page building","Custom CSS, JavaScript and PHP enhancements","Responsive layout implementation","Website functionality enhancements","UI and user experience improvements"],
    role:"WordPress Development, Website Customization, UI Implementation",
    stack:["WordPress","Elementor","HTML5","CSS3","JavaScript","PHP"],
    url:"https://thriveglobalforum.com/", image:"images/thrive-global.webp", size:[1000,564], tint:"#2F7D32" }
];
// Upwork reviews. Paste each review exactly as written. The text below is placeholder text.
const REVIEWS = [
  { text:"[Paste the client’s Upwork review here.]", author:"Client name", job:"Project title", rating:5 },
  { text:"[Paste the second review here.]", author:"Client name", job:"Project title", rating:5 },
  { text:"[Paste the third review here.]", author:"Client name", job:"Project title", rating:5 },
  { text:"[Paste the fourth review here.]", author:"Client name", job:"Project title", rating:5 }
];
return { MARQUEE, PROJECTS, REVIEWS };
})();
