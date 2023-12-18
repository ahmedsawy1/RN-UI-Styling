import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetPosts from '../hooks/useGetPosts'

const HomeScreen = () => {
  const {data, isLoading, refetch } = useGetPosts()

  console.log('===============data=====================');
  console.log(JSON.stringify(data, null ,3));
  console.log('====================================');

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})