import * as React from 'react';
import { Button, View, Text, StyleSheet , Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, icons, images } from '../constants';
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
      <List.Section style={styles.listSecLeft} >
        <List.Accordion
          title={<View><Text style={styles.listTitleLeftMain}>Faqs</Text></View>}
          size={15}
          left={props => <List.Icon {...props} icon="google-classroom" size={20} color="#16d09b"  />}>
          <List.Item  style={styles.listSecitemLeft} left={props => <List.Icon {...props} icon="link-variant" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitleLeft}>User links </Text></View>}   onPress={() => { props.navigation.navigate('Editprofile') }} />
          <List.Item style={styles.listSecitemLeft} left={props => <List.Icon {...props} icon="contacts" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitleLeft}>User Contacts</Text></View>}  onPress={() => { props.navigation.navigate('Editprofile') }} />
          <List.Item  style={styles.listSecitemLeft}left={props => <List.Icon {...props} icon="briefcase" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitleLeft}>Vendor General</Text></View>}  onPress={() => { props.navigation.navigate('Editprofile') }} />
          <List.Item  style={styles.listSecitemLeft} left={props => <List.Icon {...props} icon="file-link-outline" size={20} color="#16d09b"  />} title={<View><Text style={styles.listTitleLeft}>Refer & Earn</Text></View>}  onPress={() => { props.navigation.navigate('Editprofile') }}/>
        </List.Accordion>
      </List.Section>
    );
  };


export function DrawerContentLeft(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image source={images.welinkilogo2} />
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem
                            icon={({  size }) => (
                                <Icon
                                    name="home"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        />
                        <DrawerItem
                            icon={({  size }) => (
                                <Icon
                                    name="link"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="All Categories"
                            onPress={() => { props.navigation.navigate('Allcategories') }}
                        />
                        <DrawerItem
                            icon={({  size }) => (
                                <Icon
                                    name="user-plus"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="All Business"
                            onPress={() => { props.navigation.navigate('Mymembership') }}
                        />
                        {/* <DrawerItem
                            icon={({  size }) => (
                                <Icon
                                    name="address-card-o"
                                    color='#16d09b'
                                    size={size}
                                />
                            )}
                            label="Faqs"
                            onPress={() => { props.navigation.navigate('Editprofile') }}
                        /> */}
                         <ListDropMenu {...props}/>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    listSecLeft:{
        marginLeft:-8,
        marginTop:-8,
        marginBottom:-8
       },
       listTitleLeftMain:{
        color:'gray',
    },
       listTitleLeft:{
           color:'gray',
       },
       listSecitemLeft:{
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