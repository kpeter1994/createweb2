export const useDateFormatter = (isoDateString: string | Date): string => {
  return new Date(isoDateString).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
