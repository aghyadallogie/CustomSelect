import './App.css';
import { Select } from './components/Select/Select';

function App() {
  const items = [
    { id: 1, text: 'first option' },
    { id: 2, text: 'second option' },
    { id: 3, text: 'third option' },
    { id: 4, text: 'forth option' },
    { id: 5, text: 'fifth option' },
]
  return (
    <div className="App">
      <Select items={items} />
    </div>
  );
}

export default App;
