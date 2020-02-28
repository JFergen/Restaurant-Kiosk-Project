import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '80%',  //ALWAYS UPDATE TO 100 % - (HEADER HEIGHT + FOOTER HEIGHT)
        top: '12%',     //ALWAYS UPDATE TO HEADER HEIGHT % BC REACT NATIVE DOESN'T HAVE FLEX-ORDER
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    testStyle: {
        height: '100%',
        width: '100%',
    }
});