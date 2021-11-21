import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../Contants';

const Map: React.FC = () => {
  return <View style={styles.container}>
    <MapView style={styles.map}
      region={{
        latitude: -24.046,
        longitude: -52.3838,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: -24.046,
          longitude: -52.3838,
        }}
      >
        <View style={{ padding: 10, height: 100, width: 100 }}>
          <Image source={require('../../assets/marker.png')} style={{
            height: 50,
            width: 50,
          }} />
        </View>
      </Marker>
    </MapView>
  </View >
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


export default Map;