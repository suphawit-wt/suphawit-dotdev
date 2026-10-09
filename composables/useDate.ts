export const useDate = () => {
  const formatDate = (date: string | Date) =>
    new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(date))

  return { formatDate }
}