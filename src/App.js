import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
      var input = document.getElementById("input");
      input.value = "<html>\n<head>\n\n</head>\n<body>\n\n</body>\n</html>";
      input.focus();
    }

    handleKeyUp() {
      var input = document.getElementById("input");
      var result = document.getElementById("output");
      result.contentDocument.documentElement.innerHTML = input.value;
    }

    render() {
      return (
        <div>
          <h1 style={{ background: 'red' }}>HTML Previewer</h1>
          <section className="window clear">
            <section className="terminal">
              <textarea id="input" onKeyUp={this.handleKeyUp.bind(this)}></textarea>
            </section>

            <section className="terminal">
              <iframe id="output"></iframe>
            </section>
          </section>
        </div>
      );
    }
}

export default App;
