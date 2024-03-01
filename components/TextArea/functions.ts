export const toCamelCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((s, index) =>
      index === 0
        ? s[0].toLowerCase() + s.slice(1)
        : s[0].toUpperCase() + s.slice(1)
    )
    .join("");
};

export const toPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");
};

export const toSnakeCase = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "_");
};

export const toKebabCase = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "-");
};

export const toTrainCase = (str: string) => {
  return toTitleCase(str).replaceAll(" ", "-");
};

export const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toTitleCase = (str: string) => {
  return str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};
