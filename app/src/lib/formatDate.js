export function formatDate(date) {
  return `${new Date(date).toLocaleDateString()} ${''} ${new Date(
    date
  ).toLocaleTimeString()}`;
}
