import React, { Component, Fragment } from "react";
import { Row, Col, Card } from "reactstrap";
import _ from "lodash";
import MovieTiles from "./movietiles";
import Pagenation from "../helpers/pagenation";

class MovieList extends Component {
  state = {
    movies: [],
    searchValue: "",
    loader: true,
    pageSize: 10,
    currentPage: 1
  };

  componentDidMount() {
    console.log(this.props.moviesData);
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
    this.props.pageChange(page);
  };

  render() {
    const { movies, totalResults } = this.props.moviesData;
    const { loader } = this.props.moviesData;
    const { searchValue: query } = this.props.moviesData;
    const { currentPage, pageSize } = this.state;

    if (loader) {
      return (
        <Col>
          <h3 className="text-center">Loading.......</h3>
        </Col>
      );
    } else if (movies) {
      if (movies.length > 0)
        return (
          <Fragment>
            <h2>
              You searched for: {query}, {totalResults} results found
            </h2>
            <Col xs="12">
              <MovieTiles movies={movies} />
            </Col>

            <Col>
              <Pagenation
                itemCount={totalResults}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </Col>
          </Fragment>
        );
    }
    return (
      <Fragment>
        <Col>
          <h2 className="text-center">Search by movie name...</h2>
        </Col>
      </Fragment>
    );
  }
}

export default MovieList;
