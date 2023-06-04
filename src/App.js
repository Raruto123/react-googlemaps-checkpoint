import SimpleMap from "./components/Map";
import "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-googlemaps-checkpoint/src/App.css"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="introduction">
        <p className="phraseIntro">
          Voici la carte =
        </p>
        <SimpleMap></SimpleMap>
      </div>
    </div>
  );
}

export default App;
