import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.greenContainer}></View>
        <View style={styles.redContainer}></View>
        <View style={styles.blueContainer}></View>
      </View>
      <View style={styles.column}>
        <View style={styles.purpleContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.pinkContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  greenContainer: {
    flex: 3,
    backgroundColor: 'green',
  },
  redContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  blueContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  purpleContainer: {
    flex: 3,
    backgroundColor: 'purple',
  },
  yellowContainer: {
    flex: 2,
    backgroundColor: 'yellow',
  },
  pinkContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
