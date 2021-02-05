import React, { useState, Component } from 'react';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles,
  colors
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

class LatestOrders extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getListOrdersProduct();
  }
  getListOrdersProduct = _ => {


    fetch('http://localhost:4000/ordersProduit/AllOrders/')
      .then(response => response.json())
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.error(err))
  }


  render() {
    return (
      <Card

      >
        <CardHeader title="Latest Orders Product" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={800}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Order Ref
                </TableCell>
                  <TableCell>
                    Category
                </TableCell>
                  <TableCell>
                    Products
                </TableCell>
                  <TableCell>
                    Volume
                </TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        Date
                    </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    Status
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map((order) => (
                  <TableRow
                    hover
                    key={order.Orderno}
                  >
                    <TableCell>
                      {order.Orderno}
                    </TableCell>
                    <TableCell>
                      {order.Category}
                    </TableCell>
                    <TableCell>
                      {order.Products}
                    </TableCell>
                    <TableCell>
                      {order.volume}
                    </TableCell>
                    <TableCell>
                      {moment(order.Orderdate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell >
                      <Chip
                        style={{ backgroundColor: order.Status == "WaitingValidation" ? "#ffff00" : order.Status == "Validated" ? "greenyellow" : order.Status == "Rejected" ? "red" : order.Status == "Created" ? "gray" : order.Status == "InProgress" ? "#FAA742" : order.Status == "Suspended" ? "#DAFA87" : order.Status == "Paid" ? "#0BDB16" : order.Status == "PartiallyPaid" ? "#0BFFE8" : "primary" }}

                        label={order.Status == 'WaitingValidation' ? 'Waiting Validation' : order.Status == 'PartiallyPaid' ? 'Partially Paid' : order.Status == 'InProgress' ? 'In Progress' : order.Status}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            View all
        </Button>
        </Box>
      </Card>

    )



  }



}
export default LatestOrders;
