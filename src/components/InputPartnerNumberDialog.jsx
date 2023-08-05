import React, { useState } from "react";
import {
  View, Text, StyleSheet,
} from 'react-native';

import Dialog from "react-native-dialog";
import CompleteCollaboDialog from "./CompleteCollaboDialog";

export default function InputPartnerNumberDialog({ visible, onClose }) {
  // ダイアログ用
  const [dialogVisible, setDialogVisible] = useState(false);

  const [firstNumber, setFirstNumber] = useState('');
  const [middleNumber, setMiddleNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const handleCancel = () => {
    // キャンセルボタンが押されたときの処理
    onClose();
  };

  const showDialog = () => {
    setDialogVisible(true);
  };
  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  return (
    <Dialog.Container
      visible={visible}
      // visible
      contentStyle={styles.inner}
    >
      <Dialog.Description style={styles.description}>
        パートナーの連携番号を
        {'\n'}
        入力してください
      </Dialog.Description>

      <View style={styles.inputContainer}>
        <View>
          <Dialog.Input
            style={styles.input}
            wrapperStyle={styles.inputWrapper}
            value={firstNumber}
            placeholder="1234"
            onChangeText={(text) => setFirstNumber(text)}
          />
        </View>
        <View>
          <Dialog.Input
            style={styles.input}
            wrapperStyle={styles.inputWrapper}
            value={middleNumber}
            placeholder="1234"
            onChangeText={(text) => setMiddleNumber(text)}
          />
        </View>
        <View>
          <Dialog.Input
            style={styles.input}
            wrapperStyle={styles.inputWrapper}
            value={lastNumber}
            placeholder="1234" 
            onChangeText={(text) => setLastNumber(text)}
          />
        </View>
      </View>

      <Dialog.Button label="キャンセル" onPress={handleCancel} />
      <Dialog.Button label="OK" onPress={showDialog} />

      {/* パートナー連携完了ダイアログ */}
      <CompleteCollaboDialog
        visible={dialogVisible}
        onClose={handleCloseDialog}
        onChildEvent={handleCancel}
      />
    </Dialog.Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  inner: {
    width: 332,
    backgroundColor: '#F3F1F1',
    borderRadius: 15,
    alignSelf: 'center',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 42,
    width: 87,
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: '700',
    height: 30,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
