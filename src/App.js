import getGame from "./components/getGame";
import buildResult from './components/buildResult';

function doSearch() {
  const testGame = getGame().then(value => buildResult(value));
  console.log(testGame);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <p>Click the search link above. Make a choice for at least team 1 and the associated season.</p> 
        <p>If a single team is selected, than all of that teams regular season games will be returned.</p> 
        <p>If both teams are selected, than only games between those two teams will be returned.</p>
        <p>Get the score, date, and arena for the games returned.</p>
      </div> 
      <button onClick={doSearch}>Search</button>
      
    </div>
  );
}

export default App;
