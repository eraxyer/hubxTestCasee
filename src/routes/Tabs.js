import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                tabBarButton: (props) => <TouchableOpacity {...props} />,
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>


        </Tab.Navigator>
    );
};

export default Tabs;
