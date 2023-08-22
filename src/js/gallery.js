"use strict";

import { Inspiration } from "./inspirations.js";

const gallery = document.querySelector("#gallery");

/**
 * Retrieves inspiration data based on the given label from the inspirations.json file.
 *
 * @param {string} label - The label used to filter inspirations.
 * @returns {Promise<Array<Inspiration>>} - An array of Inspiration objects.
 */
const getInspirationData = async (label) => {
  try {
    const response = await fetch("src/assets/json/inspirations.json");
    const inspirationsData = await response.json();

    return await Promise.all(
      inspirationsData
        .filter((inspiration) => inspiration.name === `${label}`)
        .map((inspiration) => {
          const jpgFiles = inspiration.files.filter((file) => /\.jpg$/i.test(file));
          const path = inspiration.name;
          const mainPhoto = jpgFiles.at(0);
          const subPhotos = jpgFiles.slice(1);
          return new Inspiration(path, mainPhoto, subPhotos);
        })
    );
  } catch (error) {
    console.error("Error:", error);
    return this;
  }
};

/**
 * Builds an array of HTML elements for a carousel based on an Inspiration object's photos.
 *
 * @param {Inspiration} inspiration - An instance of the Inspiration class.
 * @returns {Array<HTMLDivElement>} - An array of div elements representing carousel items.
 */
const NodesInspirationBuilder = (inspiration) => {
  const photos = inspiration.at(0).subPhotos.slice();
  photos.unshift(inspiration.at(0).mainPhoto);
  return photos.map((photo, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item", "h-100");
    if (index === 0) {
      div.classList.add("active");
    }

    const img = document.createElement("img");
    img.classList.add("d-block", "mx-auto", "border");

    img.src = `./src/assets/imgs/inspirations/${inspiration.at(0).path}/${photo}`;

    // Attach a load event handler to calculate dimensions after image is loaded
    img.onload = () => {
      // Get the container element
      const container = document.querySelector("#realizations-carousel-inner");

      // Get the computed styles of the container
      const containerStyles = getComputedStyle(container);
      const containerPaddingTop = parseFloat(containerStyles.paddingTop);
      const containerPaddingBottom = parseFloat(containerStyles.paddingBottom);

      // Get the computed styles of the image (includes the border)
      const imgStyles = getComputedStyle(img);
      const imgBorderWidth =
        parseFloat(imgStyles.borderLeftWidth) + parseFloat(imgStyles.borderRightWidth);

      // Calculate the available width and height inside the container, accounting for padding and border
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight - containerPaddingTop - containerPaddingBottom;
      const adjustedContainerWidth = containerWidth - imgBorderWidth * 2;
      const adjustedContainerHeight = containerHeight - imgBorderWidth * 2;

      // Get the aspect ratio of the image
      const aspectRatio = img.naturalWidth / img.naturalHeight;

      // Calculate the maximum desired dimensions based on adjusted container dimensions and aspect ratio
      const maxWidth = adjustedContainerWidth;
      const maxHeight = adjustedContainerHeight;
      let desiredWidth = img.naturalWidth;
      let desiredHeight = img.naturalHeight;

      // Adjust dimensions to fit within the container's bounds while maintaining aspect ratio
      if (desiredWidth > maxWidth) {
        desiredWidth = maxWidth;
        desiredHeight = desiredWidth / aspectRatio;
      }

      if (desiredHeight > maxHeight) {
        desiredHeight = maxHeight;
        desiredWidth = desiredHeight * aspectRatio;
      }

      // Set the dimensions on the image
      img.style.width = `${desiredWidth}px`;
      img.style.height = `${desiredHeight}px`;
    };

    div.appendChild(img);
    return div;
  });
};

/**
 * Builds an array of HTML button elements for carousel indicators.
 *
 * @param {Inspiration} inspiration - An instance of the Inspiration class.
 * @returns {Array<HTMLButtonElement>} - An array of button elements representing carousel indicators.
 */
const NodesIndicatorsBuilder = (inspiration) => {
  const photos = inspiration.at(0).subPhotos.slice();
  photos.unshift(inspiration.at(0).mainPhoto);

  return photos.map((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.bsTarget = "#carouselInspiration";
    button.dataset.bsSlideTo = index;
    button.classList.add(index === 0 ? "active" : null);
    button.setAttribute("aria-label", `Slide ${index + 1}`);
    button.setAttribute("aria-current", index === 0 ? "true" : "false");

    return button;
  });
};

/**
 * Mounts the gallery by adding event listeners to masonry items and handling carousel content updates.
 */
export const mountGallery = () => {
  // close gallery carousel
  const closeButton = document.querySelector('[aria-label="close-gallery"]');
  closeButton.addEventListener("click", () => {
    gallery.setAttribute("aria-hidden", "true");
  });

  // open gallery carousel
  const masnoryItems = document.querySelectorAll(".grid-masonry-item");
  masnoryItems.forEach((item) =>
    item.addEventListener("click", () => {
      getInspirationData(item.getAttribute("aria-label"))
        .then((result) => {
          const nodesInspirations = NodesInspirationBuilder(result);
          const nodesIndicators = NodesIndicatorsBuilder(result);
          const carouselIndicators = document.querySelector(".carousel-indicators");
          const carouselInner = document.querySelector("#realizations-carousel-inner");

          // Clear existing content
          while (carouselIndicators.firstChild) {
            carouselIndicators.removeChild(carouselIndicators.firstChild);
          }
          while (carouselInner.firstChild) {
            carouselInner.removeChild(carouselInner.firstChild);
          }

          carouselIndicators.append(...nodesIndicators);
          carouselInner.append(...nodesInspirations);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      //build node
      gallery.setAttribute("aria-hidden", "false");
    })
  );
};
