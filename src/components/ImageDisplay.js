import React, { Component } from 'react';

class ImageDisplay extends Component {
  render() {
    let photos =this.props.images
    let images = photos.map((photo)=>{
      return (
          <ul>
            <li key ={photo.id}>
              <img src={photo.img_src}/>
            </li>
          </ul>
      )
    })
    return(
    <div>
      {images}
    </div>
    )
  }
}

export default ImageDisplay;
