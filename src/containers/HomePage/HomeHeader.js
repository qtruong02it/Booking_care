import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg'
import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from "../../utils"
import { changeLanguageApp } from '../../store/actions';



class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img src={logo} />
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.speciality" />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.searchdoctor" />
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.health-facility" />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.select-room" />
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.doctor" />
                                    </b>
                                </div >
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.select-doctor" />
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.fee" />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.check-heal" />
                                </div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fa-solid fa-circle-question"></i> <FormattedMessage id="home-header.support" /></div>
                            <div className={language === LANGUAGE.VI ? 'language-vi active' : 'language-vi'} ><span onClick={() => this.changeLanguage(LANGUAGE.VI)}>VN</span></div>
                            <div className={language === LANGUAGE.EN ? 'language-en active' : 'language-en'} ><span onClick={() => this.changeLanguage(LANGUAGE.EN)}>EN</span></div>
                        </div>
                    </div>
                </div >
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title1'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fa-solid fa-hospital"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fa-solid fa-house-medical-circle-check"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fa-solid fa-stethoscope"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fa-solid fa-microscope"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fa-solid fa-people-arrows"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fa-solid fa-tooth"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
