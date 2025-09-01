import Header from './components/header';
import Main from './components/main';
import { useLanguage } from './components/useLanguage';
import ThemeToggle from './components/ThemeToggle';
import SimpleCursor from './components/SimpleCursor';


function App() {
  const { lang } = useLanguage();
  return (
    <div key={`app-${lang}`} className="App">
    <Header />
    <Main />
    <ThemeToggle />
    <SimpleCursor />
    </div>
    
  );
}

export default App;
