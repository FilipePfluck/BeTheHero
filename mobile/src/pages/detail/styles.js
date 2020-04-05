import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#F0F0F5"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        marginBottom: 16,
        marginTop: 24,
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginTop: 16,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#737380"
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#13131A",
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15, 
        color: "#737380",
        marginTop: 16,
    },
    
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    action: {
        backgroundColor: "#e02041",
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: "center",
        alignItems: "center",
    },

    actionText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
    },
});