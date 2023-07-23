import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ReimbursementList() {
  const navigation = useNavigation();
  return (
    <View style={styles.reimbursementListContainer}>
      <View style={styles.reimbursementListItem}>
        <View style={styles.reimbursementListItemTop}>
          <Text style={styles.reimbursementListItemTitle}>件名</Text>
          <Text style={styles.reimbursementListItemPayer}>川合真央</Text>
        </View>
        <View style={styles.reimbursementListItemBottom}>
          <Text style={styles.reimbursementListItemDate}>2023年5月20日</Text>
          <Text style={styles.reimbursementListItemAmount}>￥100</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reimbursementListContainer: {
    paddingHorizontal: 20,
  },
  reimbursementListItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#BCBABA',
  },
  reimbursementListItemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  reimbursementListItemTitle: {
    fontSize: '20px',
    fontWeight: '600',
  },
  reimbursementListItemPayer: {
    fontSize: '20px',
    fontWeight: '400',
  },
  reimbursementListItemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reimbursementListItemDate: {
    fontSize: '20px',
    fontWeight: '400',
  },
  reimbursementListItemAmount: {
    fontSize: '20px',
    fontWeight: '600',
  },
});
