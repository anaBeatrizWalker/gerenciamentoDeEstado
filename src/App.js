import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Versão Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>

      <div className='linha'>
        <Card title='Card 2' green>
          xxxx
        </Card>

        <Card title='Card 3' blue>
          yyyy
        </Card>

        <Card title='Card 4' purple>
          zzzz
        </Card>
      </div>
    </div>
  );
}

export default App;
