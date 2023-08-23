class AnimationEnum {
  static fadeInUp = "animate__animated animate__fadeInUp";
  static flipInX = "animate__animated animate__flipInX";
  static jackInTheBox = "animate__animated animate__jackInTheBox";
  static zoomIn = "animate__animated animate__zoomIn";
}

class Animation {
  /**
   * Create a new Animation instance.
   * @param {string} componentHook - The CSS selector for the target element where the component will be mounted.
   * @param {string} animationEnum - The animation type from the AnimationEnum class to apply.
   */
  constructor(componentHook, animationEnum) {
    this.componentHook = componentHook;
    this.animationEnum = animationEnum;
  }

  /**
   * Apply the animation class to the element.
   */
  applyAnimation() {
    const element = document.querySelector(this.componentHook);
    element.classList.add(...this.animationEnum.split(" "));

    return this;
  }

  observeIntersection() {
    const element = document.querySelector(this.componentHook);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.applyAnimation(); // Apply animation when element is in view
            }, 500);

            observer.unobserve(element); // Stop observing once animation is applied
          }
        });
      },
      {
        threshold: 1,
      }
    );

    observer.observe(element);
  }
}

export const mountAnimations = () => {
  new Animation('[animation-index="1"]', AnimationEnum.zoomIn).observeIntersection();
  new Animation('[animation-index="2"]', AnimationEnum.fadeInUp).observeIntersection();
  new Animation('[animation-index="3"]', AnimationEnum.zoomIn).observeIntersection();
  new Animation('[animation-index="4"]', AnimationEnum.fadeInUp).observeIntersection();
  new Animation('[animation-index="5"]', AnimationEnum.zoomIn).observeIntersection();
  new Animation('[animation-index="6"]', AnimationEnum.fadeInUp).observeIntersection();
  new Animation('[animation-index="7"]', AnimationEnum.jackInTheBox).observeIntersection();
  new Animation('[animation-index="8"]', AnimationEnum.jackInTheBox).observeIntersection();
  new Animation('[animation-index="9"]', AnimationEnum.jackInTheBox).observeIntersection();
  new Animation('[animation-index="10"]', AnimationEnum.zoomIn).observeIntersection();
  new Animation('[animation-index="11"]', AnimationEnum.flipInX).observeIntersection();
  new Animation('[animation-index="12"]', AnimationEnum.flipInX).observeIntersection();
  new Animation('[animation-index="13"]', AnimationEnum.flipInX).observeIntersection();
  new Animation('[animation-index="14"]', AnimationEnum.flipInX).observeIntersection();
  new Animation('[animation-index="15"]', AnimationEnum.flipInX).observeIntersection();
  new Animation('[animation-index="16"]', AnimationEnum.flipInX).observeIntersection();
};
