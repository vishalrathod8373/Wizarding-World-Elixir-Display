export const classNames = (
  ...classes: (string | undefined | null)[]
): string => {
  return classes.filter((val): val is string => !!val).join(" ");
};
