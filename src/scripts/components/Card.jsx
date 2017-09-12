import React from 'react';

export default class Card extends React.Component {
  render() {
    let data = this.props.data;
    let reload = this.props.reload;

    return (
      <div className="anime wrapper">
        <div className="anime__poster col-left">
          <img src={data.image} alt={data.title}/>
        </div>
        <div className="anime__info-wrap col-right">
          <h1 className="anime__title">{data.title}</h1>
          <h2 className="anime__japtitle">{data.japtitle}</h2>
          <div className="anime__info-items">
            <div className="anime__info-item">
              <span className="anime__info-item-title">Year</span>
              <span className="anime__info-item-data">{data.year}</span>
            </div>
            <div className="anime__info-item">
              <span className="anime__info-item-title">Show Type</span>
              <span className="anime__info-item-data">{data.showType}</span>
            </div>
            <div className="anime__info-item">
              <span className="anime__info-item-title">Episodes</span>
              <span className="anime__info-item-data">{data.episodes}</span>
            </div>
            <div className="anime__info-item">
              <span className="anime__info-item-title">Length</span>
              
              <span className="anime__info-item-data">{data.epLength} min</span>
            </div>
            <div className="anime__info-item">
              <span className="anime__info-item-title">Status</span>
              <span className="anime__info-item-data">{data.status}</span>
            </div>
          </div>
          <p className="anime__synopsis">{data.synopsis}</p>
          <button className="anime__reload-btn" onClick={reload}>Reload</button>
        </div>
      </div>);
  }
}