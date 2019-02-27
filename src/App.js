import React from 'react';
import { View, Button } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';
import s from './styles';

function App({ navigation }) {
  function navigateToSection() {
    navigation.navigate('SectionListExample');
  }

  function navigateToFlatList() {
    navigation.navigate('FlatListExample');
  }

  return (
    <View style={s.container}>
      <Button title="SectionList" onPress={navigateToSection} />
      <Button title="FlatList" onPress={navigateToFlatList} />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  App,
  SectionListExample,
  FlatListExample,
});

export default createAppContainer(AppNavigator);
