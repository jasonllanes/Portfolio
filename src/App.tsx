import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';

/**
 * App
 * Root component. Provides:
 *  - ThemeProvider  → dark/light mode context
 *  - BrowserRouter  → client-side routing
 *  - AppRoutes      → route definitions
 */
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
