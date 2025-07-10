import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';
import HomePage from '../HomePage';
class About extends Component {
    render() {

        return (
            <div className='section-common-slider section-about'>
                <div className='about-container'>
                    <h2>Về chúng tôi</h2>
                    <p>
                        Chúng tôi là hệ thống khám chữa bệnh hàng đầu, kết nối bệnh nhân với bác sĩ chuyên gia.
                        Mục tiêu của chúng tôi là đem lại sự chăm sóc sức khỏe tối ưu cho mọi người dân.
                    </p>
                    <div className='about-video'>
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                            title="About video" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
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

export default connect(mapStateToProps)(About);
