import { Route } from 'react-router-dom';
import '../Styles/App.css' 
import Login from './Login';
import Nav from './Nav';

function App() {
  return (
    <>
      <header className="App-header">Nina's PlayHouse</header>
      <Nav />
      <Route exact path={['/', '/ninas-playhouse']} >
        <main className="home__main">
          <h1 className='home__welcome'>Welcome</h1>
        </main>
      </Route>
      <Route path="/about">
        <h1>about</h1>
      </Route>
      <Route path="/browse">
        <h1>browse</h1>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
