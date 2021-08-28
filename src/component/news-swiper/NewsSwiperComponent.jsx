import React, { Component } from 'react';
import DefaultImage from './../../assets/images/default-image.png'

class NewsSwiperComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            news_item : ''
        }
    }
    
    componentDidMount(){
        this.setState({
            news_item : this.props.data
        }) 
    }
    

    render() {
        return (
            <div className="news-category">
                <div className="row">
                    <div className="col-lg-12">
                        <h5><b>{this.props.title !== undefined ? this.props.title : "Artikel"}</b></h5>
                    </div>
                    <div className="col-lg-12">
                        <div className="area-card-news">
                            {console.log(this.state.news_item.articles)}
                            {this.state.news_item.articles !==  undefined ? this.state.news_item.articles.map((item) =>{
                                return(
                                    <div className="card-news">
                                        <div className="card-news-content">
                                            <p>{item.title}</p>
                                            <small>{item.publisher}</small>
                                        </div>
                                        <div className="card-news-image">
                                            <img src={(item.thumbnail !== undefined) && (Object.prototype.toString.call(item.thumbnail) === '[object Object]') && (item.thumbnail.type.toLowerCase() !== "video") ? `https://obs.line-scdn.net/${item.thumbnail.hash}` : DefaultImage} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                )
                            }) : ''}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsSwiperComponent;
