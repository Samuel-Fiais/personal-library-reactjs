import { LateralMenu } from "./components/LateralMenu/LateralMenu"
import { AuthorProvider } from "./contexts/AuthorContext"
import { BookProvider } from "./contexts/BookContext"
import { AppThemeProvider } from "./contexts/ThemeContext"
import { AppRoutes } from "./routes"

function App() {

  return (
    <>
      <AppThemeProvider>
        <AuthorProvider>
          <BookProvider>
            <LateralMenu>
              <AppRoutes/>
            </LateralMenu>
          </BookProvider>
        </AuthorProvider>
      </AppThemeProvider>
    </>
  )
}

export default App
