import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';

class App extends React.Component {
  state = {
    imageList: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    console.log('data:', response.data.results);
    this.setState({ imageList: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList imageList={this.state.imageList} />
      </div>
    );
  }
}

export default App;
