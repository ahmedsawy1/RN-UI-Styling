import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {QueryClient, QueryClientProvider} from "react-query"
import BooksScreen from './src/screens/BooksScreen';

const App = () => {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <View>
          <BooksScreen />
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
