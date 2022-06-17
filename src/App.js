import './App.css';
import Box from './components/Box';
import Cabecera from './components/Cabecera';
import Pie from './components/Pie';

function App() {
  return (
    <div className="card">
      <Cabecera/>
      <Box/>
      <Pie/>
    </div>
  );
}

export default App;
