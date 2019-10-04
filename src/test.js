import React, { Component } from "react";
import axios from "axios";
import { CirclePicker, HuePicker } from "react-color";
// import ReactCircleColorPicker from "react-circle-color-picker";
// import { PhotoshopPicker } from 'react-color';
export default class sample extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      tablevalue: {},
      color: ""
    };
  }

 
  change = e => {
    console.log(e);
    console.log(e.target);
    this.setState({
      tablevalue: this.state.data[e.target.value]
    });
  };
  handleChange = color => {
    console.log(color.hex);
    this.setState({
      color: color.hex,
      img: false
    });
  };
  chooseImg = obj => {
    let src = URL.createObjectURL(obj.target.files[0]);

    this.setState({
      imgsrc: src,
      img: true
    });
  };
  render() {

    return (
        <div class="container">
      <div class="row">
    
                
        <div class="col-md-4">
        <div class="file_input_div ">
          <div class="file_input">
            {/* <label class="form-label p_img">Upload Product Images</label> */}
            <label>
              <input
                style={{ display: "none" }}
                name="userFiles"
                id="userFiles"
                type="file"
                onChange={this.chooseImg}
              />
             <i class="fa fa-picture-o" style={{fontSize:"120px"}}></i>
            </label>
          </div>
        </div>
        {this.state.img ? <img src={this.state.imgsrc} /> : null}
        <p><b>Photo gallery</b></p>
        </div>
        <div class="col-md-4">
        <CirclePicker pointer={this.state.color} onChange={this.handleChange}  />
        <p><b>choose color</b></p>
       </div> <div class="col-md-4">
        <HuePicker style={{marginTop:"90px"}} onChange={this.handleChange}  /><br/><br/>
        {this.state.color !== "" ? (
          <span
            style={{
              background: this.state.color,
              padding: "10px",
              borderRadius: "10%",
              float: "left",
              border: "1px solid"
            }}
          >
            {this.state.color}
          </span>
        ) : null}
        <p><b>color picker</b></p>

</div>

      </div>
      </div>
    );
  }
}