// screens/AddMaestroScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../components/firebase';
import MaestroScreen from './MaestroScreen';

class AddMaestroScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Maestro');
    this.state = {
      nombre: '',
      aula: '',
      asignatura: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.nombre === '' || this.state.aula === '' || this.state.asignatura === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        nombre: this.state.nombre,
        aula: this.state.aula,
        asignatura: this.state.asignatura,
      }).then((res) => {
        this.setState({
          nombre: '',
          aula: '',
          asignatura: '',
          isLoading: false,
        });
        this.props.navigation.navigate('MaestroScreen')
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
              placeholder={'Nombre Completo'}
              value={this.state.nombre}
              onChangeText={(val) => this.inputValueUpdate(val, 'nombre')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Aula'}
              value={this.state.aula}
              onChangeText={(val) => this.inputValueUpdate(val, 'aula')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Asignatura'}
              value={this.state.asignatura}
              onChangeText={(val) => this.inputValueUpdate(val, 'asignatura')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Maestro'
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

export default AddMaestroScreen;