import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
    {
      "source": {
        "id": null,
        "name": "Marketscreener.com"
      },
      "author": "MarketScreener",
      "title": "Goldilocks is back! Markets start 2023 in red-hot form",
      "description": "(marketscreener.com) From stocks to government\nbonds, markets have had one of their best starts to the year in\ndecades but whether the run lasts depends on a Goldilocks\nscenario of inflation easing, economic growth holding up and\nborrowing costs falling.\n Aft…",
      "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Goldilocks-is-back-Markets-start-2023-in-red-hot-form-42851919/?utm_medium=RSS&utm_content=20230131",
      "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      "publishedAt": "2023-01-31T07:00:00Z",
      "content": "LONDON, Jan 31 (Reuters) - From stocks to government\r\nbonds, markets have had one of their best starts to the year in\r\ndecades but whether the run lasts depends on a Goldilocks\r\nscenario of inflation… [+4077 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Ford Mach-E Price Cuts Right Strategic Move, Says Analyst: Why Tesla Is 'Uniquely Positioned' In This 'Game Of Thrones Battle'",
      "description": "Ford Motor Co. F announced on Monday that it was lowering the Mustang Mach-E electric vehicle prices across trims, which is seen as a reactive move to EV industry leader Tesla Inc.’s TSLA string of price cuts. What Happened: Tesla’s up to 20% price cuts annou…",
      "url": "https://biztoc.com/x/f588c3b6561a5c39",
      "urlToImage": "https://c.biztoc.com/p/f588c3b6561a5c39/og.webp",
      "publishedAt": "2023-01-31T06:48:09Z",
      "content": "Ford Motor Co. F announced on Monday that it was lowering the Mustang Mach-E electric vehicle prices across trims, which is seen as a reactive move to EV industry leader Tesla Inc.s TSLA string of pr… [+301 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Carriermanagement.com"
      },
      "author": "Susanne Sclafane",
      "title": "Tesla Competing With ‘GEICOs of the World’ to Lower Insurance Prices",
      "description": "While executives of Tesla said the car maker’s insurance business isn’t yet big enough to warrant separate financial disclosure of its results, Chief Executive Officer Elon Musk reiterated a benefit for Tesla owners: cheaper premiums. Speaking on an earnings …",
      "url": "https://www.carriermanagement.com/news/2023/01/26/244733.htm",
      "urlToImage": "https://www.insurancejournal.com/app/uploads/2022/10/elon-musk-caricature-bigstock.jpg",
      "publishedAt": "2023-01-31T06:45:58Z",
      "content": "New You can now listen to Insurance Journal articles!While executives of Tesla said the car maker’s insurance business isn’t yet big enough to warrant separate financial disclosure of its results, Ch… [+7989 chars]"
    }
  ]

  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3">
            <h2>News Monkey - Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{

              return  <div className="col-md-4" key = {element.url}>
                <NewsItem title = {element.title.slice(0,45)} description = {element.description.slice(0,88)} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                </div>

            })}
        
            </div>
        </div>
        
      </div>
    )
  }
}

export default News