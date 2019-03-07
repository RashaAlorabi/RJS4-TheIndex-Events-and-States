import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    currentAuthor: null,
    authorsArray: authors,
    filteredAuthorsArray: authors
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  unSelectAuthor = () => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {
    let filteredAuthorsArray = authors.filter(author => {
      let name = (author.first_name + " " + author.last_name).toLowerCase();
      if (name.includes(query)) {
        return author;
      }
    });
    this.setState({ filteredAuthorsArray: filteredAuthorsArray });
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unSelectAuthor={this.unSelectAuthor} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor ? (
              <AuthorDetail author={this.state.currentAuthor} />
            ) : (
              <AuthorsList
                authors={this.state.filteredAuthorsArray}
                selectAuthor={this.selectAuthor}
                filterAuthors={this.filterAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
