import logo from './logo.jpg';
import './App.css';

import FormTaeg from '../src/Form/Form';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" /> 
      {/* formulaire pour le calcul du taeg     */}
      <FormTaeg />
    </div>
  );
}

export default App;
