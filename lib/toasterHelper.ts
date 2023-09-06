import { type Theme } from '@/context/ThemeContext'
import { toast } from 'react-hot-toast'

export function ToasterHelper(msg: string, type: string, theme: Theme) {
  let style

  if (theme === 'dark') {
    style = {
      border: '1px solid #F8FAFC22',
      background: '#1E293B',
      color: '#F1F5F9',
    }
  }

  switch (type) {
    case 'success':
      return toast.success(msg, { style })
    case 'error':
      return toast.error(msg, { style })
    default:
      return toast.error('you did not give me anything')
  }
}
