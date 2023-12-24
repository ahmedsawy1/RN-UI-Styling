import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import useGetPosts from '../hooks/useGetPosts';

const HomeScreen = () => {
  const {data, isLoading, refetch, hasNextPage, fetchNextPage} = useGetPosts();
  const dataArr = data?.pages?.map(page => page).flat(); // [1,2,3,[5,6]] => [1,2,3,5,6]

  const onReachEnd = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

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

      <Text>{item?.title}</Text>
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
          data={dataArr}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={onReachEnd}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
