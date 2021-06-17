// screens/AddEscuelaScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../components/firebase';
import EscuelaScreen from './EscuelaScreen';

class AddEscuelaScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Escuela');
    this.state = {
      nombre: '',
      calle: '',
      colonia: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.nombre === '' || this.state.calle === '' || this.state.colonia === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        nombre: this.state.nombre,
        calle: this.state.calle,
        colonia: this.state.colonia,
      }).then((res) => {
        this.setState({
          nombre: '',
          calle: '',
          colonia: '',
          isLoading: false,
        });
        this.props.navigation.navigate('EscuelaScreen')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Nombre Escuela'}
              value={this.state.nombre}
              onChangeText={(val) => this.inputValueUpdate(val, 'nombre')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Calle'}
              value={this.state.calle}
              onChangeText={(val) => this.inputValueUpdate(val, 'calle')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Colonia'}
              value={this.state.colonia}
              onChangeText={(val) => this.inputValueUpdate(val, 'colonia')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Escuela'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddEscuelaScreen;