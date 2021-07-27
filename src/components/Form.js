import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const Form = ({inputText, setInputText, inputTime, setInputTime, todos, setTodos, time, currentTime, task, id}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };    

    
    const inputTimeHandler = (e) => {
            setInputTime(e.target.value);
            time=e.target.value;  
    };
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, Time: inputTime, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
        setInputTime("");
    };

    function getDateTime() {
        var now = new Date();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds();
        if(hour.toString().length === 1) {
            hour = '0'+hour;
       }
       if(minute.toString().length === 1) {
            minute = '0'+minute;
       }
       if(second.toString().length === 1) {
            second = '0'+second;
       }  
       var dateTime = hour+':'+minute+':'+second; 
         return dateTime;
         
    }
setInterval(() => {
    currentTime = getDateTime();
    if(currentTime === time)
        {
            setTodos(todos.filter((el) => el.id !== task.id));
            toast.success('Task has been successfully completed.')
        }
}, 1000);
  
    return (
        <form>
        <div data-testid="task-input" className="next"><input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Task Name" required/></div>
        <div data-testid="time-input" className="next"><input value={inputTime} onChange={inputTimeHandler} id="appt-time" type="time" name="appt-time" step="2" className="todo-input" />
        </div>
        <div className="next"><button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button></div>
    </form>

    
    )
}

export default Form
