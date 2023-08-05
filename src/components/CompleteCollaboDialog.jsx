import React from "react";
import {
  View, Text, StyleSheet,
} from 'react-native';

import Dialog from "react-native-dialog";

export default function CompleteCollaboDialog({ visible, onClose, onChildEvent }) {
  // ダイアログ用
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
          パートナーとの連携が完了しました。
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
});
