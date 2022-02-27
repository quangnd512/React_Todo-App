import React from "react";
import '../../styles/ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component
{
    state = {
        todoList: [
            {id: '1', title: 'Doing home'},
            {id: '2', title: 'School lean'},
            {id: '3', title: 'Fixbug'},
        ],
        editTodo: {}
    }

    addTodoList = (todo) => {
        let currentTodoList = this.state.todoList;
        currentTodoList.push(todo);

        this.setState({
            todoList: currentTodoList
        })

        toast.success("Wow so easy!");
    }

    // delete 
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.todoList;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            todoList: currentTodo
        })
        toast.success("Delete success");
    }

    //edit
    handleEditTodo = (todo) => {
        let {editTodo, todoList} = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let todoListCopy = [...todoList];

            let objIndex = todoListCopy.findIndex((item => item.id ===todo.id));

            todoListCopy[objIndex].title = editTodo.title;

            this.setState({
                todoList: todoListCopy,
                editTodo: {}
            })
            toast.success("Update todo success");

            return;
        }

        //edit
       this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCoppy = {...this.state.editTodo};
        editTodoCoppy.title = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        })
    }

    render(){
        let {todoList, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return(
            <div className="todo-list">
                <AddTodo
                    addTodoList = {this.addTodoList} 
                />
               <div className="list-todo">
                   {todoList && todoList.length > 0 &&
                        todoList.map((item, index)=>{
                            return(
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                    <span>{index+1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>{index+1} - <input 
                                                value={editTodo.title} 
                                                onChange={(event)=>this.handleOnChangeEditTodo(event)}
                                            /></span>
                                            :
                                            <span>{index+1} - {item.title}</span>
                                        }
                                    </>
                                    }
                                    <button
                                        onClick={()=>this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save':'Edit'
                                        }
                                    </button>
                                    <button 
                                        onClick={()=>this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                   }
                </div>
            </div>
        )
    }
}
export default ListTodo;