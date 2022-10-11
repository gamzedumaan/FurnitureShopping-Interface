import {
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

function Home() {
  function InputHandler(enterText) {
    console.log(enterText);
  }
  const furnitureData = [
    {
      id: '1',
      text: 'Every style',
      img: require('../../../../image/furniture.jpg'),
    },
    {
      id: '1',
      text: 'Essentials for',
      img: require('../../../../image/furniture.jpg'),
    },
    {
      id: '1',
      text: 'Essentials style',
      img: require('../../../../image/furniture.jpg'),
    },
    {
      id: '1',
      text: 'style',
      img: require('../../../../image/furniture.jpg'),
    },
    {
      id: '1',
      text: 'style',
      img: require('../../../../image/furniture.jpg'),
    },
  ];
  const ImageData = [
    {
      id: '1',
      image: require('./../../../../image/lambader.jpg'),
      images: require('./../../../../image/greyArmchair.jpg'),
    },
    {
      id: '2',
      image: require('../../../../image/greyArmchair.jpg'),
      images: require('./../../../../image/lambader.jpg'),
    },
    {
      id: '3',
      image: require('../../../../image/greyArmchair.jpg'),
      images: require('./../../../../image/lambader.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          style={styles.Image}
          source={require('./../../../../image/image.jpg')}
        />
        <Text style={styles.textHello}>Hello, </Text>
        <Text style={styles.textGamze}> gamze </Text>

        <Icon name="notifications-circle-sharp" size={36} color="grey" />
      </View>
      <View style={styles.containerFlatList}>
        <FlatList
          data={furnitureData}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.ContainerItem}>
                <Image style={styles.ImageFlatList} source={item.img} />
                <Text style={styles.textFlatList}>{item.text}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.Input}
          placeholder="Search"
          onChangeText={InputHandler}
        />
        {/* <Icon2 style={{ma}name="search" size={17} color="black"/> */}
      </View>
      <View style={styles.containerCategories}>
        <Text style={styles.textCategories}>Categories</Text>
        <Text style={styles.textAll}>See all</Text>
      </View>
      <View>
        <FlatList
          data={ImageData}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.ContainerImage}>
                <Image style={styles.ImageData} source={item.image} />
                <Image style={styles.ImagesDate} source={item.images}/>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

export default Home;
