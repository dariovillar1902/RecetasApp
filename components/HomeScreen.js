import {StyleSheet, View,Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Card, Tab,CardContent, Divider, ListItem, List, Chip } from '@mui/material';
import { ScrollView } from 'react-native-web';
import { useEffect, useState } from 'react';
import CardElementos from './CardElementos';
import { useModal } from 'react-hook-modal';

import Fab from '@mui/material/Fab';
import AniadirElemento from './AniadirElemento';



//-->   Pantalla de inicio Muestra comienzo de la aplicacion    <---
const host="http://www.localhost";
const port="7258";
const ApiConnect="https://recetasappbackend.azurewebsites.net/api/Values";
const HomeScreen = () => {
    const [recetas,setRecetas]=useState([]);
    const { modalIsOpen, openModal, closeModal } = useModal();

useEffect(()=>{
    console.log("Inicio de la aplicacion");
    //-->   Obtencion de informacion para la muestra    <--
    const fetchDatos=async()=>{
        const response=await fetch(ApiConnect, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          ).then(response => {
            if (response.ok) {
              response.json().then(json => {
                
                /* recetas.push(json); */
                console.log(recetas);
                setRecetas(prevRecetas=>[...prevRecetas,json]);
                
              });
            }
          });
    };
    fetchDatos();
},[]);
const popup=()=>{
    
    
    console.log("ENTRO");


};
    return(
        <ScrollView>
      <Text>Recetas Activas</Text>
      {console.log(recetas)}
    <Divider variant="middle"/>
   
    {recetas.map((receta) => {
        console.log(receta);
        return (
            <CardElementos FechaCreado={receta.nombre} ingredientes={receta.ingredientes}/>
        );
})}
   {/*  <CardElementos FechaCreado={FechaCreado} Receta={Receta}/>
    <CardElementos FechaCreado={FechaCreado} Receta={Receta}/>  */}
      <Fab variant='extended'size='large'color='primary' onClick={popup}>
        Nueva
      </Fab>
     
            </ScrollView>


    );
};
export default HomeScreen;