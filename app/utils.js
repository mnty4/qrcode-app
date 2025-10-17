export function truncate(text) {
  if (!text) return '';
  return text.length <= 20 ? text : text.slice(0, 20) + '...';
}
