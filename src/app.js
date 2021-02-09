//import React from 'react';
//import ReactDOM from 'react-dom';


function DemoApp() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(React.createElement(DemoApp),
  document.getElementById("root"));
