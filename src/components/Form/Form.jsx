import { useState } from "react";

export const Form = ({todo, setTodo}) => {
    const [text, setText] = useState('');
    const addTodo = () => {
        
        if(text !== '' && text.trim(''))setTodo([
            {
                id: Math.random(),
                text: text,
                complete: false,
                isEdit: false
            }, ...todo
        ])
        setText('');        
    }
    return (
        <div className="todoCont">
            <h2>Add new Todo</h2>
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
            <button onClick={addTodo} className="button">Added</button>
        </div>
    );
}

