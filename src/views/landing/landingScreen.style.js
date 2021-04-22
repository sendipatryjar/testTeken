import { StyleSheet } from 'react-native';

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
    iconSize: {
        width: 40,
        height: 40,
    },
    imageSize: {
        width: 150,
        height: 80,
        resizeMode: 'contain',
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
    container: { 
      flex: 1, 
      backgroundColor: '#f1f1f1' 
    },
    headerTitle: { 
      alignItems: 'center', 
      marginTop: 20, 
      marginBottom: 20 
    },
    containerTabHeader: { 
      flexDirection: 'row', 
      marginBottom: 20, 
      paddingBottom: 20, 
      paddingTop: 20, 
      marginTop: 10,
      backgroundColor: '#ffffff' 
    },
    footerHeader: { 
      backgroundColor: '#ffd500', 
      height: 5, 
      width: 100 
    },
    cardList: { 
      alignItems: 'center', 
      backgroundColor: '#ffffff', 
      marginRight: 5, 
      marginLeft: 5, 
      marginBottom: 10, 
      borderRadius: 10 
    },
    button: { 
      backgroundColor: '#27AE60', 
      borderRadius: 10, 
      width: 150, 
      height: 30, 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginBottom: 10, 
      marginTop: 10 
    },
    buttonEdit: { 
      backgroundColor: '#EB5757', 
      borderRadius: 10, 
      width: 150, 
      height: 30, 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginBottom: 10, 
      marginTop: 10 
    },
    bottomModal: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  });
  export default styles;