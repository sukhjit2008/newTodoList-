import React, { Component } from 'react';
class Todolist extends Component {

    render() { 
        const {todos} = this.props;
        
        const todoList = todos.length!==0?todos.map(
            (todo,index)=> <li key={todo.id} 
            className="list-group-item d-flex justify-content-between align-items-center"
            style={todo.status?{textDecoration:'line-through',backgroundColor:'Yellow',fontSize:'2rem'}:null}
            >
            <input type="checkbox" 
            className="mr-4"
            onChange={()=>this.props.doneTodo(todo.id)}
            checked={todo.status}
            />
             {todo.todo}
              <span onClick={()=>{this.props.deleteTodo(todo.id)}} className="badge badge-primary badge-pill">X</span>
            </li>
        ):(<div >Please enter a todo..</div>);
        return ( 
           <>
            <ul className="list-group"  >
            {todoList}
            </ul>
            <button className="btn btn-primary mt-4" onClick={this.props.allDone}>All Done</button>
           </>
        );
    }
}
 
export default Todolist;