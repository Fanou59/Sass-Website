const dropdown1 = document.querySelector("#dropdown1");
const dropdown2 = document.querySelector("#dropdown2");
const dropdown3 = document.querySelector("#dropdown3");

const drop1 = document.querySelector("#dropdown-content-1");
const drop2 = document.querySelector("#dropdown-content-2");
const drop3 = document.querySelector("#dropdown-content-3");

setupDropdown(dropdown1, drop1);
setupDropdown(dropdown2, drop2);
setupDropdown(dropdown3, drop3);

function setupDropdown(dropdown, drop) {
  let isDropdownHovered = false;
  dropdown.addEventListener("mouseover", (e) => {
    e.preventDefault();
    drop.classList.add("show");
  });

  dropdown.addEventListener("mouseout", (e) => {
    e.preventDefault();

    if (!isDropdownHovered) {
      drop.classList.remove("show");
    }
  });
  drop.addEventListener("mouseenter", () => {
    isDropdownHovered = true;
  });

  drop.addEventListener("mouseleave", () => {
    isDropdownHovered = false;
    drop.classList.remove("show");
  });
}
