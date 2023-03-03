
import { AuthProvider } from './movies/auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';




function App() {
  return (
    <AuthProvider>
      <AppRouter>
      </AppRouter>
    </AuthProvider>


  )
}

export default App
