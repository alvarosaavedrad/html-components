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
      "Emergya divide sus servicios y soluciones en varias áreas de<br/>especialización que, de forma individual o conjunta, maximizan los<br/>beneficios del cliente",

    blocks: [
      {
        href: "#",
        src: "../assets/images/placeholder.jpg",
        alt: "tecnología",
        h3: "tecnología",
        p: "Construímos, migramos y optimizamos grandes sistemas de información en entornos web y móvil.",
      },
      {
        href: "#",
        src: "../assets/images/placeholder.jpg",
        alt: "digital",
        h3: "digital",
        p: "Definimos, medidos y mejoramos la estrategia digital de nuestros clientes orientada a objetivos.",
      },
      {
        href: "#",
        src: "../assets/images/placeholder.jpg",
        alt: "outsourcing",
        h3: "outsourcing",
        p: "Tenemos los mejores profesionales, herramientas y técnicas para la externalización de servicios TI.",
      },
    ],
  };

  /**
   * View
   */

  const view = {
    base: {
      block: (href, src, alt, h3, p) => `
        <div class="component-1-block">
          <div>
            <div>+</div>
            
            <a href="${href}">
              <img src="${src}" alt="${alt}" />
            </a>
          </div>

          <a href="${href}">
            <h3>${h3}</h3>
          </a>
          
          <p>${p}</p>
        </div>`,
    },

    elements: {
      main: document.querySelector(".component-1-container"),
      texts: {
        main: document.querySelector(".component-1-texts"),
        h3: document.querySelector(".component-1-texts h3"),
        span: document.querySelector(".component-1-texts span"),
        p: document.querySelector(".component-1-texts p"),
      },
      blocks: document.querySelector(".component-1-blocks"),
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
        content.blocks[i].h3.toUpperCase(),
        content.blocks[i].p
      );

      view.elements.blocks.insertAdjacentHTML("beforeend", el);
    }
  })();
})();
