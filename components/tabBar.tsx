import React from "react"
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

    const icons: any = {
        index: (props: any) => <AntDesign name="home" size={26} color={greyColor} {...props}/>,
        profile: (props: any) => <AntDesign name="user" size={26} color={greyColor} {...props}/>,
        task: (props: any) => <AntDesign name="plus" size={26} color={greyColor} {...props}/>,
        menu: (props: any) => <AntDesign name="menufold" size={26} color={greyColor} {...props}/>
    }

    const primaryColor = '#0891b2'
    const greyColor = '#737373'

    return (
        <View style={styles.tabbar}>
          {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;
            
            if(['_sitemap', '+not-found'].includes(route.name)) return null
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
                style={styles.tabbaritem}
                key={route.name}
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                {
                    icons[route.name]({
                        color: isFocused ? primaryColor : greyColor
                    })
                }
                <Text style={{ 
                    color: isFocused ? primaryColor : greyColor,
                    fontSize: 11 
                }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,  
        elevation: 5
    },
    tabbaritem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
})

export default TabBar