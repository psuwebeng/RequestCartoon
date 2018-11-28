import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      fullname: '',
      email: '',
      cartoon_name: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('request_cartoon').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const cartoon = doc.data();
        this.setState({
          key: doc.id,
          fullname: cartoon.fullname,
          email: cartoon.email,
          cartoon_name: cartoon.cartoon_name
        });
      } else {
        console.log("No such cartoon!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({cartoon:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, cartoon_name } = this.state;

    const updateRef = firebase.firestore().collection('request_cartoon').doc(this.state.key);
    updateRef.set({
      fullname,
      email,
      cartoon_name
    }).then((docRef) => {
      this.setState({
        key: '',
        fullname: '',
        email: '',
        cartoon_name: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding cartoon: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT CARTOON 
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Cartoon List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Fullname:</label>
                <input type="text" class="form-control" name="fullname" value={this.state.title} onChange={this.onChange} placeholder="Fullname" />
              </div>
              <div class="form-group">
                <label for="description">Email:</label>
                <input type="text" class="form-control" name="description" value={this.state.email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="author">Cartoon name:</label>
                <input type="text" class="form-control" name="cartoon_name" value={this.state.cartoon_name} onChange={this.onChange} placeholder="Cartoon name" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
