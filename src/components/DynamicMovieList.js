import React, { Component } from 'react'
import AddMovie from './AddMovie'
import ListElement from './ListElement'

export default class DynamicMovieList extends Component {
  state = {
    movieList: [{ title: 'Akira', description: 'scify', year: 1980, rate: 4 }]
  }

  addMovie = movie => {
    this.setState(({ movieList }) => ({ movieList: [...movieList, movie] }))
  }

  render() {
    const { movieList } = this.state
    return (
      <div>
        <h2>Add Movie</h2>
        <AddMovie addMovie={this.addMovie} />
        <h1>Movie List</h1>
        {/* TODO: Mostrar la lista */}
        {movieList.map((movie, i) => (
          <ListElement {...movie} key={i} />
        ))}
      </div>
    )
  }
}
