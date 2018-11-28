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
      cartoon_name: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, cartoon_name } = this.state;

    this.ref.add({
      fullname,
      email,
      cartoon_name
    }).then((docRef) => {
      this.setState({
        fullname: '',
        email: '',
        cartoon_name: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding cartoon: ", error);
    });
  }

  render() {
    const { fullname, email, cartoon_name } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD CARTOON
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Cartoon List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Fullname:</label>
                <input type="text" class="form-control" name="fullname" value={fullname} onChange={this.onChange} placeholder="Fullname" />
              </div>
              <div class="form-group">
                <label for="description">Email:</label>
                <textArea class="form-control" name="email" onChange={this.onChange} placeholder="Email" cols="80" rows="3">{email}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Cartoon name:</label>
                <input type="text" class="form-control" name="cartoon_name" value={cartoon_name} onChange={this.onChange} placeholder="Cartoon name" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
