import React from 'react';
import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        backgroundColor: '#F0F0F5',
        paddingTop: Constants.statusBarHeight, 
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 24,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginBottom: 16
    },

    incidentValue: {
        fontSize: 15,
        marginBottom: 16,
        color: "#737380"
    },

    detailsButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    detailsButtonText: {
        color: "#e02041",
        fontSize: 15,
        fontWeight: "bold",
    }
})