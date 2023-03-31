import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const CommentInput = (props) => {
  const [enteredComment, setEnteredComment] = useState('');

  const commentInputHandler = (enteredText) => {
    setEnteredComment(enteredText);
  };

  const addCommentHandler = () => {
    props.onAddComment(enteredComment);
    setEnteredComment('');
  };

  return (
    <ScrollView style={styles.inputContainer}>
      <Text style={styles.insert}>Insert your blog for today: </Text>
      <TextInput
        placeholder="Tell others what you did today"
        style={styles.textInput}
        onChangeText={commentInputHandler}
        value={enteredComment}
      />

      <View>
        <TouchableOpacity
          title="Publish"
          onPress={addCommentHandler}
          style={styles.button}>
          <Text style={styles.txtBtn}>Publish</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    //alignItems: 'center',
    backgroundColor: '#c7d7bf',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInput: {
    margin: 10,
    width: '80%',
    height: 130,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#749d62',
    padding: 10,
    borderRadius: 20,
    width: 80,
    alignSelf: 'center',
    alignItems: 'center',
  },
  insert: {
    fontSize: 18,
    fontWeight: 300,
    marginLeft: 10,
  },
  txtBtn: {
    fontWeight: 'bold',
    color: '#fbfcfb',
  },
});
export default CommentInput;
