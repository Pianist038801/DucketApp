import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
 } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';
import CT from '@src/constants';
import { replaceRoute } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';

import { Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';
import api from '@api';
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onTextInputFocus(value) {
    this.setState({ [`${value}Focus`]: true });
  }

  doResetPassword() { 
    api('/user/forgotpassword',{email: this.state.email}).then((res) => {
      console.log(res);
      if(res.success == false)
        { 
        alert(res.message);
        return;
        }
      else
        { 
        
         alert('Password sent to your email');
         console.log('success');
        return;
        }
    });
  }
/*source={Images.bkgLogin}*/
  render() {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar('transparent')}
          <Image
            resizeMode={'stretch'}
            style={ Styles.fixedFullScreen } />
          <View style={{ flex: 3 }} />
          {/* -----Body---- */}
          <View style={styles.bodyContainer}>
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.emailFocus) }]}>
              <Text style={[styles.forgotTextStyle, Fonts.style.h4]}>
                {CT.string.FORGOT_YOUR}
              </Text>
              {CommonWidgets.renderSpacer(1)}
              <Text style={[styles.forgotTextStyle, Fonts.style.bottomText, { marginTop: 5 }]}>
                {CT.string.ENTER_RESET_EMAIL}
              </Text>
              {CommonWidgets.renderSpacer(0.5)}
              <TextInput
                autoCapitalize = 'none'
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={CT.string.EMAIL}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ email: text })}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => this.doResetPassword()}
                onFocus={() => this.onTextInputFocus('email')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            {CommonWidgets.renderMaterialButton('Send Password',
              Colors.brandSecondary, () => this.doResetPassword())}
          </View>
          {CommonWidgets.renderCloseButton(() => this.props.navigation.goBack())}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
     
  };
}

function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
