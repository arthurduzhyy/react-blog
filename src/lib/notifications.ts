import { EVENT_NOTIFICATIONS_UPDATE, EventBus } from './eventbus'

let notifications: Notification[] = []

let idCounter = 0
const nextId = (): string => {
  idCounter++
  return idCounter.toString()
}

export type NotificationType = 'success' | 'error' | 'info'

interface NotificationOptions {
  ttl?: number
  type?: NotificationType
}

const defaultOptions: NotificationOptions = {
  ttl: 5000,
  type: 'info'
}

export interface Notification extends NotificationOptions {
  id: string
  message: string
}

const Notifications = {
  add(message: string, options: NotificationOptions = {}): Notification {
    const n = {
      id: nextId(),
      message,
      ...defaultOptions,
      ...options
    }
    notifications.push(n)
    EventBus.emit(EVENT_NOTIFICATIONS_UPDATE, notifications)
    return n
  },
  success(message: string, options: NotificationOptions = {}): Notification {
    return this.add(message, {
      type: 'success',
      ...options
    })
  },
  error(message: string, options: NotificationOptions = {}): Notification {
    return this.add(message, {
      type: 'error',
      ...options
    })
  },
  info(message: string, options: NotificationOptions = {}): Notification {
    return this.add(message, {
      type: 'info',
      ...options
    })
  },
  remove(n: Notification) {
    notifications = notifications.filter(x => x.id !== n.id)
    EventBus.emit(EVENT_NOTIFICATIONS_UPDATE, notifications)
  }
}

export default Notifications