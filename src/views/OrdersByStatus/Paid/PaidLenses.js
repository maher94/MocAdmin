import React, { useState,useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  makeStyles,
  TextField
} from '@material-ui/core';
import Page from 'src/components/Page';


//import data from './data';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import { forwardRef } from 'react';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import SaveAlt from '@material-ui/icons/SaveAlt';
import FilterList from '@material-ui/icons/FilterList';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import OrderAPI from '../api/OrderAPI';
import PauseCircleFilled from '@material-ui/icons/PauseCircleOutline'
import WatchLaterOutlined from '@material-ui/icons/WatchLaterOutlined'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const tableIcons = {
  WatchLaterOutlined: forwardRef((props, ref) => <WatchLaterOutlined {...props} ref={ref} />),
  PauseCircleFilled: forwardRef((props, ref) => <PauseCircleFilled {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  close: forwardRef((props, ref) => <Close {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),

};
const PaidLenses = () => {
   
   
  const [open, setOpen] = React.useState(false);
  const [Amount, setAmount] = React.useState(0);
  const [open2, setOpen2] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState(0);
  const [status, setStatus] = React.useState('');
  const [row, setRow] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [paidAmount, setPaidAmount] = React.useState(0);
  const [partiallyPaidAmount, setpartiallyPaidAmount] = React.useState(0);
  const [amountStillToPay, setAmountStillToPay] = React.useState(0);


  const handleClickOpen = (s) => {
    setOpen(true);
    setStatus(s)
  };
  const handleClickSubmit = (orderNumber,amount) => {
    OrderAPI.lensesPayment(orderNumber,amount);
    window.location.reload(false)
  };
  const handleClose2 = () => {
    if (Amount!=0 && amountStillToPay>=Amount){
      handleClickSubmit(orderNumber,Amount);
    }
    setOpen2(false);
  };
  const handleCancel = () => {
    setOpen2(false);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload(false)
  };
  const handleClickOpenPP = () => {
    setOpen2(true);
    //setStatus(s)
  };

  const handleOnChange = useCallback(event => {
    setAmount(event.target.value);
  });
  
  const classes = useStyles();
  //const [clients1] = useState(clients)
  
  
 
  
  return (
    <React.Fragment> 
    <Page
      className={classes.root}
       
    >
      <Container maxWidth={false}>
       
        <Box mt={3}>
        <MaterialTable
        icons={tableIcons}
      title="Paid Lenses Orders"
      columns={[
        { title: 'Order no', field: 'Orderno' ,editable: 'never' ,cellStyle: {
          backgroundColor: '#B1D9FE',
          color: '#FFF'
        },
        headerStyle: {
          backgroundColor: '#B1D9FE',
        }},
        { title: 'Order date', field: 'Orderdate' , type :"date"},
        { title: 'Category', field: 'Category' ,lookup:  {Lenses:'Lenses'} },
        {
          title: 'Products',
          field: 'Products',
          lookup:{SkySoft:'SkySoft'}
        },
        {
          title: 'Status',
          field: 'Status',
          editable: 'never',
          lookup:{WaitingValidation:"Waiting Validation",Draft:"Draft",Validated :"Validated" ,InProgress :"In Progress" ,Suspended :"Suspended" ,Created:"Created",Rejected:"Rejected",Paid:"Paid",PartiallyPaid:"Partially Paid",Closed:"Closed"},          cellStyle: {
            backgroundColor:('#0BDB16') ,
        }},
        {
          title: 'Comment',
          field: 'Comment',
          
        },
        { title: 'Quantity', field: 'qte', type: 'numeric' },
       
        
        { title: 'Sph', field: 'pss', lookup:  {
          '-1,00': '-1,00',  '-1,25': '-1,25','-1,50': '-1,50','-1,75': '-1,75','-2,00':'-2,00','-2,25':'-2,25','-2,50':'-2,50','-2,75':'-2,75','-3,00':'-3,00','-3,25':'-3,25','-3,50':'-3,50','-3,75':'-3,75','-4,00':'-4,00','-4,25':'-4,25','-4,50':'-4,50','-4,75':'-4,75','-5,00':'-5,00','-5,25':'-5,25','-5,50':'-5,50','-5,75':'-5,75','-6,00':'-6,00','-6,50':'-6,50','-7,00':'-7,00','-7,50':'-7,50','-8,00':'-8,00','-8,50':'-8,50','-9,00':'-9,00','-9,50':'-9,50','-10,00':'-10,00','-10,50':'-10,50','-11,00':'-11,00','-11,50':'-11,50','-12,00':'-12,00','-12,50':'-12,50','-13,00':'-13,00','-13,50':'-13,50','-14,00':'-14,00','-14,50':'-14,50','-15,00':'-15,00','-15,50':'-15,50','-16,00':'-16,00'}},
          {
            title: 'Client Name',field:'FirstName'
          },
          {
            title: 'Last Name',field:'LastName'
          }
      ]
    }
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://mocbackend.cleverapps.io/ordersLentille//listPaidLensesOrders'
          fetch(url)
            .then(response => response.json())
            .then(result => {
              
              resolve({
                data: result.data.filter(function(obj) {
               return Object.keys(obj).some(function(key) {
                 return obj[key] ? (obj[key]).toString().includes(query.search) : false;
               })
             }),
                 
                totalCount:result.data.length,
          })
            })
        })
      } 
      actions={[
        {
          icon: WatchLaterOutlined,
          tooltip: 'Partially Paid',
          onClick: (event, rowData) => {
            rowData.forEach(element => {
           setRow(row.push(element.Orderno))
          });
            OrderAPI.updateStatus(row,"Lentille","PartiallyPaid");handleClickOpen("Partially Paid")}

        } ,
        {
          icon: Close,
          tooltip: 'Close',
          onClick: (event, rowData) => {
            rowData.forEach(element => {
           setRow(row.push(element.Orderno))
          });
            OrderAPI.updateStatus(row,"Lentille","Closed");handleClickOpen("Closed")}

        } ,
            
      ]}
      onRowClick={((evt, selectedRow) => {
        setPrice(selectedRow.price);
        setPaidAmount(selectedRow.paidAmount)
        setpartiallyPaidAmount(selectedRow.partiallyPaidAmount);
        setAmountStillToPay(selectedRow.amountStillToPay);
        setOrderNumber(selectedRow.Orderno)
        handleClickOpenPP();
       
      }
      )}
      options={{
        exportButton: true,
        paging: false ,
        selection:true
      }}  
      
         
    />
        </Box>
      </Container>
    </Page>
    <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Order Status Changed
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
             Order status has been changed to status {status}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose}
        
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Partial Paid Amount
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <TextField id="filled-basic" label={"Order N°"+orderNumber} variant="filled"  disabled/>
          <TextField
            autoFocus
            margin="dense"
            name="Amount"
            id="Amount"
            label="Amount"
            type="Number"
            onChange={handleOnChange}
            disabled={amountStillToPay==0}
          /><br></br><br></br>
           <TextField id="filled-basic" label={"Total Price : "+price}    disabled/> 
           
          <TextField id="filled-basic" label={"Paid Amount : "+paidAmount}  disabled/> <br></br><br></br>
          <TextField id="filled-basic" label={"Partially Paid: "+ partiallyPaidAmount}    disabled/>
          <TextField id="filled-basic" label={"Amount Still To Pay : "+amountStillToPay} style={{     background: amountStillToPay==0?'red':""   }}  disabled/><br></br><br></br>
          
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose2} color="primary">
            Submit
          </Button>
          
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
</React.Fragment>    
  );
};

export default PaidLenses;
