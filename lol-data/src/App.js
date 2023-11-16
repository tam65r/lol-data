import './App.css';
import HomePage from "./pages/HomePage";
import AppProvider from './context/AppProvider';

function App() {
  return (
      <AppProvider>
              <HomePage />
      </AppProvider>
  );
}

export default App;
