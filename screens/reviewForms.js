import React from 'react';
import { Button, View, TextInput, Text } from 'react-native';
import { globalStyles } from './../styles/global';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FlatButton from '../shared/FlatButton';


const ReviewSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Title is a required field'),
  body: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Body is a required field'),
  rating: Yup.string()
    .required('Rating is a required field')
    .test('is-num-1-5', 'rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0
    })
});

export default ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: ''
        }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          addReview(values)
          actions.resetForm()
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
          <View>
            {/* review title field */}
            <View style={globalStyles.inputWrapper}>
              <TextInput
                style={globalStyles.input}
                placeholder='Review title'
                onChangeText={handleChange('title')}
                value={values.title}
                onBlur={handleBlur('title')}
              />
              <Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>
            </View>

            {/* review body field */}
            <View style={globalStyles.inputWrapper}>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder='Review title'
                onChangeText={handleChange('body')}
                value={values.body}
                onBlur={handleBlur('body')}
              />
              <Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>
            </View>

            {/* review rating field */}
            <View style={globalStyles.inputWrapper}>
              <TextInput
                style={globalStyles.input}
                placeholder='Rating (1-5)'
                keyboardType="numeric"
                onChangeText={handleChange('rating')}
                value={values.rating}
                onBlur={handleBlur('rating')}
              />
              <Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>
            </View>
            <FlatButton text='Submit' onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}