import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const TotalProfit = ({ className, ...rest }) => {
  const classes = useStyles();
  const [lensesProfit, setLensesProfit] = React.useState(0);
  const [productProfit, setProductProfit] = React.useState(0);
  useEffect(() => {
    Axios.get('http://mocbackend.cleverapps.io/ordersLentille/totalProfitLenses')
          .then(response =>{  setLensesProfit(response.data.data[0].lensesProfit);}
    
          )
          .catch(function (error) {
    
            console.log(error);
          })
         
        Axios.get('http://mocbackend.cleverapps.io/ordersProduit/totalProfitProduct')
        .then(response =>{  setProductProfit(response.data.data[0].ProductProfit);}
  
        )
        .catch(function (error) {
  
          console.log(error);
        })
      });
       
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL PROFIT
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
            >
               Lenses <b> {lensesProfit}</b> DT
              <br></br>
              Product <b>{productProfit}</b> DT
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
