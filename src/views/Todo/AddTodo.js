import React from "react";
// import '../../styles/ListTodo.scss'
import { toast } from 'react-toastify';


class AddTodo extends React.Component
{
    state = {
        title: ''
    }

    // change title 
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    // click Add 
    handleOnClickTodo = () => {
        if (!this.state.title) { //title is null
            toast.error("Missing title");
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*10000),
            title: this.state.title
        }

        this.props.addTodoList(todo);
        this.setState({
            title: ''
        })
    }

    render(){
        let {title} = this.state;
        return(
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event)=> this.handleOnChangeTitle(event)}
                />
                <button type="button"
                    onClick={()=> this.handleOnClickTodo()}
                >Add
                </button>
            </div>
        )
    }
}
export default AddTodo;