export function remToPx(value: number) {
  return value * document.documentElement.clientWidth / 414 * 16;
}
