import React, { useState,useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const tableIcons = {
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
const CustomerListView = () => {
   
  const [clients, setClients] = useState({});

  
  const classes = useStyles();
  //const [clients1] = useState(clients)
  console.log(clients)
  
 
  
  return (
    <Page
      className={classes.root}
      title="Clients"
    >
      <Container maxWidth={false}>
       
        <Box mt={3}>
        <MaterialTable
        icons={tableIcons}
      title="Lenses Orders"
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

            backgroundColor:('yellow') ,
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
          let url = 'http://mocbackend.cleverapps.io/ordersLentille/listLenses'
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
      options={{
        exportButton: true,
        paging: false
      }}  
      
         
    />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
