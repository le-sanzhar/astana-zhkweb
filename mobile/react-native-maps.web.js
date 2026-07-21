import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MapView = (props) => {
  return (
    <View style={[props.style, styles.webMapPlaceholder]}>
      <Text style={styles.webMapText}>🗺️ Карта (доступна в мобильном приложении)</Text>
      {props.children}
    </View>
  );
};

const Marker = (props) => {
  return <View style={styles.markerMock}>{props.children}</View>;
};

const Callout = (props) => {
  return <View style={styles.calloutMock}>{props.children}</View>;
};

const PROVIDER_DEFAULT = 'default';

const styles = StyleSheet.create({
  webMapPlaceholder: {
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webMapText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  markerMock: {
    position: 'absolute',
  },
  calloutMock: {
    display: 'none',
  },
});

export { MapView as default, Marker, Callout, PROVIDER_DEFAULT };
