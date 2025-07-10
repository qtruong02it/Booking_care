import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HandBook.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handbookImg1 from '../../../assets/handbook/hung-viet.jpg';
// import handbookImg2 from '../../../assets/handbook/handbook2.png';
import HomePage from '../HomePage';
class HandBook extends Component {
    render() {
        let settings = this.props.settings;

        return (
            <div className='section-common-slider section-bn'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div className='handbook-content'>
                        <Slider {...settings}>
                            <div className="handbook-body">
                                <img src={handbookImg1} />
                                <h3>Cẩm nang sức khỏe 1</h3>
                            </div>
                            <div className="handbook-body">
                                <img src={handbookImg1} />
                                <h3>Cẩm nang sức khỏe 2</h3>
                            </div>
                            <div className="handbook-body">
                                <img src={handbookImg1} />
                                <h3>Cẩm nang sức khỏe 3</h3>
                            </div>
                            <div className="handbook-body">
                                <img src={handbookImg1} />
                                <h3>Cẩm nang sức khỏe 4</h3>
                            </div>
                            <div className="handbook-body">
                                <img src={handbookImg1} />
                                <h3>Cẩm nang sức khỏe 5</h3>
                            </div>
                            <div className="handbook-body">
                                <img src={handbookImg1} />
                                <h3>Cẩm nang sức khỏe 6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

export default connect(mapStateToProps)(HandBook);
