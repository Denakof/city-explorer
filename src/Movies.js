import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Movies extends Component {
  render() {
    console.log(this.props.movies[0]);
    return (
      <div>
        {this.props.movies.map((movie) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"" + movie.img_url}
                alt={movie.title}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Movies;
