import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'
import _ from 'lodash'
const API_KEY = 'AIzaSyD5VMGC7u8K7skXt9CbNPxBiIO8_cSwQzk';
class App extends Component
{
    constructor(props)
    {
        super();
        this.state={ videos:[],
        selectedVideo : null };
       
       this.videoSearch('surf Boards');
    };
    
    videoSearch(term)
    {
        YTSearch({key:API_KEY,term:term},(videos) =>
        {
       this.setState({videos:videos,selectedVideo:videos[0]},
); });
        
    }
    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
    return (<div> 
        <SearchBar onSearchTermChange ={videoSearch}/>
      
        <VideoDetail 
        video={this.state.selectedVideo} />
        <VideoList 
         onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
    </div>)};
};

ReactDOM.render(<App />,document.querySelector('.container'));