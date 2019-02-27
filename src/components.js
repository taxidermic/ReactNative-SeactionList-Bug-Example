import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

export const SectionHeader = ({ section, containerStyle }) => (
  <View style={[s.sectionContainer, containerStyle]}>
    <Text>{new Date(section.timestamp).toDateString()}</Text>
  </View>
);

export const ListItem = ({ item, ...props }) => {
  return <Message {...item} />;
};

export const Message = (item) => {
  const notFromViewer =
    item.sender === 'a277dd81-8b6a-4cf6-855f-25d1d506b290';
  return (
    <View style={[s.messageContainer, notFromViewer && s.left]}>
      <View style={s.center}>
        <View style={[s.row, s.center]}>
          <View>
            <View
              style={[s.wrapper, notFromViewer && s.lightBackground]}
            >
              <Text style={[s.text, notFromViewer && s.blackText]}>
                {item.text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const Separator = ({ big }) => (
  <View style={[s.separatorContainer, big && s.separatorBig]} />
);

export const ItemSeparator = () => (
  <View style={[s.itemSeparatorContainer]} />
);
