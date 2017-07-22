import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Alert,
 } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n'; 
import { MKButton } from 'react-native-material-kit';
import CT from '@src/constants';
 
import CommonWidgets from '@components/CommonWidgets'; 
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';
import styles from './styles';
import api from '@api';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUri: '',
      username: '',
      email: '',
      password1: '',
      password2: '',
    };
  }
  onTextInputFocus(value) {
    this.setState({ usernameFocus: false, emailFocus: false, password1Focus: false, password2Focus: false });
    this.setState({ [`${value}Focus`]: true });
  }

  doLogin() {
        
  }
  doSignUp() {
 
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
          {/* -----Avatar---- */}
          <View style={[Styles.center, { flex: 5 }]}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={styles.imgAvatar}
                source={this.state.avatarUri === '' ? Images.imgAvatar : { uri: this.state.avatarUri }} />
              <TouchableOpacity
                style={{ position: 'absolute', right: 0, top: 0, backgroundColor: 'transparent' }}
                onPress={() => this.showActionSheetMenu()}>
                <Icon
                  name={'plus-circle'}
                  color={'white'}
                  size={40} />
              </TouchableOpacity>
            </View>
            <Text style={[Fonts.style.h4, { color: Colors.textPrimary }]}>
              {I18n.t('UPLOAD_PHOTO')}
            </Text>
          </View>

          {/* -----Body---- */}
          <View style={styles.bodyContainer}>
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.usernameFocus) }]}>
              <TextInput
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('USERNAME')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ username: text })}
                returnKeyType={'next'}
                onSubmitEditing={() => this.emailInput.focus()}
                onFocus={() => this.onTextInputFocus('username')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.emailFocus) }]}>
              <TextInput
                ref={(c) => { this.emailInput = c; }}
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('EMAIL')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ email: text })}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => this.pwd1Input.focus()}
                onFocus={() => this.onTextInputFocus('email')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.password1Focus) }]}>
              <TextInput
                ref={(c) => { this.pwd1Input = c; }}
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('CREATE_PASSWORD')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                secureTextEntry
                onChangeText={text => this.setState({ password1: text })}
                returnKeyType={'next'}
                onSubmitEditing={() => this.pwd2Input.focus()}
                onFocus={() => this.onTextInputFocus('password1')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.password2Focus) }]}>
              <TextInput
                ref={(c) => { this.pwd2Input = c; }}
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('CONFIRM_PASSWORD')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                secureTextEntry
                onChangeText={text => this.setState({ password2: text })}
                returnKeyType={'go'}
                onSubmitEditing={() => this.doSignUp()}
                onFocus={() => this.onTextInputFocus('password2')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            {CommonWidgets.renderMaterialButton(I18n.t('CREATE_ACCOUNT'),
              Colors.brandSecondary, () => this.doSignUp())}
          </View>
          {/* -----BottomArea---- */}
          <View style={styles.bottomAreaRegister}>
            <Text style={[Fonts.style.bottomText, { color: Colors.textPrimary }]}>
              {I18n.t('BY_CREATING')}
            </Text>
            <MKButton
              backgroundColor={'transparent'}
              onPress={() => alert('TODO: TERMS & POLICY')}>
              <Text style={[Fonts.style.hyperButtonText, { color: Colors.textPrimary, marginLeft: 5 }]}>
                {I18n.t('TERMS_POLICY')}
              </Text>
            </MKButton>
          </View>

          <ActionSheet
            ref={(as) => { this.ActionSheet = as; }}
            options={Constants.IP_BUTTONS}
            cancelButtonIndex={Constants.IP_BUTTONS.length - 1}
            onPress={this.onActionSheetMenu.bind(this)}
            tintColor={Colors.textSecondary} />
          {CommonWidgets.renderCloseButton(() => this.props.navigation.goBack())}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Register.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);