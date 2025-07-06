import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medicalfacilityImg1 from '../../../assets/medical-facility/bvcr-moi.jpg';
import medicalfacilityImg2 from '../../../assets/medical-facility/doctor-check.jpg';
import medicalfacilityImg3 from '../../../assets/medical-facility/hung-viet.jpg';
import medicalfacilityImg4 from '../../../assets/medical-facility/viet-duc.jpg';
import medicalfacilityImg5 from '../../../assets/medical-facility/y-duoc-1.jpg';
import medicalfacilityImg6 from '../../../assets/medical-facility/med-tai-ha-noi--01.png';
import HomePage from '../HomePage';
class MedicalFacility extends Component {

    render() {
        let settings = this.props.settings;
        console.log('check setting: ', settings)
        return (
            <div className='section-common-slider section-bn'>
                <div className='section-medical-facility'>
                    <div className='medical-facility-container'>
                        <div className='section-container'>
                            <div className="section-header">
                                <span className="title-section">Chuyên khoa phổ biến</span>
                                <button className="btn-section">xem thêm</button>
                            </div>
                            <div className='medical-facility-content'>

                                <Slider {...settings}>
                                    <div className="medical-facility-body">
                                        <img src={medicalfacilityImg1} />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={medicalfacilityImg2} />
                                        <h3>Cột sống</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={medicalfacilityImg3} />
                                        <h3>Mắt</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={medicalfacilityImg4} />
                                        <h3>Nhi khoa</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={medicalfacilityImg5} />
                                        <h3>Nội soi, Tiêu hóa</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={medicalfacilityImg6} />
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
