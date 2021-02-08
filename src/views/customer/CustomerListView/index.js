import React, { useState,useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Block from '@material-ui/icons/Block';
import Toolbar from './Toolbar';
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
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'

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

  async function fetchData() {
    const res = await fetch("http://mocbackend.cleverapps.io/api/user/list5Clients/");
    res
      .json()
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
       
  }

  useEffect(() => {
    fetchData()
  },[])

 
  const classes = useStyles();
  //const [clients1] = useState(clients)
  console.log(clients)
  
 
  
  return (
    <Page
      className={classes.root}
      title="Clients"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
        <MaterialTable
        actions={[
          {icon: Block,
              tooltip: 'Block',
             // onClick: () => window.location.reload(false)
            },
            {icon: CheckCircleOutline,
              tooltip: 'Activate',
             // onClick: () => window.location.reload(false)
            }
          
          ]
          }
        icons={tableIcons}
      title="List Clients"
      columns={[
        { title: 'Picture', field: 'imageUrl', render: rowData => <img src={'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'} style={{width: 40, borderRadius: '50%'}}/>,export: false },
        { title: 'First Name', field: 'FirstName' },
        { title: 'Last Name', field: 'LastName' },
        { title: 'Phone Number', field: 'PhoneNumber' },
        { title: 'Email', field: 'email' },
        { title: 'Adresse', field: 'Adresse' },
        { title: 'Country', field: 'Country' },
        { title: 'city', field: 'city' },
        { title: 'Postal Code', field: 'PostalCode' },
        
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'http://mocbackend.cleverapps.io/api/user/list/'
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
        paging: false,
        actionsColumnIndex: -1
      }}  
      
         
    />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
