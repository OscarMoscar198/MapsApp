import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, LatLng } from "react-native-maps";

const MapScreen = ({ location }: { location: any }) => {
  const [mapReady, setMapReady] = useState(false);
  const [region, setRegion] = useState({
    latitude: location?.coords?.latitude || 0,
    longitude: location?.coords?.longitude || 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleMapLayout = () => {
    setMapReady(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onLayout={handleMapLayout}
      >
        {mapReady && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
