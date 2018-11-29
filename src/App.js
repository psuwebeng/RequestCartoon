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
      cartoons: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const cartoons = [];
    querySnapshot.forEach((doc) => {
      const { fullname, email, cartoonName } = doc.data();
      cartoons.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fullname,
        email,
        cartoonName,
      });
    });
    this.setState({
      cartoons
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              CARTOON LISTS
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create" className="btn btn-primary">Add Cartoon</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>E-mail</th>
                  <th>Cartoon Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cartoons.map(cartoon =>
                  <tr>
                    <td>{cartoon.fullname}</td>
                    <td>{cartoon.email}</td>
                    <td>{cartoon.cartoonName}</td>
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
