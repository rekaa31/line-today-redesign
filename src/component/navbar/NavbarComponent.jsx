import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GET_LIST_CATEGORY } from '../../service/NewsService';
import Logo from './../../assets/images/logo.png'

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list_category : []
        }
    }

    componentDidMount(){
        const scrollContainer = document.querySelector(".area-scroll-category");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });

        GET_LIST_CATEGORY().then((res) => {
            this.setState({
                list_category : res
            })
        })
    }

    render() {
        return (
            <>
                <div className="row" id="navbar-public">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 ">
                                <img src={Logo} className="img-fluid logo" alt="logo-newsportal" />
                            </div>
                            <div className="offset-md-7 col-lg-3">
                                <input type="text" className="input-search" name="" id="" aria-describedby="helpId" placeholder="Cari Artikel" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="navbar-category-public">
                    <div className="container-fluid">
                       <div className="row">
                            <div className="col-lg-1">
                                <div className="area-subtitle-category">
                                    <p>Kategori</p>
                                </div>
                            </div>
                            <div className="col-lg-11">
                                <div className="area-scroll-category">
                                    {this.state.list_category.map((u, index) =>{
                                        return (<span key={index} className={`badge badge-pill ${Number(window.location.pathname.split('/')[2]) === u.id ? "badge-secondary" : "badge-secondary-custom"} category-item`}><a href={`/category/${u.id}`}>{u.name}</a></span>)
                                    })}
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </>
        );
    }
}

export default NavbarComponent;
