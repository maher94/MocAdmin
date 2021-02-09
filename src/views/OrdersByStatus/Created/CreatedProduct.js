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
const CreatedProduct = () => {
   
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
     
    >
      <Container maxWidth={false}>
       
        <Box mt={3}>
        <MaterialTable
        icons={tableIcons}
      title=" Created Product Orders "
      columns={[
        { title: 'Order no', field: 'Orderno' ,editable: 'never' ,cellStyle: {
          backgroundColor: '#049A94',
          color: '#FFF'
        },
        headerStyle: {
          backgroundColor: '#049A94',
        }},
        { title: 'Order date', field: 'Orderdate' , type :"date"},
        { title: 'Category', field: 'Category' ,lookup:  {Product:'Product'} },
        {
          title: 'Products',
          field: 'Products',
          lookup:{Releasy:'Releasy'}
        },
        {
          title: 'Status',
          field: 'Status',
          editable: 'never',
          lookup:{WaitingValidation:"Waiting Validation",Draft:"Draft",Validated :"Validated" ,InProgress :"In Progress" ,Suspended :"Suspended" ,Created:"Created",Rejected:"Rejected",Paid:"Paid",PartiallyPaid:"Partially Paid",Closed:"Closed"},          cellStyle: {
            backgroundColor:('gray') ,
        }},
        {
          title: 'Comment',
          field: 'Comment',
          
        },
        { title: 'Quantity', field: 'qte', type: 'numeric' },
       
        
        { title: 'volume', field: 'volume', lookup:  {
          '25 ML':'25 ML','50 ML':'50 ML','75 ML':'75 ML','100 ML':'100 ML'}},
        {
          title: 'Client Name',field:'FirstName'
        },
        {
          title: 'Last Name',field:'LastName'
        }
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://mocbackend.cleverapps.io/ordersProduit//listCreatedProductOrders'
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

export default CreatedProduct;
