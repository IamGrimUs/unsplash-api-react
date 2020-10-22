import React from 'react';

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };
  onInputChange = e => this.setState({ inputValue: e.target.value });

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input type="text" id="search" className="" value={this.state.inputValue} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
