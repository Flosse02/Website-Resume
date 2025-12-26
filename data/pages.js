const repoBase = (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost")
  ? "/" // Localhost root
  : "/Website-Resume/"; // GitHub Pages repo path

const pages = [
    { id: "indexPage", title: "Home", link: repoBase + "index.html" },
    { id: "aboutPage", title: "About", link: repoBase  + "pages/about.html" },
    { id: "projectsPage", title: "Projects", link: repoBase + "pages/projects.html" },
    { id: "contactPage", title: "Contact", link: repoBase  + "pages/contact.html" }
];