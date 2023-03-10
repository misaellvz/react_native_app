import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 0.3,
    flex: 1,
    borderRadius: 10,
  },
  title: {
    color: "#393b39",
    fontWeight: "bold",
    fontSize: 22,
    paddingTop: 25,
    textTransform: 'capitalize',
  },
  category: {
    marginTop: 20,
    color: "#393b39",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 8,
    borderRadius: 10,
    width: '60%',
    height: 40,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  description: {
    color: "grey",
    fontWeight: "600",
    fontSize: 15,
    paddingTop: 10,
    maxHeight: 120,
    textTransform: 'capitalize',
  },
  priceContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    color: "#3D5656",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 10,
    backgroundColor: '#B6E2A1',
    borderRadius: 10,
    width: 70,
    height: 40,
    textAlign: 'center'
  },
  rate: {
    color: "#FF7000",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 10,
    backgroundColor: '#FFE15D',
    borderRadius: 10,
    width: 70,
    height: 40,
    textAlign: 'center'
  },
  image: {
    width: 260,
    height: 260,
    marginTop: 10,
    resizeMode: 'contain',
  },
});
