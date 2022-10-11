import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Image: {
    height: 52,
    width: 52,
    borderRadius: 50,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 18,
  },
  textHello: {
    fontSize: 20,
    color: 'black',
    left: 33,
    fontFamily: 'Montserrat-Italic',
  },
  textGamze: {
    fontSize: 20,
    color: 'black',
    right: 5,
    fontFamily: 'Montserrat-Italic',
  },
  ContainerItem: {
    borderRadius: 2,
    borderWidth: 0.2,
    marginTop: 10,
    marginHorizontal: 7,
    elevation:0.2,
  },
  ImageFlatList: {
    height: 90,
    width: 85,
    borderRadius: 2,
  },
  textFlatList: {
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',


  },
  containerSearch: {
    marginTop: 20,
  },
  Input: {
    height: 35,
    width: 340,
    backgroundColor: '#F1F2F8',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    elevation: 1,
  },
  containerCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 3,
    padding: 3,
  },
  textCategories: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  textAll: {
    color: 'grey',
    shadowColor: 'grey',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',

  },
  imageLambader: {
    height: 220,
    width: 150,
    borderRadius: 15,
  },
  imageArmChair: {
    height: 220,
    width: 150,
    borderRadius: 15,
  },
  ImageData: {
    borderRadius: 30,
    marginTop: 10,
  },
  ImagesDate: {
    borderRadius: 30,
    marginTop: 10,
  },
  ContainerImage: {
    marginHorizontal: 10,
  },
  containerFlatList:{
    marginTop:10,
  }
});

export default styles;
