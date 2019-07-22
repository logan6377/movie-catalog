import React, { Component, Fragment } from "react";
import { debounce } from "throttle-debounce";
import { movieService } from "../services";
import { Col } from "reactstrap";
import Input from "../helpers/input";

class Header extends Component {
  constructor(props) {
    super(props);
    this.apiRequest = debounce(500, this.apiRequest); //Debounce is a method of rate-limiting the number of inbound requests based on a defined number of milliseconds. we do not need to query on every detected change.
  }
  state = {
    data: {},
    loggedUser: "Logan",
    onetime: false
  };

  handleChange = ({ currentTarget: input }) => {
    this.props.movies({ loader: true });
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    this.apiRequest(input.value);
  };

  apiRequest(value) {
    let name = value.split("&page=")[0];
    const movie = movieService
      .getMovieByName(value)
      .then(res => {
        const data = {
          movies: res.data.Search,
          searchValue: name,
          loader: false,
          totalResults: res.data.totalResults
        };
        this.setState({ data });
        this.props.movies(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.apiRequest(
        this.state.data.searchValue + "&page=" + this.props.currentPage
      );
    }
  }

  render() {
    const { data, loggedUser: user } = this.state;
    return (
      <Fragment>
        <Col xs="3 text-center">
          <h1>Movie Catalog</h1>
        </Col>
        <Col xs="7 text-center">
          <Input
            type="text"
            name="search-box"
            value={data["search-box"] || ""}
            placeholder="Search Movies"
            onChange={this.handleChange}
          />
        </Col>
        <Col xs="2 text-center">
          <p className="user">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            {user}
          </p>
        </Col>
      </Fragment>
    );
  }
}

export default Header;
