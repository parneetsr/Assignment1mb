//Owner Parneet Kaur
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface RbcBottomNavProps {
  onAlertPress: () => void;
}

export default function RbcBottomNav({ onAlertPress }: RbcBottomNavProps) {
  return (
    <View style={styles.navBarWrapper}>
      
      {/* White backing cut-out curve background circle to mask the gray top line */}
      <View style={styles.whiteCurveMask} />

      {/* The functional central Yellow Button named "Alert" per criteria */}
      <TouchableOpacity 
        style={styles.yellowCenterButton} 
        onPress={onAlertPress}
        activeOpacity={0.85}
      >
        <Text style={styles.yellowButtonText}>Alert</Text>
      </TouchableOpacity>

      {/* The Main Horizontal Tab Item Layout */}
      <View style={styles.bottomDockContainer}>
        
        {/* Left Side Tab Actions */}
        <View style={styles.leftTabsGroup}>
          <TouchableOpacity style={styles.tabItemButton}>
            <Text style={[styles.tabItemText, styles.activeTab]}>H{"\n"}Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItemButton}>
            <Text style={styles.tabItemText}>A{"\n"}Accounts</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer Placeholder to keep center clearing open for the button */}
        <View style={styles.centerSpacer} />

        {/* Right Side Tab Actions */}
        <View style={styles.rightTabsGroup}>
          <TouchableOpacity style={styles.tabItemButton}>
            <Text style={styles.tabItemText}>${"\n"}Move Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItemButton}>
            <Text style={styles.tabItemText}>={"\n"}More</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  bottomDockContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  leftTabsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '42%',
  },
  rightTabsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '42%',
  },
  centerSpacer: {
    width: '16%', 
  },
  tabItemButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    width: '50%',
  },
  tabItemText: {
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 16,
  },
  activeTab: {
    color: '#0051a2',
    fontWeight: 'bold',
  },
  whiteCurveMask: {
    position: 'absolute',
    top: -14, 
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    zIndex: 1, 
  },
  yellowCenterButton: {
    position: 'absolute',
    top: -10, 
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#FFD200',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  yellowButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
