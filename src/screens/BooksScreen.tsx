import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
import useGetBooks from '../hooks/useGetBooks';
  
  const BooksScreen = () => {
    const {data, isLoading} = useGetBooks();
  
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
      </View>
    );
  
    return (
      <View style={{paddingHorizontal: 20, height: '100%'}}>
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
  
  