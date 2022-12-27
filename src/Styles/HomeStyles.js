import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 60,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#198df1',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    paddingTop: 5,
    height: 40,
    width: 90,
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
