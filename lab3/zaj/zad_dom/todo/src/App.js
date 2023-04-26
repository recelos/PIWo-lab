import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './Pages/Main';
import Search from './Pages/Search';

function App() {
  const listOfTodosDefault = [
    "Zrobic obiad",
    "Ocenic prace studentow",
    "Wyjsc z psem"
  ];

  const [todoList, setTodoList] = useState(listOfTodosDefault);
  const mainJsx = <Main toDoList={todoList} setTodoList={setTodoList} />;


  return (
    <div className="App">
      <header>
        This is a header
      </header>
      <BrowserRouter>
        <main>
          <nav>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/search">Search</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={ mainJsx }/>
            <Route path="/search" element={ <Search toDoList={todoList}/> }/>            
          </Routes>
        </main>
      </BrowserRouter>
      <footer>this is a footer</footer>
    </div>
  );
}

export default App;