import React, { Component } from 'react';
import Button from './Button'
import UsernName from './UsernName';
import Password from './Password';
import Email from './Email';
import DOB from './DOB';
class Signup extends Component {
  constructor(props)
  {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
  }
  onClickBtn()
  {
      this.props.history.push("/");
  }
  render() {
    return (
      <div className="container">
        <br/><h1>LogInForm</h1><br/>
        <UsernName></UsernName>
        <Password></Password>
        <Email></Email>
        <DOB></DOB>
        <Button value="Signup" onClickBtn={this.onClickBtn}></Button>
      </div>
    );
  }
}

export default Signup;
