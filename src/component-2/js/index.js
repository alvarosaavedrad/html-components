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
      "../assets/images/1.jpg", // A
      "../assets/images/2.jpg",
      "../assets/images/3.jpg",
      "../assets/images/4.jpg", // B
      "../assets/images/5.jpg",
      "../assets/images/6.jpg",
      "../assets/images/7.jpg", // C
      "../assets/images/8.jpg",
      "../assets/images/9.jpg",
      "../assets/images/10.jpg", // D
      "../assets/images/11.jpg",
      "../assets/images/12.jpg",
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
      main: document.querySelector(".component-2-container"),
      title: document.querySelector(".component-2__texts h3"),
      description: document.querySelector(".component-2__texts div p"),
      button: document.querySelector(".component-2__texts div button"),
      images: [
        document.querySelector(".component-2__img-1 img"),
        document.querySelector(".component-2__img-2 img"),
        document.querySelector(".component-2__img-3 img"),
        document.querySelector(".component-2__img-4 img"),
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
