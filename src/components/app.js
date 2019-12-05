import React, { Component } from 'react';
import TodoList from './Todolist';
import AddTodos from './AddTodos';
class App extends Component {
    state = {  
        todo:'',
        todos:[{id:1, todo:'water the plants',status:false}],
        isDone:true
    }
    onInputChange=(e)=>{
       this.setState({todo:e.target.value})
     
    }
    onFromSubmit=(e)=>{
        e.preventDefault()
            if(this.state.todo!==''){
            const id = (Math.random()*10);
            const todos =[...this.state.todos];
            todos.push({id,todo:this.state.todo,status:false});
            this.setState({todos})
            this.setState({todo:''})
            }
      
    }
    
    deleteTodo=(id)=>{
      const todos=  this.state.todos.filter((todo)=>todo.id!==id)
      this.setState({todos})
    }
    doneTodo=(id)=>{
        
        const todoIndex= this.state.todos.findIndex((todo)=>todo.id===id
        )
        const todos=[...this.state.todos]
        const newTodo= {...todos[todoIndex]};
        this.setState({isDone:!this.state.isDone})
        newTodo.status=
        this.state.isDone;
        todos[todoIndex]= newTodo;
        this.setState({todos})      
    }
    allDone=(e)=>{
        this.doneTodo()
       const todos= this.state.todos.map((todo)=>{
           return {...todo,status:true}
       })
       this.setState({todos})
       
    }
    render() { 
        return (
            <div className="container">
                <h1>This is a todo application</h1>
                <AddTodos onInputChange={this.onInputChange}
                 onFromSubmit={this.onFromSubmit} 
                   todo={this.state.todo}
                />
                <TodoList todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    doneTodo={this.doneTodo}
                    allDone={this.allDone}
                />

            </div>
            
            );
    }
}
 
export default App;