import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Alert,
  Image
 } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';
import { MKButton } from 'react-native-material-kit';
import CT from '@src/constants';
import { replaceRoute } from '@actions/route';
import OverlaySpinner from '@components/OverlaySpinner';
import CommonWidgets from '@components/CommonWidgets';

import { Styles, Images, Colors, Fonts, Metrics } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';
import api from '@api';
import { setSpinnerVisible } from '@actions/globals';
import uploadAvatar from '@api/uploadAvatar';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount()
  {
   
  }
  onTextInputFocus(value) {
    this.setState({ emailFocus: false, passwordFocus: false });
    this.setState({ [`${value}Focus`]: true });
  }
                             
  doLogin() {
    this.props.setSpinnerVisible(true);
    var loginData = {
      username: this.state.email,
      password: this.state.password,
    }
    let mthis = this;
    api('/user/login', loginData).then(res=>{
      if(res.success == true){
          mthis.props.setSpinnerVisible(false);
          mthis.props.navigation.dispatch(Utils.getResetAction('main'));
          console.log(res.data);
        }
        else{
          mthis.props.setSpinnerVisible(false);
          setTimeout(()=> {Alert.alert('Login Failed');}, 100);
        }
    }); 
  }

  doFacebookLogin() {
    //this.props.setSpinnerVisible(true);
    setTimeout(() => {
      this.props.setSpinnerVisible(false);
      this.props.navigation.navigate('main');
    }, 500);
  }
  
  doRegister() {
    this.props.navigation.navigate('register');
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar('transparent')}
          <Image
            resizeMode={'stretch'}
            style={Styles.fixedFullScreen} />
            {/*source={Images.bkgLogin} />*/}
          {/* -----LOGO---- */}
          <View style={[Styles.center, { flex: 5 }]}>
            <Text style={[Fonts.style.h1, { color: Colors.textPrimary }]}>
              {CT.string.APP_NAME}
            </Text>
          </View>

          {/* -----Body---- */}
          <View style={styles.bodyContainer}>
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.emailFocus) }]}>
              <TextInput
                autoCapitalize = 'none'
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={'USERNAME'}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ email: text })}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => this.loginpwd.focus()}
                onFocus={() => this.onTextInputFocus('email')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.passwordFocus) }]}>
              <TextInput
              autoCapitalize = 'none'
                ref={(c) => { this.loginpwd = c; }}
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={'PASSWORD'}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
                returnKeyType={'go'}
                onSubmitEditing={() => this.doLogin()}
                onFocus={() => this.onTextInputFocus('password')} />
            </View>
            <View style={styles.forgotPwdContainer}>
              <MKButton
                backgroundColor={'transparent'}
                onPress={() => this.props.navigation.navigate('forgotPassword')}>
                <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>
                  Forgot password
                </Text>
              </MKButton>
            </View>
            {CommonWidgets.renderSpacer(2)}
            {CommonWidgets.renderMaterialButton('Log In',
              Colors.brandSecondary, () => this.doLogin())}  
            <Text style={[Fonts.style.h6, { color: Colors.textPrimary, marginVertical: 5 }]}>
              OR
            </Text>

            {CommonWidgets.renderMaterialButton('Connect Facebook',
              Colors.brandThird, () => this.doFacebookLogin())}

          </View>

          {/* -----BottomArea---- */}
          <View style={styles.bottomAreaLogin}>
            <Text style={[Fonts.style.bottomText, { color: Colors.textPrimary }]}>
              Still don't have an account?
            </Text>
            <MKButton
              backgroundColor={'transparent'}
              onPress={this.doRegister.bind(this)}>
              <Text style={[Fonts.style.hyperButtonText, { color: Colors.textPrimary, marginLeft: 5 }]}>
                Register now!
              </Text>
            </MKButton>
          </View>
          <OverlaySpinner visible={this.props.globals.spinnerVisible} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Login.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setSpinnerVisible: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setSpinnerVisible: spinnerVisible => dispatch(setSpinnerVisible(spinnerVisible)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
