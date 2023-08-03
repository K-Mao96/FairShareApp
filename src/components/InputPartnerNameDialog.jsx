import React, { useState } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

import Dialog from 'react-native-dialog';

import CompleteCollaboDialog from './CompleteCollaboDialog';

export default function InputPartnerNameDialog({ visible, onClose, onChildEvent }) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [name, setName] = useState('');

  // const handleOK = () => {
  //   // OKボタンが押されたときの処理
  //   console.log('Name:', name);
  //   onClose();
  // };
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
      <Dialog.Title style={styles.title}>
        パートナーの名前を入力して
        {'\n'}
        ください
      </Dialog.Title>

      <View style={styles.explanation}>
        <Dialog.Input
          style={styles.input}
          wrapperStyle={styles.inputContainer}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <Dialog.Button label="キャンセル" onPress={closeParent} />
      <Dialog.Button label="OK" onPress={showDialog} />

      {/* 連携完了ダイアログ */}
      <CompleteCollaboDialog
        visible={dialogVisible}
        onClose={handleCloseDialog}
        onChildEvent={closeParent}
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
    width: 290,
    backgroundColor: '#F3F1F1',
    borderRadius: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  explanation: {
    marginHorizontal: 20,
  },
  explanationText: {
    fontSize: 15,
    marginBottom: 17,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 30,
    width: 248,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    height: 30,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
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