import React from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Analytics from "expo-firebase-analytics";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={async () => {
          try {
            await Analytics.logEvent("button_press");
            alert("Logged to Firebase!");
          } catch (e) {
            alert(e.message);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
