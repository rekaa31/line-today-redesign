import React, { Component } from 'react';
import CarouselComponent from '../component/carousel/CarouselComponent';
import NewsSwiperComponent from '../component/news-swiper/NewsSwiperComponent';
import { GET_LIST_CATEGORY, GET_NEWS_BY_CATEGORY } from '../service/NewsService';

class IndexNewsPortal extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            news : [],
            slider : []
        }
    }
    
    componentDidMount(){
        if(this.props.match.params.id !== undefined){
            GET_NEWS_BY_CATEGORY(this.props.match.params.id).then(res => {
                let article = res.filter((v) => v.type !== 56)
    
                const groups = article.reduce((groups, item) => {
                    const group = (groups[item.type] || []);
                    group.push(item);
                    groups[item.type] = group;
                    return groups;
                }, {});
    
                let list_slider
                let no_list_slider

                if(groups['6'] === undefined){
                    list_slider = groups[Object.keys(groups)[0]][0] 
                }else{
                    list_slider = groups['6'][0]
                }

                // console.log(groups)
                
                this.setState({
                    slider : list_slider,
                    news : groups
                })
            })
        }else{
            GET_NEWS_BY_CATEGORY('100270').then(res => {
                let article = res.filter((v) => v.type !== 56)
    
                const groups = article.reduce((groups, item) => {
                    const group = (groups[item.type] || []);
                    group.push(item);
                    groups[item.type] = group;
                    return groups;
                }, {});

                let list_slider
                let no_list_slider
    
                if(groups['6'] === undefined){
                    list_slider = groups[Object.keys(groups)[0]][0] 
                }else{
                    list_slider = groups['6'][0]
                }    
                
                this.setState({
                    slider : list_slider,
                    news : groups
                })
            })
        }
        
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="area-content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="area-carousel">
                                <CarouselComponent data={this.state.slider}/>
                            </div>
                            <div className="area-news-list">
                                {Object.keys(this.state.news).map((id, index) => {
                                    if(index <= 1){
                                        return this.state.news[id].map((u, index2) => {
                                            if((u.sections.length === 1) && (index2 < 1)){
                                                return (<NewsSwiperComponent key={index2} title={u.title} data={u.sections[0]}/>)
                                            }
                                        })
                                    }
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexNewsPortal;
