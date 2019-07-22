import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/header";
import MovieList from "./components/movielist";

class App extends Component {
  state = {
    movies: "",
    page: ""
  };
  handleData = data => {
    this.setState({ movies: data });
    console.log(this.state.movies);
  };
  handleChange = data => {
    this.setState({ page: data });
  };

  render() {
    return (
      <Container>
        <Row className="header-container">
          <Header movies={this.handleData} currentPage={this.state.page} />
        </Row>
        <Row className="movielist-container">
          <MovieList
            moviesData={this.state.movies}
            pageChange={this.handleChange}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
