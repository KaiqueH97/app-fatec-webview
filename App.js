import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* O WebView carrega a URL passada no "uri" */}
      <WebView 
        source={{ uri: 'https://fatecferraz.edu.br/' }} 
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // O marginTop afasta o site do topo da tela para não ficar por baixo 
    // da barra de bateria/sinal do celular (status bar)
    marginTop: 40, 
  },
  webview: {
    flex: 1,
  }
});