import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="spinner">

          <div className="spinner__elem">
          </div>
          <div className="spinner__elem spinner__elem--second">
          </div>
          <div className="spinner__circle">
            <div className="spinner__dots">
              <span className="spinner__dot"></span>
              <span className="spinner__dot spinner__dot--second"></span>
              <span className="spinner__dot spinner__dot--third"></span>
            </div>
          </div>


      </div>
    );
  }
}