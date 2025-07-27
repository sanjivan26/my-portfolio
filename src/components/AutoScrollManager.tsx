import { useEffect } from "react";

const AutoScrollManager = () => {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");
      if (!hero || !projects || !contact) return;

      const scrollY = window.scrollY;

      const heroHeight = hero.offsetHeight;
      const projectsTop = projects.offsetTop;
      const projectsHeight = projects.offsetHeight;
      const contactTop = contact.offsetTop;

      const scrollingDown = scrollY > lastScrollY;
      const scrollingUp = scrollY < lastScrollY;

      // Scroll Down: Hero → Projects (more sensitive)
      if (
        scrollingDown &&
        scrollY > heroHeight * 0.1 &&
        scrollY < heroHeight * 0.6
      ) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          projects.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }

      // Scroll Up: Projects → Hero (more sensitive)
      if (scrollingUp && scrollY < heroHeight * 0.5) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          hero.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }

      // Scroll Down: Projects → Contact (more sensitive)
      if (
        scrollingDown &&
        scrollY > projectsTop + projectsHeight * 0.1 &&
        scrollY < contactTop
      ) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          contact.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }

      // Scroll Up: Contact → Projects (more sensitive)
      if (
        scrollingUp &&
        scrollY < contactTop &&
        scrollY > projectsTop + projectsHeight * 0.05
      ) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          projects.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }

      lastScrollY = scrollY;
    };

    const handleScrollWithRaf = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollWithRaf);
    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("scroll", handleScrollWithRaf);
    };
  }, []);

  return null;
};

export default AutoScrollManager;
