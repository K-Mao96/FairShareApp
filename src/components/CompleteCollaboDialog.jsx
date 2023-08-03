import React from "react";
import {
  View, Text, StyleSheet,
} from 'react-native';

import Dialog from "react-native-dialog";

export default function CompleteCollaboDialog({ visible, onClose, onChildEvent }) {
  // ダイアログ用
  const handleOK = () => {
    // OKボタンが押されたときの処理
    onClose();
  };

  const closeParent = () => {
    onClose();
    onChildEvent();
  };

  return (
    <Dialog.Container
      visible={visible}
      // visible
      contentStyle={styles.inner}
    >
      <View style={styles.explanation}>
        <Text style={styles.explanationText}>
          ふたりのサイフが完成しました！パートナーにもこのアプリをインストールしてもらって、ふたりで立て替え情報を管理しましょう！
          {'\n'}
          ※ひとりのままでもご利用
          可能です。
        </Text>
      </View>

      <Dialog.Button label="OK" onPress={closeParent} />
    </Dialog.Container>

  );
}

const styles = StyleSheet.create({
  explanation: {
    marginHorizontal: 20,
  },
  explanationText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 17,
  },
  buttonContainer: {
    backgroundColor: '#4946D1',
    width: 90,
    borderRadius: 8,
    marginBottom: 24,
    alignSelf: 'flex-end',
  },
  buttonLabel: {
    fontSize: 15,
    paddingVertical: 5,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
