import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';

import ReimbursementList from '../components/ReimbursementList';
import CircleButton from '../components/CircleButton';
import ReimbursementCreateScreen from "./ReimbursementCreateScreen";

export default function ReimbursementListScreen(proprs) {
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
      <ReimbursementList />
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
});
