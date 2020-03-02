import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        width: Dimensions.get('window').width,
        height: 120,
        borderWidth: 5
    }
});