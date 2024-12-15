import { Alert, Typography } from '@material-tailwind/react'
import { FC, useEffect, useState } from 'react'
import Notifications, { Notification, NotificationType } from '../../lib/notifications'

interface NotificationItemProps {
  notify: Notification
}

const colors: Record<NotificationType, 'green' | 'red' | 'blue'> = {
  success: 'green',
  error: 'red',
  info: 'blue'
}

const NotificationItem: FC<NotificationItemProps> = ({ notify }) => {
  const [open, setOpen] = useState(true)

  const onClose = () => {
    if (!open)
      return

    setOpen(false)

    setTimeout(() => {
      Notifications.remove(notify)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, notify.ttl)
  }, [])

  const color = colors[notify.type!]

  return <Alert
    open={open}
    onClose={onClose}
    color={color}
    variant="gradient"
  >
    <Typography color="white" variant="small" className="font-bold">
      {notify.message}
    </Typography>
  </Alert>
}

export default NotificationItem