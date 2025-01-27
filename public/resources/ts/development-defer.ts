import { allItems } from "./stats-defer";

// Announce dev mode in console
console.log(
  "%cSKYCRYPT ⌨ DEV MODE",
  [
    "background: #0bca51",
    "color: #fff",
    "padding: 8px 16px",
    'font-family: "Fira Code", "Montserrat", sans-serif',
    "font-size: 16px",
    "font-weight: 700",
    "line-height: 1",
  ].join(";")
);

// Alt+Click on any .rich-item to console.log the item object
document.addEventListener("click", (e) => {
  const element = e.target as HTMLElement;

  if (!e.altKey || !element.classList.contains("rich-item")) {
    return;
  }

  let item: DisplayItem | Item | Pet | undefined = undefined;

  if (element.hasAttribute("data-item-id")) {
    const itemId = element.getAttribute("data-item-id") as string;
    item = allItems.get(itemId) as Item;
  } else if (element.hasAttribute("data-pet-index")) {
    item = calculated.pets[parseInt(element.getAttribute("data-pet-index") as string)];
  } else if (element.hasAttribute("data-missing-pet-index")) {
    item = calculated.missingPets[parseInt(element.getAttribute("data-missing-pet-index") as string)];
  } else if (element.hasAttribute("data-missing-talisman-index")) {
    item = calculated.missingTalismans.missing[parseInt(element.getAttribute("data-missing-talisman-index") as string)];
  } else if (element.hasAttribute("data-upgrade-talisman-index")) {
    item =
      calculated.missingTalismans.upgrades[parseInt(element.getAttribute("data-upgrade-talisman-index") as string)];
  }

  console.log(item);
});
