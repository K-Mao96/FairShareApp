import React, { useState } from "react";
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity
} from 'react-native';

import CircleButton from '../components/CircleButton';
import ReimbursementCreateScreen from "./ReimbursementCreateScreen";

export default function HomeScreen(proprs) {
  const { navigation } = proprs;

  // ダイアログ用
  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };
  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>立て替え金額合計</Text>

      <Text style={styles.homeSubTitle}>「自分 - パートナー」の金額</Text>

      {/* 合計金額表示パネル */}
      <View style={styles.totalAmoutPannel}>
        <Text style={styles.totalAmoutText}>3000</Text>
      </View>

      <View style={styles.updateContainer}>
        <Text style={styles.updateDateText}>取得日時（mm/dd hh:mm)</Text>

        {/* 更新ボタン */}
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>更新</Text>
        </TouchableOpacity>
      </View>

      {/* 精算ボタン */}
      <TouchableOpacity style={styles.calculateButton}>
        <Text style={styles.calculateButtonText}>精算する</Text>
      </TouchableOpacity>

      {/* 追加ボタン */}
      <CircleButton
        name="plus"
        onPress={showDialog}
      />
      <ReimbursementCreateScreen
        visible={dialogVisible}
        onClose={handleCloseDialog}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
  },
  homeTitle: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '700',
  },
  homeSubTitle: {
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '400',
    marginVertical: 15,
  },
  totalAmoutPannel: {
    borderRadius: '16px',
    backgroundColor: '#fff',
    width: 248,
    height: 71,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmoutText: {
  },
  updateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 83,
  },
  updateDateText: {
    fontSize: '14px',
    marginRight: 5,
  },
  updateButton: {
    width: 56,
    height: 29,
    borderRadius: 8,
    backgroundColor: '#4946D1',
    justifyContent: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: '15px',
    fontWeight: '700',
    textAlign: 'center',
  },
  calculateButton: {
    width: 136,
    height: 44,
    backgroundColor: '#4946D1',
    borderRadius: '8ps',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '700',
    textAlign: 'center',
  },
});
