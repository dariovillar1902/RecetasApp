import { Divider, ListItemButton, ListItemIcon, TextField } from '@mui/material';
import * as React from 'react';
import { render } from 'react-dom';
import { Button, View } from 'react-native-web';
import { List,ListItem } from '@mui/material';
const AniadirElemento = () => {
    render(
<View>
<Text>Introducir Ingredientes</Text>
<Divider/>

<TextField id="outlined-basic" label="Ingrediente" variant="outlined" />
<Text>Cantidad</Text>
<List>
    <ListItemButton>
    <ListItemIcon id='Añadir mas'/>
    <ListItemIcon id='Añadir menos'/>

    </ListItemButton>
    
</List>
<Button id='Añadir' variant="contained" color="primary">Añadir ingrediente</Button>
</View>
    );
};
export default AniadirElemento;