import React from 'react';
import Header from './Header.jsx';
import Loading from './Loading.jsx';
import Card from './Card.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.fetchApi = this.fetchApi.bind(this);
  }

  fetchApi() {

    let ID = Math.floor(Math.random() * 13772) + 1;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://kitsu.io/api/edge/anime/${ID}`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText)
                    .data
                    .attributes;

        if (data.startDate !== null) {
          data.startDate = data.startDate.slice(0, 4);
        } else data.startDate = 'N/A';

        if (data.episodeCount === null) {
          data.episodeCount = 'N/A';
        }

        if (data.episodeLength === null) {
          data.episodeLength = 'N/A' + ' min';
        }

        if (data.episodeLength !== null) {
          data.episodeLength = data.episodeLength + ' min';
        }

        if (data.synopsis.length === 0) {
          data.synopsis = 'Synopsis not available :(';
        }

        this.setState({
          year: data.startDate,
          title: data.titles.en_jp,
          japtitle: data.titles.ja_jp,
          synopsis: data.synopsis,
          posterS: data.posterImage.small,
          posterM: data.posterImage.medium,
          episodes: data.episodeCount,
          epLength: data.episodeLength,
          showType: data.showType,
          status: data.status,
          error: null
        });
      }
      else if (xhr.readyState == 4 && xhr.status == 404) {
        this.setState({error: 404});
        setTimeout(this.fetchApi, 5000);
      }
    }
    xhr.send();

  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    if (Object.keys(this.state).length === 0 || this.state.error === 404) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <Header/>
        <Card data={this.state} reload={this.fetchApi.bind(this)}/>
      </div>
    );
  }
}