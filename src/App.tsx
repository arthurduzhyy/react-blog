import { ThemeProvider } from './context/ThemeContext'
import BasicDataRouter from './route/BasicDataRouter'

function App() {
  return (
    <ThemeProvider>
      <BasicDataRouter />
    </ThemeProvider>
  )
}

export default App