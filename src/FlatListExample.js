import React from 'react';
import { View, FlatList } from 'react-native';
import s from './styles';
import data from './data';
import { ListItem, Separator } from './components';

export default class FlatListExample extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <FlatList
          inverted
          data={data.messages}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.messageId}
          renderItem={({ item }) => <ListItem item={item} />}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={<Separator big />}
          ListFooterComponent={<Separator big />}
        />
      </View>
    );
  }
}

FlatListExample.navigationOptions = {
  title: 'Flat list example',
};
