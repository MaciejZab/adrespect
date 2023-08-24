"use strict";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

/**
 * Creates and returns an instance of the Masonry layout with specified options.
 * @returns {Object} A Masonry instance or an empty object if an error occurs.
 */
const MasonryInstance = () => {
  // Locate the parent container and sizer element
  const nodeElement = document.querySelector(`.grid-masonry`);
  const sizer = nodeElement?.querySelector(".grid-masonry-sizer");

  if (nodeElement && sizer) {
    // Masonry options
    const optionsObj = {
      itemSelector: ".grid-masonry-item",
      columnWidth: ".grid-masonry-sizer",
      percentPosition: true,
      gutter: 24,
    };

    // Create and return a new Masonry instance
    return new Masonry(nodeElement, optionsObj);
  } else {
    nodeElement ? null : console.error(`Parent node with class ".grid-masonry" not found.`);
    sizer
      ? null
      : console.error(
          `Sizer element with class ".grid-masonry-sizer" within parent node with class ".grid-masonry" not found.`
        );
    return {};
  }
};

/**
 * Builds an array of image elements from the provided inspirations.
 * @param {Array<Inspiration>|Inspirations>} - The inspirations containing path and mainPhoto information.
 * @returns {Array} An array of node image elements for the Masonry grid.
 */
const NodeInspirationsBuilder = (inspirations) => {
  const iterable = inspirations.array || inspirations;

  return iterable.map((inspiration) => {
    const figure = document.createElement("figure");
    const photo = document.createElement("img");
    photo.classList.add("grid-masonry-item");
    photo.src = `./src/assets/imgs/inspirations/${inspiration.path}/${inspiration.mainPhoto}`;
    photo.setAttribute("aria-label", inspiration.path);
    figure.appendChild(photo);

    return figure;
  });
};

/**
 * Creates a Masonry grid with the provided result.
 * @param {Object} result - The inspirations containing path and mainPhoto information.
 */
export const MasonryBuilder = (result) => {
  const nodeElement = document.querySelector(`.grid-masonry`);
  // Append built node elements to the sizer
  nodeElement?.querySelector(".grid-masonry-sizer").append(...NodeInspirationsBuilder(result));
  // Create a Masonry instance
  const masonry = MasonryInstance();

  // Update layout after all images are loaded
  imagesLoaded(masonry.element).on("always", () => {
    masonry.layout();
  });
};
