//Owner Parneet Kaur
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function QuickActionCards() {
  const actions = [
    { icon: '↗', label: 'Send' }, 
    { icon: '($)', label: 'Transfer' },
    { icon: '[$]', label: 'Pay bills' },
  ];

  return (
    <View style={styles.cardsContainer}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionCard} activeOpacity={0.8}>
          <Text style={styles.cardIcon}>{action.icon}</Text>
          <Text style={styles.cardLabel}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: -12, 
    marginBottom: 20,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    borderRadius: 6,
    padding: 16,
    minHeight: 100,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    
  },
  cardIcon: {
    fontSize: 20,
    color: '#0051a2',
    fontWeight: 'bold',
   alignSelf: 'flex-start',
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1A1A1A',
  },
});
