import { Route } from 'react-router-dom';
import '../Styles/App.css';
import Nav from './Nav';

function App() {
  return (
    <>
      <header className="App-header">Nina's PlayHouse</header>
      <Nav />
      <Route exact path={['/', '/ninas-playhouse']} >
        <h1>home</h1>
      </Route>
      <Route path="/about">
        <h1>about</h1>
      </Route>
      <Route path="/browse">
        <h1>browse</h1>
      </Route>
      <Route path="/login">
        <h1>login</h1>
      </Route>
      <main className="App">

      </main>
    </>
  );
}

export default App;
