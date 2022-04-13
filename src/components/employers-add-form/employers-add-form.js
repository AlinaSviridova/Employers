import { Component } from 'react';
import './employees-add-form.css';

class EmployersAddForms extends Component{
constructor(props){
    super(props);
    this.state = {
        name: '',
        salary:''
    }
}

onValueChange = (e) => {
    
    this.setState({ 
        // таким способом мы записываем свойство в обьект. 
        // У нас есть нейм и в конструкторе и в самом инпуте
        [e.target.name] : e.target.value
    })
}
onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length > 3 && this.state.salary !==''){
        this.props.addItem(this.state.name, this.state.salary); 
    }
//     
    this.setState({
        name: '',
        salary:''
    })
}
    render(){
        const {name, salary} = this.state;
        return(
                <div className="app-add-form">
                    <h3>Add new employee</h3>
                    <form
                        onSubmit={this.onSubmit}
                        className="add-form d-flex"
                        >
                        <input type="text"
                            className="form-control new-post-label"
                            placeholder="Name" 
                            name="name"
                            value={name}
                            onChange={this.onValueChange}/>
                        <input type="number"
                            className="form-control new-post-label"
                            placeholder="Salary  $?"
                            name="salary" 
                            value={salary}
                            onChange={this.onValueChange}/>
                        <button type="submit"
                            className="btn btn-outline-light">Add</button>
                    </form>
                </div>
        )
       }
}

export default EmployersAddForms;