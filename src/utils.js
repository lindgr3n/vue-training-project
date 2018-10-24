export function browserSupports(inputs) {
  if (!window) return false;
  if (!inputs) return false;

  const parts = inputs.split(".");
  // console.log("Parts: ", inputs);

  const isSupported = parts.reduce((toTest, currectPart, index, totalPaths) => {
    // console.log("Test: " + currectPart + " " + toTest[currectPart]);

    if (supported(toTest[currectPart])) {
      if (index === totalPaths.length - 1) {
        return true;
      } else {
        return toTest[currectPart];
      }
    } else return false;
  }, window);

  return isSupported;
}

function supported(input) {
  return typeof input === "function" || typeof input === "object";
}
