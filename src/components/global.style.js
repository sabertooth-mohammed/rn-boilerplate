import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    safearea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    wrapper: { flex: 1 },
    wrapperCenter: { alignItems: "center",justifyContent:'center' },
});