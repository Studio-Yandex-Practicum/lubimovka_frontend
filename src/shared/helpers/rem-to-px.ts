export function remToPx(value: number) {
  return value * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
