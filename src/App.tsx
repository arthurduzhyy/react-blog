import NotificationBox from './component/notification/NotificationBox'
import { ThemeProvider } from './feature/theme/context/ThemeContext'
import BasicDataRouter from './route/BasicDataRouter'

function App() {
  return <>
    <ThemeProvider>
      <BasicDataRouter />
    </ThemeProvider>
    <NotificationBox />
  </>
}

export default App