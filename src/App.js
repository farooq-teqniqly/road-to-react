import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

const data = [
  {
    id: 1,
    name: "Farooq"
  },
  {
    id: 2,
    name: "Morgana"
  },
  {
    id: 3,
    name: "Noor"
  },
  {
    id: 4,
    name: "Yasin"
  },
  {
    id: 5,
    name: "Lucia"
  },

]
function App() {
  const [showList, setShowList] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={(_) => setShowList(!showList)}>
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
        {showList ?
          <List dataSource={data} callback={(id) => console.log(id)}>
            <span>People I love</span>
          </List> : null
        }
      </header>
    </div>
  );
}

export default App;
