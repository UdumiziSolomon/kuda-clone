import { View, Text, Dimensions, Image } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
const { width } = Dimensions.get('window');

const CheckList = ({ image, title, desc, stat }: any): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.checkImage} />
      <View>
        <Text style={styles.checkText}>{title}</Text>
        <Text style={styles.checkSubText}>{desc}</Text>
      </View>
      {stat ? (
        <View style={styles.done}>
          <Text style={styles.doneText}>Done</Text>
        </View>
      ) : (
        <View style={styles.pending}>
          <Text style={styles.pendingText}>Done</Text>
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: width - 20,
    backgroundColor: '#141313',
    paddingVertical: ms(20),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: ms(4),
  },
  checkText: {
    fontFamily: 'hellixbold',
    fontSize: ms(15),
    color: '#eee',
  },
  checkSubText: {
    fontFamily: 'Sofia Pro',
    fontSize: ms(12),
    color: '#eee',
    lineHeight: ms(15),
    marginTop: ms(4),
    width: width / 1.9,
  },
  done: {
    backgroundColor: '#437938',
    borderRadius: ms(5),
    paddingVertical: ms(3),
    paddingHorizontal: ms(15),
    borderWidth: 1,
    borderColor: '#cecaca',
    textAlign: 'center',
  },
  doneText: {
    fontFamily: 'Sofia Pro',
    fontSize: ms(12),
    color: '#eee',
  },
  pending: {
    backgroundColor: '#565553',
    borderRadius: ms(5),
    paddingVertical: ms(3),
    paddingHorizontal: ms(15),
    borderWidth: 1,
    borderColor: '#7f7b7b',
    textAlign: 'center',
  },
  pendingText: {
    fontFamily: 'Sofia Pro',
    fontSize: ms(12),
    color: '#ffffff',
  },
  checkImage: {
    height: ms(30),
    width: ms(30),
  },
});

export default CheckList;
