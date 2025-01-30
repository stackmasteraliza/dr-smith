import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {height, width} from '../constants/Dimesions';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: width * 0.03,
  },
  welcome: {
    color: Colors.white,
    fontSize: 30,
    width: '40%',
  },
  profileBanner: {
    marginVertical: height * 0.03,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    height: height * 0.27,
    width: height * 0.27,
    objectFit: 'cover',
    elevation: 4,
    borderRadius: height * 0.35,
    borderColor: Colors.white,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 10.5,
  },
  cameraicon: {
    backgroundColor: '#090F1F',
    padding: 8,
    borderRadius: '50%',
    borderWidth: 2,
    borderColor: Colors.white,
    position: 'absolute',
    bottom: height * 0.03,
    right: width * 0.2,
  },
  member: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 17,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  memberinfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  memberinfocon: {
    width: '50%',
  },
  memberinfoText: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 3,
  },
  lgblock: {
    marginTop: height * 0.06,
    width: '100%',
    height: height * 0.2,
    justifyContent: 'center',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  stepbox: {
    paddingHorizontal: width * 0.03,
  },
  infosec: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5,
    paddingBlock: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infotext: {
    color: Colors.white,
    fontSize: 16,
    paddingRight: 5,
  },
  info: {
    borderRightColor: Colors.white,
    borderRightWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
});
