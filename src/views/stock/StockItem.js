import React, { Component } from 'react';
 
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField, Paper, Container, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
class StockItem extends Component {

    render() {
 
        return (
           
            <Paper style={{ paddingTop: 0, paddingBottom: 0 }}>
                 
                <Container maxWidth="xs" >
            <FormControl >
           
            <InputLabel id="demo-dialog-select-label">Stock Category</InputLabel>
            <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                 
               // onChange={handleChangeCategory}
                input={<Input />}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Lenses'}>Lenses</MenuItem>
                <MenuItem value={'Product'}>Product</MenuItem>
            </Select>
      
           
           <TextField
               id="standard-number"
               label="Quantity"
               type="number"
               
              // onChange={handleChangeQuantity}
               InputLabelProps={{
                   shrink: true,
               }}
           />
       </FormControl>
       <br></br>
       <div style={{ paddingTop: 5, paddingBottom: 5 }}>
                       
                        <Button variant="contained"
                            size="small" style={{
                                font: '#0069d9',
                                boxShadow: 'none',
                            }} color="primary" startIcon={
                                <SaveIcon />
                            }
                             
                            
                        >Save </Button>
                        <Button
                            size="small" style={{
                                font: '#0069d9',
                                borderColor: 'red',
                                boxShadow: 'none',
                            }}
                          
                            to="/home"
                            variant="contained"
                            startIcon={
                                <CancelIcon />
                            }
                        >
                            Cancel
                  </Button>
                    </div>
       </Container>
       </Paper>
        ) ;
        
    }
}
export default StockItem;