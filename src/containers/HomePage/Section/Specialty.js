import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import HomePage from '../HomePage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg1 from "../../../assets/specialty/xuong-khop.png";
import specialtyImg2 from "../../../assets/specialty/cot-song.png";
import specialtyImg3 from "../../../assets/specialty/eye.png";
import specialtyImg4 from "../../../assets/specialty/nhi-khoa.png";
import specialtyImg5 from "../../../assets/specialty/noi-soi-tieu-hoa.png";
import specialtyImg6 from "../../../assets/specialty/phuc-hoi-chuc-nang.png";


class Specialty extends Component {
    render() {
        let settings = this.props.settings;
        console.log('check setting: ', settings)

        return (
            <div className='section-common-slider section-bn'>
                <div className='section-specialty'>
                    <div className='specialty-container'>
                        <div className='section-container'>
                            <div className="section-header">
                                <span className="title-section">Chuyên khoa phổ biến</span>
                                <button className="btn-section">xem thêm</button>
                            </div>
                            <div className='specialty-content'>

                                <Slider {...settings}>
                                    <div className="specialty-body">
                                        <img src={specialtyImg1} />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className="specialty-body">
                                        <img src={specialtyImg2} />
                                        <h3>Cột sống</h3>
                                    </div>
                                    <div className="specialty-body">
                                        <img src={specialtyImg3} />
                                        <h3>Mắt</h3>
                                    </div>
                                    <div className="specialty-body">
                                        <img src={specialtyImg4} />
                                        <h3>Nhi khoa</h3>
                                    </div>
                                    <div className="specialty-body">
                                        <img src={specialtyImg5} />
                                        <h3>Nội soi, Tiêu hóa</h3>
                                    </div>
                                    <div className="specialty-body">
                                        <img src={specialtyImg6} />
                                        <h3>Phục hồi chức năng</h3>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

export default connect(mapStateToProps)(Specialty);
