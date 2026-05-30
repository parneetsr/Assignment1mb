import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RbcHeader() {
  return (
    <View style={styles.headerContainer}>
      {/* Service Notice Bar */}
      <View style={styles.noticeRow}>
        <View style={styles.noticeLeft}>
          <Text style={styles.noticeAlertSymbol}>(!)</Text>
          <Text style={styles.noticeText}>Service Notice</Text>
        </View>
        <Text style={styles.helpIcon}>?</Text>
      </View>

      {/* Greeting Labels */}
      <Text style={styles.brandText}>RBC Mobile</Text>
      <Text style={styles.greetingText}>Good Morning</Text>

      {/* Rounded Search Input Bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>🔍︎</Text>
        <Text style={styles.searchText}>Search RBC Mobile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0051a2', 
    paddingHorizontal: 20,
    paddingTop: 45, 
    paddingBottom: 25,
  },
  noticeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  noticeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noticeAlertSymbol: {
    color: '#FFD200',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
  },
  noticeText: {
    color: '#E3F2FD',
    fontSize: 14,
    fontWeight: '500',
  },
  helpIcon: {
    color: '#E3F2FD',
    fontSize: 18,
    fontWeight: 'bold',
  },
  brandText: {
    color: '#B3E5FC',
    fontSize: 14,
    fontWeight: '500',
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '400',
    marginTop: 2,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 10,
    fontWeight: 'bold',
     
    
  },
  searchText: {
    color: '#E3F2FD',
    fontSize: 15,
  },
});