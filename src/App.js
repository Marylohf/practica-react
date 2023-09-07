import './App.css';
import { FormComponent } from './components/FormComponent';
import { PrimerComponente } from './components/PrimerComponente';

function App() {

  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">


      <PrimerComponente year={yearActual} />
      <FormComponent />
      </header>
    </div>
  );
}

export default App;
