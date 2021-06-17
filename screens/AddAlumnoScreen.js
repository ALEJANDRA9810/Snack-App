// screens/AddAlumnoScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../components/firebase';
import AlumnoScreen from './AlumnoScreen';

class AddAlumnoScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Alumno');
    this.state = {
      nombre: '',
      matricula: '',
      carrera: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.nombre === '' || this.state.matricula === '' || this.state.carrera === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        nombre: this.state.nombre,
        matricula: this.state.matricula,
        carrera: this.state.carrera,
      }).then((res) => {
        this.setState({
          nombre: '',
          matricula: '',
          carrera: '',
          isLoading: false,
        });
        this.props.navigation.navigate('AlumnoScreen')
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
              placeholder={'Matricula'}
              value={this.state.matricula}
              onChangeText={(val) => this.inputValueUpdate(val, 'matricula')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Carrera'}
              value={this.state.carrera}
              onChangeText={(val) => this.inputValueUpdate(val, 'carrera')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Alumno'
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

export default AddAlumnoScreen;