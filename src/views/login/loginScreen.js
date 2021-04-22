import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './loginScreen.style';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  actionLogin(input) {
    if (input === '') {
      alert('Masukan Nama terlebih dahulu');
    } else {
      this.props.navigation.navigate('LandingScreen', {nameLogin: input});
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.headerTitle}>
            <Text style={styles.sectionTitle}>Login Books History</Text>
          </View>
          <View style={styles.headerInput}>
            <TextInput
              style={styles.containerInput}
              underlineColorAndroid="#000000"
              placeholder={'Masukan Nama Anda'}
              onChangeText={(text) => this.setState({input: text})}
            />
            <Button title="Login" buttonStyle={styles.button}  onPress={() => this.actionLogin(this.state.input)} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
