/**
 * Component 2
 */

(() => {
  /**
   * Data
   */
  const data = {
    jobs: 15,
  };

  /**
   * Add widget texts here!
   */

  const content = {
    title: "Únete a nuestro equipo",
    description: `Actualmente tenemos disponibles ${data.jobs} ofertas. ¡Descúbrelas!`,
    btn: "Ver todas las ofertas",
  };

  /**
   * View
   */

  const view = {
    base: {},

    elements: {
      main: document.querySelector(".component-3-container"),
      title: document.querySelector(".component-3-container h3"),
      description: document.querySelector(".component-3-container div div p .animated-line__description"),
      button: document.querySelector(".component-3-container div button"),
    },
  };

  /**
   * Controller
   */

  const initTypeWriter = () => {
    /**
     * Source: https://www.w3schools.com/howto/howto_js_typewriter.asp
     */

    let i = 0;
    const txt = content.description; /* The text */
    const speed = 65; /* The speed/duration of the effect in milliseconds */

    typeWriter();

    function typeWriter() {
      if (i < txt.length) {
        const factor = txt.charAt(i) === "." ? 8 : txt.charAt(i) === "," ? 4 : 1;
        view.elements.description.textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed * factor);
      } else {
        setTimeout(() => {
          view.elements.description.textContent = "";
          initTypeWriter();
        }, 5000);
      }
    }
  };

  /**
   * Init
   */

  (function () {
    // Set texts
    view.elements.title.textContent = content.title;
    view.elements.button.textContent = content.btn;

    // Init Type Writer
    initTypeWriter();
  })();
})();
