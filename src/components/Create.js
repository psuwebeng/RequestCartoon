import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('request_cartoon');
    this.state = {
      fullname: '',
      email: '',
      cartoonName: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, cartoonName } = this.state;

    this.ref.add({
      fullname,
      email,
      cartoonName
    }).then((docRef) => {
      this.setState({
        fullname: '',
        email: '',
        cartoonName: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { fullname, email, cartoonName } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD CARTOON
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/" className="btn btn-primary">Cartoon Lists</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Full name:</label>
                <input type="text" className="form-control" name="fullname" value={fullname} onChange={this.onChange} placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="E-mail" />
              </div>
              <div className="form-group">
                <label htmlFor="cartoonName">Cartoon Name:</label>
                <input type="text" className="form-control" name="cartoonName" value={cartoonName} onChange={this.onChange} placeholder="Cartoon Name" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
