/**
 * Component 1
 */

(() => {
  /**
   * Add widget texts here!
   */

  const content = {
    title: "Descubre cómo podemos ayudarte",
    subtitle:
      "Emergya divide sus servicios y soluciones en varias áreas de especialización que, de forma individual o conjunta, maximizan los beneficios del cliente",
    blocks: [
      {
        href: "#",
        src: "./assets/images/a.jpg",
        alt: "tecnología",
        h4: "tecnología",
        p: "Construímos, migramos y optimizamos grandes sistemas de información en entornos web y móvil.",
      },
      {
        href: "#",
        src: "./assets/images/b.jpg",
        alt: "digital",
        h4: "digital",
        p: "Definimos, medidos y mejoramos la estrategia digital de nuestros clientes orientada a objetivos.",
      },
      {
        href: "#",
        src: "./assets/images/c.jpg",
        alt: "outsourcing",
        h4: "outsourcing",
        p: "Tenemos los mejores profesionales, herramientas y técnicas para la externalización de servicios TI.",
      },
    ],
  };

  /**
   * View
   */

  const view = {
    base: {
      block: (href, src, alt, h4, p) => `
        <div class="component-1__block">
          <div>
            <a href="${href}">
              <div><p>+</p></div>
              <img src="${src}" alt="${alt}" />
            </a>
          </div>

          <a href="${href}">
            <h4 class="noselect">${h4}</h4>
          </a>
          
          <p class="noselect">${p}</p>
        </div>`,
    },

    elements: {
      main: document.querySelector(".component-1__container"),
      texts: {
        main: document.querySelector(".component-1__texts"),
        h3: document.querySelector(".component-1__texts h3"),
        span: document.querySelector(".component-1__texts span"),
        p: document.querySelector(".component-1__texts p"),
      },
      blocks: document.querySelector(".component-1__blocks"),
    },
  };

  /**
   * Init
   */

  (function () {
    // Set texts
    view.elements.texts.h3.textContent = content.title;
    view.elements.texts.p.innerHTML = content.subtitle;

    // Render blocks
    for (let i = 0; i < 3; i++) {
      const el = view.base.block(
        content.blocks[i].href,
        content.blocks[i].src,
        content.blocks[i].alt,
        content.blocks[i].h4.toUpperCase(),
        content.blocks[i].p
      );

      view.elements.blocks.insertAdjacentHTML("beforeend", el);
    }
  })();
})();
