import './App.css';
import Counter from './components/Counter'
import Grid from './components/Grid'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Counter/>
      <Grid/>
    </div>
  );
}


export default App;
