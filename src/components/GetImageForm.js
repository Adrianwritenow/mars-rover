import React, { Component } from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = "LNRXlKmc2zkDdCHz7q0IKCgTkxiAF3EJuJnYSxr8";

class GetImageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }
    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleRover = this.handleRover.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
  }

  componentDidMount(){
    this.fetchRoverImage();
  }


  fetchRoverImage(){
  let cam = this.state.camera;
  let rove = this.state.rover;
  let num = this.state.sol;

  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

  fetch(imageUrl)
  .then(response => response.json())
  .then((data) => {
    this.setState({images: data.photos})
  })
}


  handleRover(event){
    this.setState({
    rover:event.target.value
  })

  }
  handleCamera(event){
    this.setState({
    camera:event.target.value
  })

  }
  handleSol(event){
    this.setState({
    sol:event.target.value
  })

  }

  render() {
    return (
      <div>
        <div className="roverForm">
          <label htmlFor="rover">Rover</label>
          <div className="formSelect slate">
            <select onChange={this.handleRover} id="rover" value={this.state.rover}>
              <option selected="selected">Rover Select</option>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
          </div>
          <label htmlFor="camera">Camera Type</label>
          <div className="formSelect slate">
            <select onChange={this.handleCamera} id="camera" value={this.state.camera}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
          <GetImageButton handleClick={this.fetchRoverImage}/>
          </div>
        <ImageDisplay images={this.state.images}/>
      </div>

    );
  }
}

export default GetImageForm;
