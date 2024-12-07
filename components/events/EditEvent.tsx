import { View, Text, StyleSheet, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';

export interface EditEventProps {
  handleClose: () => void,
  isOpen: boolean
}

export default function EditEvent(props: EditEventProps) {
  const { handleClose, isOpen } = props;
  const [title, setTitle] = useState('Add Event');
  const onNameChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTitle(e.nativeEvent.text ? e.nativeEvent.text : 'Add Event');
  }// TODO: make the selection color dynamic from the user pallette, change button colors to match, make cancel gray, maybe change the text?

  return (
    <Modal
      isVisible={isOpen}
      style={styles.modal}
    >
      <View style={styles.centeredView}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buffer}></View>
        <TextInput onChange={onNameChange} style={styles.textInput} autoFocus selectionColor={'blue'} placeholder='Add Event' maxLength={100} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.green]}>
            <Text style={styles.buttonText}>Ok</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.red]} onPress={handleClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 200,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal: {
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center'
  },
  buffer: {
    height: 18
  },
  textInput: {
    outlineStyle: 'none'
  } as TextInputProps,
  button: {
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  green: {
    backgroundColor: '#74b83d'
  },
  red: {
    backgroundColor: '#eb3023'
  },
  buttonText: {
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  }
});