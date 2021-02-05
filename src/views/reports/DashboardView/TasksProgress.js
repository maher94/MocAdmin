import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import Axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const TasksProgress = ({ className, ...rest }) => {
  const classes = useStyles();
  const [total, setTotal] = React.useState(0);
  const [totalLenses, setTotalLenses] = React.useState(0);
  const [totalProduct, setTotalProduct] = React.useState(0);

  useEffect(() => {
  Axios.get('http://localhost:4000/ordersLentille/countPercentage')
        .then(response =>{  setTotal(response.data.data[0].total); setTotalLenses(response.data.data[0].nbLenses); setTotalProduct(response.data.data[0].nbProduct)}
  
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
              ORDERS PROGRESS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              ALL ORDERS : <b>{total}</b>
              <br></br>
             Lenses ORDERS : <b> {totalLenses}</b>
              <br></br> 
             Product ORDERS : <b> {totalProduct}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
         
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;
