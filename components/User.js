import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = ({item}) => {
    return <View style={[styles.userBox, styles.margins, styles.sizes]}>
        <Text stale={[styles.userBox]}>{item.name}</Text>
    </View>
};
export default User;
 let styles = StyleSheet.create({
     userBox:{
         flex: 1,
         backgroundColor: 'green',
         textAlign:'center',
     },
     margins: {
         marginBottom: 3,
         marginLeft: 19,
         marginTop: 4
     },
     sizes: {
         width: '90%',
         height: 300,
     },
 });