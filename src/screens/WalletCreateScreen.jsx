import React, { useState } from "react";
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity
} from 'react-native';

import CircleButton from '../components/CircleButton';
import ReimbursementCreateScreen from "./ReimbursementCreateScreen";

export default function WalletCreateScreen(proprs) {
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
      {/* アカウント作成ボタン */}
      <TouchableOpacity style={[styles.buttonContainer, styles.buttonContainerTop]}>
        <Text style={styles.buttonText}>
          新しくサイフを作る
        </Text>
      </TouchableOpacity>

      {/* パートナー連携ボタン */}
      <View style={styles.partnerCollaboContainer}>
        <View style={styles.partnerCollaboExplanationContainer}>
          <Text style={styles.partnerCollaboExplanationText}>
            既にパートナーがサイフ作成済みの場合
            {'\n'}
            こちらを選択してください
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            パートナーと連携
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logOutContainer}>
        <Text style={styles.logOutText}>
          ログアウト
        </Text>
      </View>

      <View style={styles.deleteAccountContainer}>
        <Text style={styles.deleteAccountText}>
          アカウントを削除
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
  },
  buttonContainer: {
    width: 250,
    height: 50,
    backgroundColor: '#4946D1',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainerTop: {
    marginTop: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  partnerCollaboContainer: {
    marginTop: 100,
  },
  partnerCollaboExplanationContainer: {
    alignSelf: 'center',
    marginBottom: 14,
  },
  partnerCollaboExplanationText: {
    textAlign: 'center',
    fontSize: 13,
  },
  logOutContainer: {
    alignSelf: 'center',
    marginTop: 70,
  },
  logOutText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4946D1',
  },
  deleteAccountContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  deleteAccountText: {
    fontSize: 14,
    color: 'red',
  },
});
