export const checkInputsAreEmpty = (obj) => {
  let isEmpty = false;
  for (const [key, value] of Object.entries(obj)) {
    if (value === "" || null || undefined) {
      isEmpty = true;
      return isEmpty;
    }
  }
  return isEmpty;
};
