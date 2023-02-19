import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

// type CatProps = {
//   name: string;
// };

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});

export default Cafe;