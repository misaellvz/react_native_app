import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
    fontSize: 22,
    fontWeight: 'bold'
  },
  error: { textAlign: 'center', color: '#f00', marginTop: 20 },
});
