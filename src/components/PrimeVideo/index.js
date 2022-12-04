import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  return (
    <div className="prime-video">
      <img
        className="image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="sliders-con">
        <div className="slider-bg">
          <h1 className="movie-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div className="slider-bg">
          <h1 className="movie-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
