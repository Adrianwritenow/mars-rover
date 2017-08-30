import React, { Component } from 'react';

class ImageDisplay extends Component {
  render() {
    let photos =this.props.images
    let images = photos.map((photo)=>{
      return (
          <div className="imageCard">
              <img key ={photo.id} src={photo.img_src}/>
          </div>
      )
    })
    return(
    <div className="cardGroup">
      {images}
    </div>
    )
  }
}

export default ImageDisplay;
