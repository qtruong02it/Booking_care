import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,

        }
    }
    handleOnChangeUsername = (event) => {
        const value = event.target.value;
        this.setState({
            username: value
        });

    }
    handleOnChangePassword = (event) => {
        const value = event.target.value;
        this.setState({
            password: value
        });

    }
    handleLogin = async () => {
        this.setState({ errMessage: '' });

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                });
            } else if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user); // dùng props đúng cách
                console.log('Login successful');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                this.setState({
                    errMessage: error.response.data.message
                });
            } else {
                this.setState({
                    errMessage: 'Server error or no response!'
                });
            }
            console.error('Login error:', error.message);
        }
    }


    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        });
    }
    render() {

        return (
            <div className="login-background">
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form  group login-input'>
                            <label>Username:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your name '
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    className='form-control'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password '
                                    onChange={(event) => { this.handleOnChangePassword(event) }}
                                />
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>

                                </span>

                            </div>

                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center mt-3 '>
                            <span className='text-other-login'>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className='fa-brands fa-google-plus-g google'></i>
                            <i className='fa-brands fa-facebook facebook'></i>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};
const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
