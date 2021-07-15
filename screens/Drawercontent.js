import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
    List
} from 'react-native-paper';

const ListDropMenu = (props) => {
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
  
    return (
      <List.Section style={styles.listSec} >
        <List.Accordion
          title={<View><Text style={styles.listTitle}>My Ads/Info</Text></View>}
          size={15}
          left={props => <List.Icon {...props} icon="google-classroom" size={20} color="#16d09b"  />}>
          <List.Item  style={styles.listSecitem} left={props => <List.Icon {...props} icon="image" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitle}>Image Ad’s</Text></View>}   onPress={() => { props.navigation.navigate('Editprofile') }} />
          <List.Item style={styles.listSecitem} left={props => <List.Icon {...props} icon="youtube" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitle}>Youtube Ad’s</Text></View>} onPress={() => { props.navigation.navigate('Editprofile') }} />
          <List.Item  style={styles.listSecitem}left={props => <List.Icon {...props} icon="video" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitle}>Video Ad’s</Text></View>} onPress={() => { props.navigation.navigate('Editprofile') }} />
          <List.Item  style={styles.listSecitem} left={props => <List.Icon {...props} icon="google-classroom" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitle}>View all Ad’s</Text></View>}  onPress={() => { props.navigation.navigate('Editprofile') }}/>
        </List.Accordion>
      </List.Section>
    );
  };

export function DrawerContent(props) {

    
    const signOut = () => {
        console.log(props);
        try {
            AsyncStorage.removeItem('token', () => props.navigation.navigate('Login'));

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>Joined :</Paragraph>
                                    <Caption style={styles.caption}>01/02/2021</Caption>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="user-circle-o"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="My Profile"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="link"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="My Bussiness"
                            onPress={() => { props.navigation.navigate('Allcategories') }}
                        />
                        <DrawerItem
                            icon={({size}) => (
                                <Icon
                                    name="user-plus"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="Memebership"
                            onPress={() => { props.navigation.navigate('Mymembership') }}
                        />
                        {/* <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="file-picture-o"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="My Ads Info"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        /> */}
                        <ListDropMenu {...props}/>
                         {/* <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="file-picture-o"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="My Ads Info"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        /> */}
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="unlock-alt"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="Change Password"  color='#16d09b'
                            onPress={() => { props.navigation.navigate('Changepassword') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ size }) => (
                        <Icon
                            name="sign-out"
                            color='#16d09b'
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
    listSec:{
     padding:0,
     marginLeft:-8,
     marginTop:-8,
     marginBottom:-8
    },
    listTitle:{
        color:'gray',
    },
    listSecitem:{
      marginLeft:50,
      marginTop:-5,
     marginBottom:-5
    },
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
        color: '#17297C'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: '#17297C'
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
    label:{
        color:'red'
    }
});