//shorten name if too long
export const nameShortener = (name?: string | null | undefined) => {
  if (!name) return "";
  if (name.length === 0) return "";
  if (name.length > 15) {
    //split name by space and get part of name
    const splittedName = name.split(" ")[0];
    //give the first part of name
    if (splittedName.length > 15) return splittedName.slice(0, 15) + `...`;
    return splittedName;
  }
  return name;
};
