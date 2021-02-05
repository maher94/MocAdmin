import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrdersLenses from './LatestOrdersLenses';
import LatestOrdersProduct from './LatestOrdersProduct';
import ListClients from './ListClients';
import Sales from './SalesLenses';
import SalesProduct from './SalesProduct';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import OrdersLensesByPss from './OrdersLensesByPss'
import PercentageLensesAndProduct from './PercentageLensesAndProduct';
import OrdersProduitByVolume from './OrdersProduitByVolume';
import OrdersLensesByStatus from './OrdersLensesByStatus';
import OrdersProduitByStatus from './OrdersProduitByStatus';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
           
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit />
          </Grid>
          
          <Grid
            item
            lg={4}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
            
          </Grid>
        
          
          <Grid
            item
            lg={4}
            md={12}
            xl={9}
            xs={12}
          >
            <SalesProduct />
            
          </Grid>
         
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <PercentageLensesAndProduct />
          </Grid>
          <Grid
            item
            lg={7}
            md={6}
            xl={3}
            xs={12}
          >
            <OrdersLensesByPss />
            
          </Grid>
          <Grid
            item
            lg={5}
            md={6}
            xl={3}
            xs={12}
          >
            <OrdersProduitByVolume />
            </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <ListClients />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrdersLenses />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrdersProduct />
            </Grid>
            <Grid
            item
            lg={6}
            md={6}
            xl={3}
            xs={12}
          >
            <OrdersLensesByStatus />
            </Grid>
            <Grid
            item
            lg={6}
            md={6}
            xl={3}
            xs={12}
          >
            <OrdersProduitByStatus />
            
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
