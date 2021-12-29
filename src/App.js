import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Versão Simples)</h1>
      <div className='linha'>
        <Card title='Card 1' red>
          wwww
        </Card>
      </div>

      <div className='linha'>
        <Card title='Card 2' green>
          xxxx
        </Card>
      </div> 

      <div className='linha'>
        <Card title='Card 3' blue>
          yyyy
        </Card>
      </div>

      <div className='linha'>
        <Card title='Card 4' purple>
          zzzz
        </Card>
      </div>
    </div>
  );
}

export default App;
