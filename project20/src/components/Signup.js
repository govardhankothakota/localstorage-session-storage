import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <form className="signUpForm" style={{ boxShadow: "2px 2px 2px grey" }}>
        <div className="signUpDiv">
          <h2
            style={{
              color: " rgb(255, 0, 119)",
              textShadow: "1px 1px 1px grey",
            }}
          >
            Sign Up
          </h2>
          <div>
            <label>Name</label>
            <input placeHolder="First Name"></input>
          </div>
          <div>
            <label></label>
            <input placeHolder="Last Name"></input>
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeHolder="Enter Email"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeHolder="Enter Password"></input>
          </div>
          <div>
            <label>Mobile No.</label>
            <input type="tel" placeHolder="Enter Mobile No."></input>
          </div>
          <div>
            <label>Date Of Birth</label>
            <input type="date" placeHolder=""></input>
          </div>
          <div>
            <label> Gender</label>
            <select className="options">
              <option>select</option>
              <option>Male</option>
              <option>Female</option>
              <option>others</option>
            </select>
          </div>
          <div>
            <label>Address</label>
            <input placeHolder="House No"></input>
          </div>
          <div>
            <label></label>
            <input placeHolder="Street"></input>
          </div>
          <div>
            <label></label>
            <input placeHolder="City"></input>
          </div>
          <div>
            <label>State</label>

            <select className="options">
              <option>select</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div>
            <input className="checkBox" type="checkbox"></input> I Accept the
            Terms&Conditions
          </div>
          <div>
            <button
              className="signUpButton"
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
