import React, { useState } from "react";
import {
  View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';

import DeleteDialog from '../components/DeleteDialog';

export default function OthersSettingScreen(props) {
  const { navigation } = props;

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
      {/* ログアウト機能 */}
      <View style={styles.settingContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingItemText}>ログアウト</Text>
        </View>
      </View>
      {/* アカウント削除機能 */}
      <View style={styles.settingContainer}>
        <View style={styles.settingItem}>
          <Text
            style={[styles.settingItemText, styles.settingDelete]}
            onPress={showDialog}
          >
            アカウントとデータを削除する
          </Text>
        </View>
      </View>

      <DeleteDialog
        visible={dialogVisible}
        onClose={handleCloseDialog}
      />
      {/* 戻る機能 */}
      <View style={styles.settingContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingItemText}>戻る</Text>
        </View>
      </View>

      {/* その他機能 */}
      {/* <TouchableHighlight
        style={styles.settingContainer}
        underlayColor="#BCBABA"
        activeOpacity="0.9"
        onPress={() => navigation.navigate('MemoCreate')}
      >
        <View style={styles.settingItem}>
          <Text style={styles.settingItemText}>
            その他
          </Text>
        </View>
      </TouchableHighlight> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  memberContainer: {
    marginTop: 72,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  memberItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderTopColor: '#BCBABA',
    borderTopWidth: 1,
  },
  memberItemBottom: {
    borderBottomColor: '#BCBABA',
    borderBottomWidth: 1,
  },
  memberItemText: {
    fontSize: 18,
  },
  settingContainer: {
    marginTop: 66,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  settingItem: {
    paddingVertical: 15,
    borderTopColor: '#BCBABA',
    borderTopWidth: 1,
    borderBottomColor: '#BCBABA',
    borderBottomWidth: 1,
  },
  settingItemText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  settingDelete: {
    color: 'red',
  },
});
