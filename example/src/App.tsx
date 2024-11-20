import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { isJailbroken } from 'react-native-jailbreak-detection';

export default function App() {
  // State to hold the jailbreak status: true, false, or null (loading)
  const [jailbroken, setJailbroken] = useState<boolean | null>(null);

  // State to handle any errors during detection
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Invoke the jailbreak detection
    isJailbroken()
      .then((result) => {
        setJailbroken(result);
      })
      .catch((err) => {
        console.error('Error detecting jailbreak status:', err);
        setError('Failed to detect jailbreak status.');
      });
  }, []);

  // Determine what to display based on the current state
  let displayText = 'Checking jailbreak status...';
  if (error) {
    displayText = error;
  } else if (jailbroken !== null) {
    displayText = `Jailbroken: ${jailbroken}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0', // Optional: Add a background color for better visibility
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
