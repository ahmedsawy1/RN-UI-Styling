import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useGetPostsData from '../hooks/useGetPostsData';

const HomeScreen = () => {
  const {data, isLoading} = useGetPostsData();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
