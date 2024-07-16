import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { db, collection, addDoc, serverTimestamp } from "./src/firebase/firebaseConfig";
import MapScreen from "./src/ui/screen/MapsScreen";

const App = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      if (location) {
        saveLocation(location);
      }
    })();
  }, []);

  const saveLocation = async (location: Location.LocationObject) => {
    try {
      await addDoc(collection(db, "locations"), {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving location: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapScreen location={location} />
      ) : (
        <Text>{errorMsg || "Waiting.."}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
