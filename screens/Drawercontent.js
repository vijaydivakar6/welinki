import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export function DrawerContent(props) {
    const signOut = () => {
        console.log(props);
        try {
            AsyncStorage.removeItem('token',() => props.navigation.navigate('Login'));

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Joined :</Paragraph>
                                <Caption style={styles.caption}>01/02/2021</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="nature-people"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Profile"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="google-my-business"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Bussiness"
                            onPress={() => { props.navigation.navigate('Allcategories') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Memebership"
                            onPress={() => { props.navigation.navigate('Mymembership') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Contacts"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Change Password"
                            onPress={() => { props.navigation.navigate('Changepassword') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Logout"
                    onPress={signOut}
                />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});