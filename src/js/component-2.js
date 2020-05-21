/**
 * Component 2
 */

(() => {
  /**
   * Add widget texts here!
   */

  const content = {
    title: "Grandes clientes",
    description:
      "Estamos orgullosos de trabajar para grandes marcas y entidades, contribuyendo a que alcancen con éxito sus objetivos de negocio.",
    btn: "Conoce nuestros proyectos",
    images: [
      "./assets/images/css.png", // A
      "./assets/images/docker.png",
      "./assets/images/github.png",
      "./assets/images/html5.png", // B
      "./assets/images/js.png",
      "./assets/images/mongodb.png",
      "./assets/images/node.png", // C
      "./assets/images/postman.png",
      "./assets/images/sass.png",
      "./assets/images/ubuntu.png", // D
      "./assets/images/vscode.png",
      "./assets/images/vue.png",
    ],
  };

  /**
   * Data
   */
  const data = {
    intervals: [],
  };

  /**
   * View
   */

  const view = {
    base: {},

    elements: {
      main: document.querySelector(".component-2__container"),
      title: document.querySelector(".component-2__texts h3"),
      description: document.querySelector(".component-2__texts div p"),
      button: document.querySelector(".component-2__texts div button"),
      images: [
        document.querySelector(".component-2__image--1 img"),
        document.querySelector(".component-2__image--2 img"),
        document.querySelector(".component-2__image--3 img"),
        document.querySelector(".component-2__image--4 img"),
      ],
    },
  };

  /**
   * Controller
   */

  const carousel = (imgIndex, initIndex) => {
    data.intervals.push({
      index: initIndex,
    });

    data.intervals[imgIndex].interval = setInterval(() => carouselCallback(imgIndex), 4000);
  };

  const carouselCallback = (index) => {
    data.intervals[index].index++;
    data.intervals[index].index = data.intervals[index].index < content.images.length ? data.intervals[index].index : 0;
    view.elements.images[index].setAttribute("src", content.images[data.intervals[index].index]);
  };

  /**
   * Init
   */

  (function () {
    // Set texts
    view.elements.title.textContent = content.title;
    view.elements.description.textContent = content.description;
    view.elements.button.textContent = content.btn;

    // Init intervals
    for (let i = 0; i < view.elements.images.length; i++) {
      view.elements.images[i].setAttribute("src", content.images[i * 3]);
      carousel(i, i * 3);
    }
  })();
})();
