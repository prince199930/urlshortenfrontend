import logo from './logo.svg';
import './App.css';
import ViewUrl from './components/ViewUrl';
import AddUrl from './components/AddUrl';
import UrlState from './context/UrlState';

function App() {
  return (
    <div className="App">
      <UrlState>
      <AddUrl />
      <ViewUrl />
      </UrlState>
    </div>
  );
}

export default App;
