import React from 'react';
import ReloadButton from './ReloadButton.jsx';

export default class Card extends React.Component {
  render() {
    let data = this.props.data;
    let reload = this.props.reload;
    let srcSetString = `${data.posterS} 500w, ${data.posterM} 800w`;

    return (
      <div className="anime wrapper">
        <div className="anime__poster col-left">
          <img srcSet={srcSetString} alt={data.title} width="390"/>
        </div>
        <div className="anime__info-wrap col-right">
          <div className="anime__title-wrap">
            <h1 className="anime__title">{data.title}</h1>
            <h2 className="anime__japtitle">{data.japtitle}</h2>
          </div>
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
              
              <span className="anime__info-item-data">{data.epLength}</span>
            </div>
            <div className="anime__info-item anime__info-item--last">
              <span className="anime__info-item-title">Status</span>
              <span className="anime__info-item-data">{data.status}</span>
            </div>
          </div>
          <p className="anime__synopsis">{data.synopsis}</p>
          <ReloadButton reload={reload} />
        </div>
      </div>);
  }
}