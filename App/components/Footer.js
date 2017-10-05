import React, { Component } from 'react';
import AddIcon from './../icons/AddIcon';
import { 
  Text, 
  TouchableOpacity, 
  View,
} from 'react-native';
const Footer = ({props}) =>(
  <View style={[styles.LandingFooter]}>
    <View style={styles.LandingFooterText}>
      <Text>FOOTER PLACE HOLDER1</Text>
    </View>
    <View style={styles.LandingFooterIcon}>
      <TouchableOpacity>
        <Text>TOUCH PLACE HOLDER</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = {
  LandingFooter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-around'
  },
  LandingFooterText: {
    justifyContent: 'center'
  },
  LandingFooterIcon: {
    justifyContent: 'center'
  }
};
export default Footer;