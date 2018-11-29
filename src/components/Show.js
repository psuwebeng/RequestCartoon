import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartoons: {}, //board
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('request_cartoon')
    .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          cartoons: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such Cartoon!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('request_cartoon').doc(id).delete().then(() => {
      console.log("Cartoon successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing Cartoon: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Cartoon Lists</Link></h4>
            <h3 class="panel-title">
              {this.state.cartoons.fullname}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>E-mail:</dt>
              <dd>{this.state.cartoons.email}</dd>
              <dt>Cartoon Name:</dt>
              <dd>{this.state.cartoons.cartoonName}</dd>
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
