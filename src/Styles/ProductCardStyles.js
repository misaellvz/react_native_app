import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 220,
    margin: 5,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
  },
  name: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: 'capitalize',
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 10,
    resizeMode: 'contain',
  },
});
