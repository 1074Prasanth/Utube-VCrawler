import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import logo from './uvc.png';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term:''};
    };
render(){
    return (
    <div className = "search-bar">
       <p className = "logostyle">Utube VCrawler</p>
        <input
            value = {this.state.term}
            onChange ={event => this.onInputChange(event.target.value)}
        />
        <hr/>
    </div>
    );
 };
 onInputChange(term)
 {
     this.setState({term});
     this.props.onSearchTermChange(term);
 }
};

export default SearchBar;
