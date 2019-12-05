import React, { Component } from 'react';
class AddTodos extends Component {
   
    render() { 
        return (
            <form onSubmit={this.props.onFromSubmit} className="form-group">
                <input  type="text" onChange={this.props.onInputChange}
                value={this.props.todo} className="form-control"/>
                <input type="submit"  value="ADD" />
            </form>
          );
    }
}
 
export default AddTodos;