import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import OutStandingDoctorImg1 from '../../../assets/medical-facility/bvcr-moi.jpg';
// import OutStandingDoctorImg2 from '../../../assets/medical-facility/OutStandingDoctor-check.jpg';
// import OutStandingDoctorImg3 from '../../../assets/medical-facility/hung-viet.jpg';
// import OutStandingDoctorImg4 from '../../../assets/medical-facility/viet-duc.jpg';
// import OutStandingDoctorImg5 from '../../../assets/medical-facility/y-duoc-1.jpg';
// import OutStandingDoctorImg6 from '../../../assets/medical-facility/med-tai-ha-noi--01.png';
import HomePage from '../HomePage';
class OutStandingDoctor extends Component {

    render() {
        let settings = this.props.settings;
        console.log('check setting: ', settings)
        return (
            <div className='section-common-slider section-bn'>
                <div className='section-medical-facility'>
                    <div className='medical-facility-container'>
                        <div className='section-container'>
                            <div className="section-header">
                                <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                                <button className="btn-section">xem thêm</button>
                            </div>
                            <div className='medical-facility-content'>
                                <Slider {...settings}>
                                    <div className="medical-facility-body">
                                        <img src={OutStandingDoctorImg1} />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={OutStandingDoctorImg2} />
                                        <h3>Cột sống</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={OutStandingDoctorImg3} />
                                        <h3>Mắt</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={OutStandingDoctorImg4} />
                                        <h3>Nhi khoa</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={OutStandingDoctorImg5} />
                                        <h3>Nội soi, Tiêu hóa</h3>
                                    </div>
                                    <div className="medical-facility-body">
                                        <img src={OutStandingDoctorImg6} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
