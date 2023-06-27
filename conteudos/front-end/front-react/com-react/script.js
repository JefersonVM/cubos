class HelloWorld extends React.Component {
  render() {
    return (
      React.createElement(
        'div',
        {},
        React.createEment(
          'h1',
          {},
          'Hello World!',
        ),
        React.createElement(
          'div',
          {},
          React.createEment(
            'h2',
            {},
            Math.random(),

      )
    );
  }
}

ReactDOM.render(React.createElement(HelloWorld), document.querySelector('#root'));
