import './App.scss';
import Card from './components/card/Card';

function App() {
  const task = {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy8xhpUm5aRgUvmFAb4uRYBtdiYsAI136NQ&usqp=CAU"}
  return (
    <div className="App">
      <header className="App-header">
        <Card task = { task }></Card>
      </header>
    </div>
  );
}

export default App;
