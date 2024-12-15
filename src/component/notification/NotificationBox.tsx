import { useEffect, useState } from 'react'
import { EVENT_NOTIFICATIONS_UPDATE, EventBus } from '../../lib/eventbus'
import { Notification } from '../../lib/notifications'
import NotificationItem from './NotificationItem'

const NotificationBox = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    EventBus.on(EVENT_NOTIFICATIONS_UPDATE, (data: Notification[]) => {
      setNotifications(data)
    })
  }, [])

  return <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
    {notifications.map(n => <NotificationItem key={n.id} notify={n} />)}
  </div>
}

export default NotificationBox