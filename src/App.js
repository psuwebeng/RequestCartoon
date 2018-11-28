import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('request_cartoon');
    this.unsubscribe = null;
    this.state = {
      request_cartoon: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const request_cartoon = [];
    querySnapshot.forEach((doc) => {
      const { fullname, email, cartoon_name } = doc.data();
      request_cartoon.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fullname,
        email,
        cartoon_name,
      });
    });
    this.setState({
      request_cartoon
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              CARTOON LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Add Cartoon</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Cartoon name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.request_cartoon.map(cartoon =>
                  <tr>
                    <td>{cartoon.fullname}</td>
                    <td>{cartoon.email}</td>
                    <td>{cartoon.cartoon_name}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
