import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchGet = (e) => {
        const term = e.target.value;
        // это устанавливает новое веьлью локально в строку 8
        this.setState({term});
         // это устанавливает новое веьлью глобально в апп
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
            type="text"
            className="form-control search-input"
            placeholder="find a slave" 
            value={this.state.term}
            onChange={this.onUpdateSearchGet} />
        )
    }
   
}

export default SearchPanel;