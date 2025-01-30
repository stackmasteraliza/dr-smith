import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Theme from '../components/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/colors';
import {styles} from '../styles/HomeScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../constants/Dimesions';
import StepSlider from '../components/Slider';

const HomeScreen = () => {
  return (
    <Theme.Background>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.welcome}>
            Welcome, <Text style={{fontWeight: '700'}}>Mr. Smith.</Text>
          </Text>
          <TouchableOpacity>
            <Icon name="settings-outline" size={35} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileBanner}>
          <Image
            style={styles.profilePic}
            source={require('../assets/smith.jpeg')}
          />
          <View style={styles.cameraicon}>
            <Icon name="camera-outline" size={25} color={Colors.white} />
          </View>
        </View>
        <View style={{paddingHorizontal: width * 0.03}}>
          <Text style={styles.member}>Rewards Member 98647hshd9393</Text>
          <View style={styles.memberinfo}>
            <View style={styles.memberinfocon}>
              <Text style={styles.memberinfoText}>Lorem 1234</Text>
              <Text style={[styles.memberinfoText, {fontWeight: '700'}]}>
                CLT FR5
              </Text>
            </View>
            <View style={styles.memberinfocon}>
              <Text style={styles.memberinfoText}>Business Clubs</Text>
              <Text style={[styles.memberinfoText, {fontWeight: '700'}]}>
                10 | <Text style={{color: 'green'}}>Completed</Text>
              </Text>
            </View>
          </View>
        </View>

        <LinearGradient
          colors={['rgba(105, 106, 128, 0.8)', 'rgba(52, 73, 104, 0.8)']}
          style={styles.lgblock}>
          <View style={styles.stepbox}>
            <View style={styles.infosec}>
              <View style={styles.info}>
                <Text style={styles.infotext}>Lorem:</Text>
                <Icon name="airplane" size={20} color={Colors.white} />
              </View>
              <View style={styles.info}>
                <Text style={styles.infotext}>
                  ETA: <Text style={{fontWeight: '600'}}>1:00 pm GMT</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.infotext}>Land rg 2h: 27m</Text>
              </View>
            </View>
            <View
              style={{marginTop: height * 0.016, marginBottom: height * 0.02}}>
              <Text style={styles.infotext}>
                Next Services <Text style={{fontWeight: '600'}}>1h 10m</Text>
              </Text>
            </View>
            <StepSlider />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </Theme.Background>
  );
};

export default HomeScreen;
