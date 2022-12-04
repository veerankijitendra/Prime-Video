import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  //   const settings = {
  //     dots: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   }

  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem movies={each} />
      ))}
    </Slider>
  )
}

export default MovieSlider
