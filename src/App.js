import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    }
  }

  componentDidMount() {

  }

  render() {
    return <div>
      {this.state.loading ? <div>loading...</div> : <div>news</div>}
    </div>
  }


}

export default App;
