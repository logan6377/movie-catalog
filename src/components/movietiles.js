import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

const MovieTiles = ({ movies }) => {
  return (
    <Container className="movie-tiles">
      <Row>
        {movies.map(movie => (
          <Col className="movie-tile" key={movie.imdbID}>
            {movie.Poster == "N/A" ? (
              <img src="//via.placeholder.com/300x444" alt={movie.Title} />
            ) : (
              <img src={movie.Poster} alt={movie.Title} />
            )}

            <div className="movie-content">
              <h3>Name: {movie.Title}</h3>
              <h3>Year: {movie.Year}</h3>
              <h3>imdbID: {movie.imdbID}</h3>
              <h3>Type: {movie.Type}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieTiles;
