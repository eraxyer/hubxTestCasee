import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {heightPercentageToDP as hp, widthPercentageToDP as wp,} from "react-native-responsive-screen";
import Home from "../assets/icons/home.svg";
import Diagnose from "../assets/icons/diagnose.svg";
import Qr from "../assets/icons/qr.svg";
import MyGarden from "../assets/icons/mygarden.svg";
import Profile from "../assets/icons/profile.svg";

export default function TabBar({ navigation, state }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.tabItem}
        >
          <Home
            width={hp("3%")}
            height={hp("3%")}
          />
          <Text
            style={[styles.tabText, {color : '#28AF6E'}]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.tabItem}
        >
          <Diagnose
            width={hp("3%")}
            height={hp("3%")}
          />
          <Text
            style={
              styles.tabText}
          >
            Diagnose
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.qr}>
            <Qr width={wp("8%")} height={wp("8%")}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.tabItem}
        >
          <MyGarden
            width={hp("3%")}
            height={hp("3%")}
          />
          <Text
            style={
              styles.tabText}
          >
            My Garden
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.tabItem}
        >
          <Profile
            width={hp("3%")}
            height={hp("3%")}
          />
          <Text
            style={
              styles.tabText}
          >
            Profile
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const styles = {
  container: {
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tabView: {
    width: wp("100%"),
    height: hp("9%"),
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: hp("3%"),
    shadowColor: "rgba(69, 69, 69, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    borderTopWidth : 4,
    borderTopColor : 'rgba(255, 255, 255, 0.24)'
  },
  tabItem: {
    width: wp("20%"),
    marginTop : hp("0.5%"),
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabText: {
    fontFamily: "Lato-Medium",
    fontSize: hp("1.4%"),
    marginTop: hp("0.5%"),
    color: "#979798",
  },
  qr : {
    width: wp("18%"),
    height: wp("18%"),
    borderRadius : wp("18%"),
    borderWidth : 4,
    borderColor : 'rgba(255, 255, 255, 0.24)',
    marginTop : -hp("3.5%"),
    backgroundColor : '#28AF6E',
    alignItems : 'center',
    justifyContent : 'center'
  }

};
