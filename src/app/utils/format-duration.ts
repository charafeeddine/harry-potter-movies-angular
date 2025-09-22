export function FormatDuration(minutes: number | undefined): string {
  if (!minutes) {
    return ''
  }
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}min`;
}