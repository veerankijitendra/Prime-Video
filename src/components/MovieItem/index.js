import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movies} = props
  const {thumbnailUrl, videoUrl} = movies

  console.log(thumbnailUrl, videoUrl)

  //   return (
  //     <button type="button" className="button">
  //       <img src={thumbnailUrl} alt="thumbnail" className="thumb-nail" />
  //     </button>
  //   )

  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-nail" />
      }
    >
      {close => (
        <>
          <div className="pop-up-con">
            <button
              testid="closeButton"
              className="icon-con"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
