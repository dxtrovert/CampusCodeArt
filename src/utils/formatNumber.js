export function formatNumber(value) {
  return new Intl.NumberFormat('en').format(value);
}
