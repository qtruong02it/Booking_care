import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctorImg1 from '../../../assets/img-doctor/doctor1.webp';
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
                <div className='section-out-standing-doctor'>
                    <div className='out-standing-doctor-container'>
                        <div className='section-container'>
                            <div className="section-header">
                                <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                                <button className="btn-section">xem thêm</button>
                            </div>
                            <Slider {...settings}>
                                <div className="out-standing-doctor-body">
                                    <img src={doctorImg1} />
                                    <p>Doremon</p>
                                    <h3>Tiến sĩ 1</h3>
                                </div>
                                <div className="out-standing-doctor-body">
                                    <img src={doctorImg1} />
                                    <p>Doremon</p>
                                    <h3>Tiến sĩ 2</h3>
                                </div>
                                <div className="out-standing-doctor-body">
                                    <img src={doctorImg1} />
                                    <p>Doremon</p>
                                    <h3>Tiến sĩ 3</h3>
                                </div>
                                <div className="out-standing-doctor-body">
                                    <img src={doctorImg1} />
                                    <p>Doremon</p>
                                    <h3>Tiến sĩ 4</h3>
                                </div>
                                <div className="out-standing-doctor-body">
                                    <img src={doctorImg1} />
                                    <p>Doremon</p>
                                    <h3>Tiến sĩ 5</h3>
                                </div>
                                <div className="out-standing-doctor-body">
                                    <img src={doctorImg1} />
                                    <p>Doremon</p>
                                    <h3>Tiến sĩ 6</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

            </div >
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
