import React, { useState } from "react";
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity
} from 'react-native';

import CircleButton from '../components/CircleButton';
import ReimbursementCreateScreen from "./ReimbursementCreateScreen";

export default function AccountCreateScreen(proprs) {
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
      <Text style={styles.homeTitle}>
        ふたりの立て替え
        {'\n'}
        スマートに
      </Text>

      {/* アカウント作成ボタン */}
      <TouchableOpacity style={styles.accoutCreateButton}>
        <Text style={styles.accoutCreateButtonText}>
          アカウント作成
        </Text>
      </TouchableOpacity>

      <View style={styles.nonCreateAccountStartContainer}>
        <Text style={styles.nonCreateAccountStartText}>
          アカウント作成せずに始める
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          アカウント作成済みの場合は
          <Text style={styles.loginLinkText}>
            ログイン
          </Text>
          してください
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
  homeTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    marginTop: 150,
  },
  accoutCreateButton: {
    width: 277,
    height: 52,
    backgroundColor: '#4946D1',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  accoutCreateButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  nonCreateAccountStartContainer: {
    alignSelf: 'center',
    marginTop: 66,
  },
  nonCreateAccountStartText: {
    fontSize: 15,
    color: '#06C',
  },
  loginContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  loginText: {
    fontSize: 12,
  },
  loginLinkText: {
    color: '#06C',
  },
});
