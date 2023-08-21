"use strict";

export class Inspiration {
  constructor(path, mainPhoto, subPhotos) {
    this.path = path;
    this.mainPhoto = mainPhoto;
    this.subPhotos = subPhotos;
  }
}

export class Inspirations {
  constructor() {
    this.array = [];
    this.currentPage = 0;
    this.pageSize = 0;
  }

  /**
   * Retrieves a specified number of inspirations from the data source.
   *
   * @param {number|null} amount - The number of inspirations to retrieve.
   * !!! On page load if amount = null, () retrieves (baseCurrentExpansion * baseExpansionSize) of inspirations.
   * @param {number} baseCurrentExpansion - The starting expansion number.
   * @param {number} baseExpansionSize - The default number of inspirations to retrieve on each expansion.
   * @returns {Promise<Array<Inspiration>|Inspirations>} - A Promise that resolves to an array of inspirations when `amount` is provided,
   * or resolves to the current `Inspirations` instance when `amount` is null.
   */

  async getInspirations(amount = null, baseCurrentExpansion = 3, baseExpansionSize = 3) {
    if (this.array.length === 0) {
      this.currentExpansion = baseCurrentExpansion;
      this.expansionSize = baseExpansionSize;
    }

    try {
      const response = await fetch("src/assets/json/inspirations.json");
      const inspirationsData = await response.json();

      const retrievedInspirations = await Promise.all(
        inspirationsData
          .filter((_, index) =>
            this.array.length === 0
              ? index < baseCurrentExpansion * baseExpansionSize
              : index >= this.currentExpansion * this.expansionSize &&
                index < this.currentExpansion * this.expansionSize + amount
          )
          .map((inspiration) => {
            const jpgFiles = inspiration.files.filter((file) => /\.jpg$/i.test(file));
            const path = inspiration.name;
            const mainPhoto = jpgFiles.at(0);
            const subPhotos = jpgFiles.slice(1);
            return new Inspiration(path, mainPhoto, subPhotos);
          })
      );

      this.currentExpansion =
        this.array.length > 0 ? this.currentExpansion + 1 : baseCurrentExpansion;

      if (retrievedInspirations.length === 0) {
        document.querySelector(`.fading-layer .button-outline-black`).classList.add("disabled");
      }
      this.array = retrievedInspirations;

      if (amount !== null) {
        return retrievedInspirations;
      } else {
        return this;
      }
    } catch (error) {
      console.error("Error:", error);
      return this;
    }
  }
}
