import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';
import HomePage from '../HomePage';
class HomeFooter extends Component {
    render() {

        return (
            <div className='section-common-slider home-footer'>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <h4>HealthCare Việt Nam</h4>
                        <p>© 2025 HealthCare, Inc. All rights reserved.</p>
                    </div>
                    <div className='footer-right'>
                        <a href="#">Chính sách bảo mật</a>
                        <a href="#">Điều khoản sử dụng</a>
                        <a href="#">Liên hệ</a>
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

export default connect(mapStateToProps)(HomeFooter);
