//
import "./src/scss/main.scss";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
//
import { mountComponents } from "./src/js/components.js";
import { mountAnimations } from "./src/js/animations.js";
import { mountNavEvents } from "./src/js/events.js";
//
import { Inspirations } from "./src/js/inspirations.js";
import { MasonryBuilder } from "./src/js/masonry.js";
import { mountGallery } from "./src/js/gallery.js";

mountComponents().then(() => {
  mountAnimations();
  mountNavEvents();

  const inspirations = new Inspirations();

  // get base inspirations for masonry
  inspirations
    .getInspirations()
    // layout base masonry inspirations
    .then((result) => {
      MasonryBuilder(result);
      mountGallery();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // handle masonry expand button
  document.querySelector(`.fading-layer .button-outline-black`).addEventListener("click", () => {
    inspirations
      .getInspirations(3)
      // lay out next (@param) masonry inspirations
      .then((result) => {
        MasonryBuilder(result);
        mountGallery();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
