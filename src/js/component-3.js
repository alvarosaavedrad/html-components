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
    description: `Actualmente tenemos disponibles ${data.jobs} ofertas. ¡Descúbrelas!`,
  };

  /**
   * View
   */

  const view = {
    elements: {
      description: document.querySelector(".component-3__container div div p .animated-line__description"),
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
    // Init Type Writer
    initTypeWriter();
  })();
})();
