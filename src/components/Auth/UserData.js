import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useAuth from "../../hooks/useAuth";
import { styles } from "../../Styles/userDataStyles";

import ItemMenu from "./ItemMenu";

const UserData = () => {
  const navigation = useNavigation();
  const { auth, logout } = useAuth();
  const Logout = () => {
    logout();
    navigation.navigate('Login');
  }

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.userName} />
        <ItemMenu title="Email" text={auth.email} />
      </View>

      <TouchableOpacity style={styles.button} onPress={Logout}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
export default UserData;
