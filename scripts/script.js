class Dropdown {
  constructor(obj) {
    this.dropdown = document.querySelector(obj.dropdown);
    this.toggle = document.querySelector(obj.toggle);

    this.toggle.addEventListener("click", () => this.makeActive());
  }

  makeActive() {
    this.dropdown.classList.toggle("active");
  }
}

const dropdownHeader = new Dropdown({
  dropdown: ".header__bars-span-dropdown",
  toggle: ".header__bars",
});

class Fade {
  constructor(obj) {
    this.section = document.querySelector(obj.section);
    this.cards = document.querySelectorAll(obj.cards);

    window.addEventListener("scroll", () => this.move());
  }

  move() {
    if (
      window.scrollY >
      this.section.offsetTop - this.section.offsetHeight * 2
    ) {
      this.cards.forEach((card) => {
        const speed = card.hasAttribute("data-speed")
          ? card.getAttribute("data-speed")
          : 400;

        card.classList.add("active");

        card.style.transition = `${speed / 1000}s`;
      });
    }
  }
}

const fadeService = new Fade({
  section: ".service-cards",
  cards: ".service-cards-card",
});

const fadeTeam = new Fade({
  section: ".team__cards",
  cards: ".team__cards-card",
});
