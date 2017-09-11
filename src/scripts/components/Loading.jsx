import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="spinner">

          <div className="spinner__elem">
          </div>
          <div className="spinner__elem spinner__elem--second">
          </div>
          <div className="spinner__text">
            Loading...
          </div>

      </div>
    );
  }
}