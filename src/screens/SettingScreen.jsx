import React, { useState } from "react";
import {
  View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';

import InputPartnerNumberDialog from "../components/InputPartnerNumberDialog";

export default function SettingScreen(props) {
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
      {/* カード */}
      <View style={styles.memberContainer}>
        <View style={styles.memberItem}>
            <Text style={styles.memberItemText}>
              あなたの名前
            </Text>
            <Text style={styles.memberItemText}>
              川合真央
            </Text>
        </View>
        <View style={[styles.memberItem, styles.memberItemBottom]}>
            <Text style={styles.memberItemText}>
              パートナーの名前
            </Text>
            <Text style={styles.memberItemText}>
              河原悠真
            </Text>
        </View>
      </View>

      {/* 連携機能 */}
      <TouchableHighlight
        style={styles.settingContainer}
        underlayColor="#BCBABA"
        activeOpacity="0.9"
        onPress={showDialog}
      >
        <View style={styles.settingItem}>
          <Text style={styles.settingItemText}>パートナーと連携する</Text>
        </View>
      </TouchableHighlight>

      {/* その他機能 */}
      <TouchableHighlight
        style={styles.settingContainer}
        underlayColor="#BCBABA"
        activeOpacity="0.9"
        onPress={() => navigation.navigate('OthersSetting')}
      >
        <View style={styles.settingItem}>
          <Text style={styles.settingItemText}>
            その他
          </Text>
        </View>
      </TouchableHighlight>

      {/* パートナー連携ダイアログ */}
      <InputPartnerNumberDialog
        visible={dialogVisible}
        onClose={handleCloseDialog}
      />
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
});
