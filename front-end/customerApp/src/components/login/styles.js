import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    textFields: {
        height: '50%',
        width: '80%',
        //justifyContent: 'space-around',
        borderWidth: 5
    },
    textField: {
        height: '12%',
        width: '100%',
    },
    textFieldLabel: {
        fontSize: 25,
        fontFamily: "CamphorW01-Bold",
        color: 'black'
    },
    textBox: {
        height: '100%', 
        width: '100%', 
        resizeMode: 'stretch',
        alignSelf: 'flex-end'
    },
    textInput: {
        fontSize: 25,
        color: 'black',
        lineHeight: 25
    }
});