import React, { Component } from 'react';

class ImageDisplay extends Component {
  render() {
    let key = 0;
    let photos =this.props.images
    let images = photos.map((photo)=>{
      key++;
      return (
          <ul key ={photo.id}>
            <li>
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
