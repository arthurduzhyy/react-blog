// src/lib/eventbus.ts
export type Callback = (payload?: any) => void
export type Event = string | symbol

const _events: Record<Event, Array<Callback>> = {}

export const EventBus = {
  on(event: Event, callback: Callback) {
    if (_events[event])
      _events[event].push(callback)
    else
      _events[event] = [callback]
    return () => this.off(event, callback)
  },
  off(event: Event, callback: Callback): void {
    if (_events[event])
      _events[event] = _events[event].filter(h => h !== callback)
  },
  emit(event: Event, payload?: any): void {
    _events[event]?.forEach(callback => callback(payload))
  }
}

export const EVENT_POSTS_UPDATE = Symbol('update.posts')
export const EVENT_CHAT_CONNECTED = Symbol('chat.connected')