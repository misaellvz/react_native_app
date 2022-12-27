import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 24,
    color: '#5a5a5a',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    color: '#2e527c',
    width: 125,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 18,
    color: '#2e527c',
    width: '100%',
    fontWeight: 'bold'
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  switcherContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    marginBottom: 10
  },
  switcher: {
    height: 40,
  },
  slider: {
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#198df1',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    paddingTop: 5,
    height: 40,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
