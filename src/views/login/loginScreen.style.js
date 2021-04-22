import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  headerInput: {
    alignItems: 'center',
    flex: 0,
    marginTop: 80
  },
  containerInput: {
    marginLeft: 20,
    marginRight: 20
  },
  button: { 
    backgroundColor: '#27AE60',
    borderRadius: 15,
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10 
  },
  titleButton: { 
    color: '#ffffff', 
    fontWeight: 'bold' 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center', 
    flex: 1
  }

});
export default styles;