import logo from './logo.svg';
import './App.css';
import AddtodoItem  from './components/addtodoItem'
import TodoList from './components/todolist'
import { useState } from 'react';
function App() {

  const [item, setItem] = useState("");
  const [todo, setTodo] =  useState ([]) ;

  return (
    <div className="App">
      <AddtodoItem  item={item} setItem={setItem}/>
      <TodoList  todo={todo} setTodo={setTodo} item={item} setItem={setItem}/>
    
    </div>
  );
}

export default App;
