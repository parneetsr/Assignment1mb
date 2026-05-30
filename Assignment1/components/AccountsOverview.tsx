//Owner Parneet Kaur
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AccountsOverview() {
  const accounts = [
    { name: 'Chequing (2818)', balance: '18,505.20' },
    { name: 'Savings (2800)', balance: '0.00' },
    { name: 'VISA (4742)', balance: '-58.89' },
  ];

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Accounts Overview</Text>
        <Text style={styles.moreOptions}>:</Text>
      </View>

      <View style={styles.listContainer}>
        {accounts.map((acc, index) => (
          <View key={index} style={styles.accountItemRow}>
            <Text style={styles.accountName}>{acc.name}</Text>
            <View style={styles.balanceContainer}>
              <Text style={styles.accountBalance}>{acc.balance}</Text>
              <Text style={styles.arrowIcon}></Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.linksRow}>
        <TouchableOpacity><Text style={styles.linkText}>Open an account</Text></TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity><Text style={styles.linkText}>View all</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    marginBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#555555',
    fontWeight: '400',
  },
  moreOptions: {
    fontSize: 16,
    color: '#555555',
    fontWeight: 'bold',
  },
  listContainer: {
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
  },
  accountItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  accountName: {
    fontSize: 15,
    color: '#333333',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountBalance: {
    fontSize: 15,
    color: '#333333',
    marginRight: 8,
  },
  arrowIcon: {
    fontSize: 16,
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  linksRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  linkText: {
    color: '#0051a2',
    fontSize: 14,
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 12,
  },
});
