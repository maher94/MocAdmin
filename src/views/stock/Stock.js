import React, { Component } from 'react';
import { Paper, TextField, Container, Box, Button, Zoom } from '@material-ui/core';
import Page from 'src/components/Page';

import ListStocks from'./ListStocks'; 
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StockItem from './StockItem';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
export default function Stock() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [category1, setCategory] = React.useState('');
    const [quantity1, setQuantity] = React.useState('');

   
    const handleClickOpen = () => {
        setOpen(true);
       /* <br></br>
        <Box
            display="flex"
            justifyContent="flex-end"
        >

            <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
            >
                Add New Item
            </Button>
        </Box>

        <Zoom in={open}>
          <div elevation={20} >
              <StockItem></StockItem>
             <br></br>
          </div>
       </Zoom>
        
*/
    };
  

    return (
        <Page

            title="Stock"
        >
            <Container maxWidth={false}>
              
            <br></br>                                    
            <ListStocks/> 



            </Container>
        </Page>

    );


}
