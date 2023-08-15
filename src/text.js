import react from 'react';

Text = (props) => {
    return (
        <div>
          <h1>Hello, React!</h1>
          <p>Welcome {props.value} </p>
        </div>
      );
}
export default Text;