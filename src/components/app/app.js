import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForms from '../employers-add-form/employers-add-form';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alina' , salary: '800' , increase: true, rise: false, id: 1},
                {name: 'Alin' , salary: '2000' , increase: false, rise: false, id: 2},
                {name: 'Joanna' , salary: '4000' , increase: false, rise: true, id: 3},
            ],
            term: '', 
            filter: 'all'
        }
        this.maxId = 4;
    }
    // переменная которая будет содержать массив с данными
    // id - уникальный идентификатор который будет говорить реакту что этот конкретный лемент не был изменен и 
    // реакт не будет его уничтожать и пересоздавать в случае если первые элементы в списке или корневой элемент был изменен
  
    deleteItem = (id) => {
        this.setState(({data}) => {
           

            // три метода копирования данных для внесения изменений (в текущем варианте для удаления из списка)
            // 1 slice
            // const index = data.findIndex(elem => elem.id === id);
            //  // сохраняем то, что до выбранного элемента
            //  const before = data.slice(0, index);
            //  // сохраняем то, что после выбранного элемента
            //  const after = data.slice(index +1);
            //  // соединяем до и после вместе
            //  const newArr = [...before, ...after];

            return{
                // 1
                // data:newArr

                // 2 filter
                data: data.filter(item => item.id !== id)
            }
        })
    }

         addItem = (name, salary) => {
            const newItem = {
                name, 
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }

        
// onToggleIncrease = (id) => {

    // the ways to re-create a new Data Array without removing the old one
    
    // way 1:  
    // this.setState(({data}) => { 
    //     const index = data.findIndex( elem => elem.id === id);

    //     const old = data[index];
    //     const newItem = {...old, increase: !old.increase};
    //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

    //     return {
    //         data: newArr
    //     }
    // })

    // way 2:
     
//      this.setState(({data}) => ({ 
//         data: data.map( item => {
//             if (item.id === id){
//                 return {...item, increase: !item.increase}
//             }
//             return item;
//         }) 
//     }))

// }

    onToggleProp = (id, prop) => {

        this.setState(({data}) => ({ 
            data: data.map( item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            }) 
        }))

    }
 // search
    searchEmp = (data, term) => { 
        if (term.length === 0) {
            return data;
        }
        return data.filter( item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        // отвечает за управление состоянием в дата
        this.setState({term});
    }

  // search filter
    
    filterEmp = (data, filter) => {
        switch (filter) {
            case 'rised':
                return data.filter(item => item.rise);
            case 'bigsalary':
                return data.filter(item => item.salary > 1000);
            default:
                return data
        } 
    }

    onFiltering = (filter) => {
        // отвечает за управление состоянием в дата
        this.setState({filter});
    }

        render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase ).length; 
        const visibleData = this.filterEmp((this.searchEmp(data, term)), filter);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFiltering={this.onFiltering}/>
                </div>
    
            <EmployersList 
            data={visibleData}
            onDelete = {this.deleteItem}
            onToggleProp = {this.onToggleProp} 
            />
            <EmployersAddForms
            addItem = {this.addItem}
            />
            </div>
        )
    }
}


// function WhoAmI({name, surname, link}) {
//     return(
//         <div>
//             <h1>My name is {name()},  surname - {surname.firstName} </h1>
//             <a href="{link}">My prfile</a>
//         </div>
//     )
// }
// function App() {
//     return (
//         <div className="App">
//              <WhoAmI 
//                 name={ () => { return 'ALina'}} 
//                 surname={{firstName : 'ALex'}} 
//                 link="facebook.com" /> 
//         </div>
//     )
// }

export default App;