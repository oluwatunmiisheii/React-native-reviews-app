import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Card from './../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from './../styles/global';
import ReviewForms from './reviewForms';

const initalReviews = [
  { title: 'Zelda, Breath of Fresh Air', rating: 3, body: 'lorem ipsum', id: 1 },
  { title: 'Gotta Catch Them All (again)', rating: 1, body: 'lorem ipsum', id: 2 },
  { title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum', id: 3 },
]

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState(initalReviews)
  const [modalOpen, setModalOpen] = useState(false)
  const addReview = (review) => {
    review.id = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal
        visible={modalOpen}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={styles.icon}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() => setModalOpen(false)}
              />
              <ReviewForms addReview={addReview} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Card>
                <Text style={globalStyles.titleText}> {item.title} </Text>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    backgroundColor: '#753ff6',
    color: '#fff',
    padding: 15,
    borderRadius: 100,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: 'transparent',
    color: '#333'
  },
  modalContent: {
    flex: 1
  }
})