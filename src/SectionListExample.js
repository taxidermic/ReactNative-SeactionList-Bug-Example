import React from 'react';
import { View, SectionList } from 'react-native';
import s from './styles';
import data from './data';
import { SectionHeader, ListItem, Separator } from './components';

export default class SectionListExample extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <SectionList
          inverted
          invertStickyHeaders
          stickySectionHeadersEnabled
          sections={data.sections}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.messageId}
          renderSectionHeader={(sectionProps) => (
            <SectionHeader {...sectionProps} />
          )}
          renderItem={({ item }) => <ListItem item={item} />}
          SectionSeparatorComponent={Separator}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={<Separator big />}
          ListFooterComponent={<Separator big />}
        />
      </View>
    );
  }
}

SectionListExample.navigationOptions = {
  title: 'Section list example',
};
