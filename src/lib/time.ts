export const formatRelativeTime = (dateString: string): string => {
  const inputDate = new Date(Date.parse(dateString))
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000)

  const timeUnits = [
    { unit: 'year', duration: 31536000 },
    { unit: 'month', duration: 2592000 },
    { unit: 'day', duration: 86400 },
    { unit: 'hour', duration: 3600 },
    { unit: 'minute', duration: 60 },
    { unit: 'second', duration: 1 }
  ]

  for (const { unit, duration } of timeUnits) {
    const diffInUnits = Math.floor(diffInSeconds / duration)
    if (diffInUnits >= 1) {
      return `${diffInUnits} ${unit}${diffInUnits !== 1 ? 's' : ''} ago`
    }
  }

  return 'just now'
}