/**
 * Component 2
 */

(() => {
  /**
   * Content
   */

  const content = {
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
    elements: {
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
    // Init intervals
    for (let i = 0; i < view.elements.images.length; i++) {
      view.elements.images[i].setAttribute("src", content.images[i * 3]);
      carousel(i, i * 3);
    }
  })();
})();
