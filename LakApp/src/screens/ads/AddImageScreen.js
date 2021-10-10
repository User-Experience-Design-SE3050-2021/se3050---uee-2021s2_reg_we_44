import * as React from 'react';
import { View, Text,Alert, TouchableOpacity, Image, Animated, Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Header, Button, Icon, CheckBox } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

var primaryColor = '#7D86F5'

function AdsImageScreen({ navigation }) {
    const [imageKey, setImageKey] = React.useState(0);
    const [isSelected, setSelection] = React.useState(false);
    const [imageGallery, setImageUrlGallery] = React.useState([
        'https://broarmy.net/gallery/images/gallerySmallPlaceholder.png',
        'https://broarmy.net/gallery/images/gallerySmallPlaceholder.png',
        'https://broarmy.net/gallery/images/gallerySmallPlaceholder.png',
        'https://broarmy.net/gallery/images/gallerySmallPlaceholder.png',
        'https://broarmy.net/gallery/images/gallerySmallPlaceholder.png']);

    const openGallery = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        };

        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');

            } else if (response.errorCode) {
                console.log('Image picker Error');

            } else if (response.errorMessage) {
                console.log('Image picker Error Message');
            } else {
                console.log('Image picker assets = ' + response.assets[0].uri);
                var tempArr = imageGallery;
                tempArr[imageKey] = response.assets[0].uri;
                setImageKey(imageKey + 1);
                console.log('Image picker array = ' + tempArr.toString());

                setImageUrlGallery(() => {
                    return [...tempArr]
                })
                // setImageUrlGallery(response.assets[0].uri)
            }
        })
    }

    return (
        <View>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Post an Ad ', style: { color: '#fff', fontSize: 22 } }}
            />
            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20, width: '100%' }}>
                <Text style={{ fontWeight: 'bold', color: '#8C8B8B', fontSize: 17 }}>Add Photos [up to 5]</Text>
                <Text style={{ color: 'grey', fontSize: 12, marginBottom: 10 }}>Upload Pictures up to 5</Text>
                <View style={{
                    flexDirection: "row",
                    marginBottom: -20,
                    alignItems: 'stretch'
                    , alignItems: 'center', justifyContent: 'center', padding: 10,
                }}>

                </View>
                <FlatGrid
                    style={{ width: '100%' }}
                    itemDimension={100}
                    extraData={imageGallery}
                    data={imageGallery}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item, width: 100 }}
                            style={{
                                alignItems: 'center',
                                height: 100,
                                width: 100,
                                borderRadius: 5,
                                shadowColor: '#000',
                                shadowOpacity: 0.06,
                                shadowOffset: {
                                    width: 10,
                                    height: 10
                                },
                                borderWidth: 5,
                                padding: 10
                            }} />
                    )}
                />
                <Text style={{ color: 'grey', fontSize: 14, marginBottom: 10 }}>Note: The first image will be the cover photo of your ad</Text>

                <Button style={{ marginTop: 10, width: '100%', }}
                    onPress={() => {
                        if (imageKey < 5) {
                            openGallery();
                        } else {
                            alert("Maximum allowed is 5 images");
                        }

                    }}
                    backgroundColor={primaryColor}
                    icon={
                        <Icon
                            name="add"
                            size={15}
                            color='white'

                        />
                    }
                    title="  Add Images "
                />
                <View style={{flexDirection:'row',justifyContent:"flex-start", marginTop: 40,marginLeft:-16 }}>
                    <CheckBox checked={isSelected} onPress={() => setSelection(!isSelected)} />
                    <Text style={{ color: 'grey', fontSize: 14, marginTop: 16, marginLeft:-14}}>I agree to the Lak.lk Terms of Services</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => { Alert.alert(
      "Posted Successfully",
      "Your ad has been posted successfully.",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );}}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: 5 }}>Post Ad</Text>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        backgroundColor: '#7D86F5',
        textAlign: "center",
        height: 40,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center"
    },
    hr: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        height: 1,
        backgroundColor: "#8C8B8B",
        marginLeft: 28,
        borderWidth: 1
    }
});

export default AdsImageScreen;