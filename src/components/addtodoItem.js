import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodoItem } from "../redux/todoListReducer";
import { updateTodoItem } from "../redux/todoListReducer";

function AddTodoItem({item, setItem}) {
 // const [item, setItem] = useState("");
  const [isEditing,setIsEditting] = useState(false);
  const dispatch = useDispatch();

  // Date().now
  // Date.now() ; 


  const handleAddItem = () => {
    dispatch(addTodoItem({ id: Date.now(), todoItem: item }));
  };

  const handleUpdate = () => {
    dispatch(updateTodoItem({ id:currentId, todoItem: item }));
  };


  return (
    <div>
      {!isEditing && (
        <div>
          <input
            type="text"
            placeholder="Enter item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
      )}
    </div>
  );
}
export default AddTodoItem;
