import React, { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity, Keyboard,
} from 'react-native';

import Dialog from "react-native-dialog";

export default function ReimbursementCreateScreen({ visible, onClose }) {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [subject, setSubject] = useState('');
  const [amount, setAmount] = useState('');
  const [isSelectedPersonA, setIsSelectedPersonA] = useState(false);
  const [isSelectedPersonB, setIsSelectedPersonB] = useState(false);

  // 当日の日付を取得する
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day}`;

  const handleOK = () => {
    // OKボタンが押されたときの処理
    console.log('Selected Person:', selectedPerson);
    console.log('Subject:', subject);
    console.log('Amount:', amount);
    onClose();
  };

  const handleCancel = () => {
    // キャンセルボタンが押されたときの処理
    onClose();
  };

  const onPressPersonA = () => {
    setIsSelectedPersonA(!isSelectedPersonA);
    setIsSelectedPersonB(isSelectedPersonA);
    setSelectedPerson('川合真央');
  };
  const onPressPerson = () => {
    setIsSelectedPersonB(!isSelectedPersonB);
    setIsSelectedPersonA(isSelectedPersonB);
    setSelectedPerson('河原悠真');
  };

  const calcSplitAmount = () => {
    if (amount !== '') {
      const splitAmount = (parseFloat(amount) / 2).toFixed();
      setAmount(splitAmount);
    }
  };

  const handleOutsideDialog = () => {
    Keyboard.dismiss();
  };

  const inputPersonStyleA = isSelectedPersonA
    ? styles.tappedInputDoubleItem : styles.inputDoubleItem;

  const inputPersonStyleB = isSelectedPersonB
    ? styles.tappedInputDoubleItem : styles.inputDoubleItem;

  return (
    <Dialog.Container
      visible={visible}
      contentStyle={styles.inner}
      onBackdropPress={handleOutsideDialog}
    >
      <Dialog.Title style={styles.title}>
        支払ったものを
        {'\n'}
        入力してください
      </Dialog.Title>
      <View style={styles.section}>
        <Text style={styles.label}>立て替え者</Text>
        <View>
          <TouchableOpacity
            style={[styles.inputDoubleItem, styles.inputDoubleItemTop, inputPersonStyleA]}
            onPress={onPressPersonA}
          >
            <Text style={styles.inputDoubleText}>川合真央</Text>
          </TouchableOpacity>
          <View style={styles.InputDoubleBorder} />
          <TouchableOpacity
            style={[styles.inputDoubleItem, styles.inputDoubleItemBottom, inputPersonStyleB]}
            onPress={onPressPerson}
          >
            <Text style={styles.inputDoubleText}>河原悠真</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>件名</Text>
        <Dialog.Input
          placeholder="ランチ"
          style={styles.input}
          wrapperStyle={styles.inputContainer}
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>金額</Text>
        <Dialog.Input
          placeholder="1980円"
          style={styles.input}
          wrapperStyle={styles.inputContainer}
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={styles.buttonLabel}
            onPress={calcSplitAmount}
          >
            割り勘
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>立て替え日</Text>
        <View style={styles.reimbursementDateContainer}>
          <Text style={styles.reimbursementDateText}>
            {formattedDate}
          </Text>
        </View>
      </View>

      <Dialog.Button
        label="キャンセル"
        onPress={handleCancel}
        style={styles.dialogButton}
      />
      <Dialog.Button
        label="OK"
        onPress={handleOK}
        style={styles.dialogButton}
      />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  inner: {
    width: 306,
    backgroundColor: '#F3F1F1',
  },
  section: {
    marginHorizontal: 17,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputDoubleItem: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputDoubleItemTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  InputDoubleBorder: {
    borderBottomColor: '#BCBABA',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  inputDoubleItemBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 17,
  },
  tappedInputDoubleItem: {
    backgroundColor: '#56E1FF',
  },
  inputDoubleText: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    height: 42,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4946D1',
    width: 90,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: -10,
    alignSelf: 'flex-end',
  },
  buttonLabel: {
    fontSize: 15,
    paddingVertical: 5,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  reimbursementDateContainer: {
    borderRadius: 8,
    backgroundColor: '#D9D9D9',
    width: 136,
    height: 30,
    justifyContent: 'center',
    marginBottom: 20,
  },
  reimbursementDateText: {
    fontSize: 14,
    textAlign: 'center',
  },
  dialogButton: {
    fontSize: 16,
  },
});
