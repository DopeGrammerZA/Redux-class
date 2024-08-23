import { useSelector, useDispatch } from "react-redux";
import {deleteTodoItem } from  '../redux/todoListReducer';
import { updateTodoItem } from  '../redux/todoListReducer'

function TodoList({item, setItem}) {
    const todoList = useSelector(state => state.todoList);

    const dispatch = useDispatch() ;


    return (
        <ul>
            {todoList.map((item) => (
                <div>
            
                <li key={item.id}>{item.todoItem}</li>
                <button onClick={()=> dispatch(deleteTodoItem(item.id))}>delete</button>
                <button onClick={()=> dispatch(updateTodoItem(item.id))}>Update</button>
                </div>
            ))}
        </ul>
    );
}

export default TodoList;
