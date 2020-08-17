import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList:{
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 16,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    inputBlock:{
        width: '48%',
    },

    input:{
        height: 48,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 2,
        marginBottom: 8,
    },

    submitButton:{
        backgroundColor: '#04d361',
        height: 45,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
});

export default styles;