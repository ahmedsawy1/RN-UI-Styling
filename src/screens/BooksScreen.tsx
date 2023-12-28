import {ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import useGetBooks from '../hooks/useGetBooks';
import useAddBook from '../hooks/usePostBook';
import useDeleteBook from '../hooks/useDeleteBook';

const BooksScreen = () => {
  const {data, isLoading} = useGetBooks();
  const {mutate} = useAddBook()
  const {mutate: deleteBook} = useDeleteBook() 

  const [inputValues, setInputValues] = useState({
    name_of_book: "",
    author:"",
    price: ""
  })

  const onAddBookFN = async() => {
    await mutate({
        name_of_book: inputValues.name_of_book,
        author: inputValues.author,
        price: inputValues.price
    })
  }

  const keyExtractor = (_, index: number) => index.toString();

  const renderItem = ({item}) => (
    <View
      style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: 'grey',
      }}>
      <Text>{item?.id}</Text>
      <Text>{item?.name_of_book}</Text>
      <Text>author: {item?.author}</Text>
      <Text>{item?.price} $ </Text>
      <Button title='delete' onPress={() => {
        deleteBook(item.id)
      }}/>
    </View>
  );



  return (
    <View style={{paddingHorizontal: 20, height: '100%'}}>
        <Button title='Add New Book From Inputs'
        onPress={onAddBookFN}
        />
        <TextInput 
            placeholder='Name of Book'
            value={inputValues.name_of_book}
            onChangeText={txt => setInputValues(s => ({...s, name_of_book: txt}))}
            style={styles.input}
        />
        <TextInput 
            placeholder='Author Name'
            value={inputValues.author}
            onChangeText={txt => setInputValues(s => ({...s, author: txt}))}
            style={styles.input}
        />
        <TextInput 
            placeholder='Book Price'
            value={inputValues.price}
            onChangeText={txt => setInputValues(s => ({...s, price: txt}))}
            style={styles.input}
        />
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
    input:{
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      borderColor: "grey",
      marginBottom: 10
    }
})
