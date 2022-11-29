import './App.css';

import FormTaeg from '../src/Form/Form';

function App() {
  return (
    <div className="App">
      <h1 className='App-h1'>Calculez votre TAEG (ex TEG)</h1>        
      {/* formulaire pour le calcul du taeg     */}
      <FormTaeg />
    </div>
  );
}

export default App;
