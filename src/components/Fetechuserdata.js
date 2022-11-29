import React from 'react';
import User from './User';
class Fetechuserdata extends React.Component {
  state = {
    person: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({
        person: data
      }, () => {
        console.log(this.state.person)
      }))
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <>
        <User person={this.state.person} />
      </>

    )

  }

}
export default Fetechuserdata;