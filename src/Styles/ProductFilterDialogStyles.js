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
    borderColor: 'grey'
  },
  slider: {
    marginBottom: 20,
    marginTop: 20,
  }
});
