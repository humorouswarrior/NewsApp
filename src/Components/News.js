import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    //runs first
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitaliseFirstLetter(
      this.props.category
    )} - YouNews`;
  }

  async updateNews() {
    //this was create while refactoring the file
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    //componentDidMount() keliye refer react component lifecycle notes. we have made it async
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false})
    this.updateNews();
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2 className="text-center" style={{ margin: "30px", fontFamily: 'Varela Round', fontSize: '2.3rem'}}>
            YouNews - Top Headlines
          </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            // endMessage={this.state.articles.length === this.state.totalResults?
            //   <p style={{ textAlign: 'center' }}>
            //     <b>Yay! You have seen it all</b>
            //   </p>
            //   :
            //   <div className='text-center fs-5 fw-bold'>Loading</div>
            // }
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element,index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageUrl={element.urlToImage ? element.urlToImage : ""}
                        newsUrl={element.url}
                        author={element.author}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;
