import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartoon: {}, //board -> cartoon
      key: ''
    };
  }

  componentDidMount() {
    //boards -> CollectionName -> request_cartoon
    const ref = firebase.firestore().collection('request_cartoon').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          cartoon: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such Cartoon");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('request_cartoon').doc(id).delete().then(() => {
      console.log("Cartoon successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing cartoon: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Cartoon List</Link></h4>
            <h3 class="panel-title">
              {this.state.cartoon.fullname}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Email:</dt>
              <dd>{this.state.cartoon.email}</dd>
              <dt>Cartoon name:</dt>
              <dd>{this.state.cartoon.cartoon_name}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
