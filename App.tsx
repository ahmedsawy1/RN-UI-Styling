import {SafeAreaView, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {QueryClient, QueryClientProvider} from "react-query"

const App = () => {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <View>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
