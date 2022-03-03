import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import Nav from './Nav/Nav';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home/Home';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // react-router-dom 5.x.x
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // react-router-dom 6.x.x

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Todo List</h1>

        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}  {/*react-router-dom 5.x.x*/}

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/todo" element={<ListTodo/>}/>
          {/* <Route exact path="/about" element={}/> */}
        </Routes>
        {/*react-router-dom 6.x.x*/}
    </div>
    </Router>
  );
}

export default App;