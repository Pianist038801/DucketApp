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
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { MKButton } from 'react-native-material-kit';
import CT from '@src/constants';
import { replaceRoute } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';
import ActionSheet from '@components/ActionSheet/';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';
import styles from './styles';
import uploadAvatar from '@api/uploadAvatar';
import api from '@api';
import { setSpinnerVisible } from '@actions/globals';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      verifyCode: '',
    };
  }

  componentDidMount()
  { 
    var signupData = this.props.navigation.state.params.userdata;
    api('/user/sendSMS', {email: signupData.email}).then(res=>{
       if(res.success == true)
          this.setState({verifyCode: res.data});
    })
  }

  onTextInputFocus(value) {
    this.setState({ usernameFocus: false, emailFocus: false, password1Focus: false, password2Focus: false });
    this.setState({ [`${value}Focus`]: true });
  }
  
  doLogin() {
    this.props.replaceRoute('home');     
  }

  doSignUp() {
    var signupData = this.props.navigation.state.params.userdata;
    uploadAvatar(signupData.avatarUri)
    .then((url) => {
        // URL of the image uploaded on Firebase storage
        Alert.alert(url);
        console.log(url);
        
      })
      .catch((error) => {
        Alert.alert(error);
        console.log(error);
 
      });/*
     if(this.state.code == this.state.verifyCode){
        this.props.dispatch(setSpinnerVisible(true))
        api('/user/signup', signupData).then(res=>{     
           this.props.dispatch(setSpinnerVisible(false));
           this.props.navigation.dispatch(Utils.getResetAction('main'));
        })
     }
    else{
      Alert.alert('Wrong Code');
    }*/
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
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.password2Focus) }]}>
              <Text style={[Fonts.style.h4, { color: Colors.textPrimary }]}>
                We've sent verification code to your Email
              </Text>
              <TextInput
              autoCapitalize = 'none'
                ref={(c) => { this.pwd2Input = c; }}
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={'Verification Code'}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                secureTextEntry
                onChangeText={text => this.setState({ code: text })}
                returnKeyType={'go'}
                onSubmitEditing={() => this.doSignUp()}
                onFocus={() => this.onTextInputFocus('password2')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            {CommonWidgets.renderMaterialButton('CONFIRM',
              Colors.brandSecondary, () => this.doSignUp())}
          </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);