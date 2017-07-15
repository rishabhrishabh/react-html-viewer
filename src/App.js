import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        htmlText: '<html>\n<head>\n\n</head>\n<body>\n\n</body>\n</html>'
      }
    }

    componentDidMount() {
      var input = this.refs.input;
      input.value = this.state.htmlText;
      input.focus();
    }

    handleKeyUp(e) {
      var result = this.refs.output;
      result.contentDocument.documentElement.innerHTML = this.state.htmlText
    }

    handleChange() {
      this.setState({htmlText: this.refs.input.value});
    }

    render() {
      return (
        <div>
          <h1 style={{ background: 'red' }}>HTML Previewer</h1>
          <section className="window clear">
            <section className="terminal">
              <textarea ref="input" onChange={this.handleChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} />
            </section>

            <section className="terminal">
              <iframe ref="output" key={this.state.htmlText}></iframe>
            </section>
          </section>
        </div>
      );
    }
}

export default App;
