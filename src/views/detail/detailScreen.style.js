import { StyleSheet } from 'react-native';
import { floor } from 'react-native-reanimated';

const styles = StyleSheet.create({
    scrollView: {
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    sectionDesc: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10

    },
    iconSize: {
        width: 40,
        height: 40,
    },
    imageSize: {
        width: 100,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 20
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    headerTitle: { 
      alignItems: 'center',
      marginTop: 20, 
      marginBottom: 20,
      flex: 1
    }
  });
  export default styles;