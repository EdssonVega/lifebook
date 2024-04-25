import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar/navbar';
import MainWindowComponent from './components/mainWindow/MainWindow';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MainWindowComponent />
    </div>
  );
}

export default App;
