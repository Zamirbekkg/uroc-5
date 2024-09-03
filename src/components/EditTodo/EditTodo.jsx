import { useState } from "react";

export const EditTodo = ({text, id, changeText}) => {
    const [edit, setEdit] = useState(text);
    return (
        <div>
            <input onChange={(e) => {setEdit(e.target.value)}} value={edit} type="text" />
            <button onClick={() => {changeText(edit, id)}}>Edit</button>
        </div>
    );
}
