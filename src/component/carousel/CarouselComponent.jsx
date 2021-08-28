import React, { Component } from 'react';
import DefaultImage from './../../assets/images/default-image.png'

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            item_slider : []
        }
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.data !== this.props.data) {
            this.setState({
                item_slider : this.props.data
            }) 
        }
    }
    render() {
        return (
            <>
                {this.state.item_slider.length !== 0 ? 
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.props.data.sections[0].articles.map((u, index) => {
                                if(index <= 5){
                                    return (<li data-target="#carouselExampleCaptions" data-slide-to={index} className={index === 0 ? "active" : ""}></li>)
                                }
                            })}
                        </ol>
                        <div className="carousel-inner">
                            {this.props.data.sections[0].articles.map((u, index) => {
                                if(index <= 5){
                                    return (
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            {u.thumbnail.type.toLowerCase() !== "video" ? <img src={`https://obs.line-scdn.net/${u.thumbnail.hash}`} className="d-block w-100" alt="..."/> : <img src={DefaultImage} className="d-block w-100" alt="..."/>}
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>{u.title}</h5>
                                                <p>{u.publisher}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        
                            
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    :
                    <div></div>
                }
            </>
        );
    }
}

export default CarouselComponent;
