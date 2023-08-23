"use strict";
/**
 * Represents a dynamic component that can be fetched and mounted.
 */
class Component {
  /**
   * Create a new Component instance.
   * @param {string} componentFolder - The folder containing the component HTML file.
   * @param {string} componentName - The name of the component HTML file.
   * @param {string} componentHook - The CSS selector for the target element where the component will be mounted.
   */
  constructor(componentFolder, componentName, componentHook) {
    this.componentFolder = componentFolder;
    this.componentName = componentName;
    this.componentHook = componentHook;
    this.componentTemplate = "";
  }

  /**
   * Fetches the component's HTML template.
   * @returns {Promise<Component>} The Component instance with the fetched template.
   */
  async fetchComponentTemplate() {
    const response = await fetch(
      `src/components/${this.componentFolder}/${this.componentName}.html`
    );
    this.componentTemplate = await response.text();
    return this;
  }

  /**
   * Mounts the component on the specified target element.
   */
  mount() {
    document.querySelector(`${this.componentHook}`).innerHTML = this.componentTemplate;
  }
}

/**
 * Builds and mounts a component.
 * @param {string} componentFolder - The folder containing the component HTML file.
 * @param {string} componentName - The name of the component HTML file.
 * @param {string} componentHook - The CSS selector for the target element where the component will be mounted.
 */
const ComponentBuilder = async (componentFolder, componentName, componentHook) => {
  const component = new Component(componentFolder, componentName, componentHook);
  await component.fetchComponentTemplate();
  component.mount();
};

export const mountComponents = async () => {
  // mount nav
  await ComponentBuilder("nav", "navComp", "nav");

  //mount intro section
  await ComponentBuilder("intro", "introCarouselComp", "#intro-carousel");
  await ComponentBuilder("intro", "introContentComp", "#intro-content");

  // mount offer section
  await ComponentBuilder("offer", "offerContentComp", "#offer-content");
  await ComponentBuilder("offer", "offerCardsComp", "#offer-cards");

  // mount about section
  await ComponentBuilder("about", "aboutCarouselComp", "#about-carousel");
  await ComponentBuilder("about", "aboutContentComp", "#about-content");

  // mount realizations section
  await ComponentBuilder("realizations", "realizationsFadeComp", "#fade");
  await ComponentBuilder("realizations", "realizationsGalleryComp", "#gallery");

  // mount contact section
  await ComponentBuilder("contact", "contactComp", "#contact");

  // mount footer
  await ComponentBuilder("footer", "footerComp", "footer");
};
