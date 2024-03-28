import {StyleSheet, View,Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Card, Tab,CardContent, Divider, ListItem, List, Chip } from '@mui/material';
import { ScrollView } from 'react-native-web';
import { useEffect, useState } from 'react';


const CardElementos = (props) => {
    let style={
        backgroundColor: 'write',
        color: 'white',
        padding: 10,
        margin: 10,
        justifyContent:"center",
        alignItems: "center",
    };
return(
    <View>
    <Card title="Receta #" style={style}>
        
        <View>
        <Text>Receta 1</Text>
        <Text>{props.FechaCreado}</Text>
        </View>
        <CardContent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {props.ingredientes.map((recet=>(
    <ListItem>
        <Text>{recet.ingrediente} : {recet.cantidad}</Text>
    </ListItem>
)))}
</CardContent>
<Chip label="Se acabo" />
    </Card>
    </View>


);

};
export default CardElementos;