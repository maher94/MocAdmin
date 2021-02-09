import React, { useState, Component } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import PDF from '@material-ui/icons/PictureAsPdf';
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
  TableContainer
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import jsPDF from 'jspdf';
import Paper from '@material-ui/core/Paper';
import html2canvas from 'html2canvas';

class Products extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getListOrdersProducts();
  }
  getListOrdersProducts = _ => {

    const userId = JSON.parse(localStorage.getItem('user'));
    fetch('https://mocbackend.cleverapps.io/ordersProduit/listProduct')
      .then(response => response.json())
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.error(err))
  }
  /*printDocument() {
    const input = document.getElementById('pdfdiv');
    html2canvas(input)
      .then((canvas) => {
        var imgWidth = 200;
        var pageHeight = 290;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4')
        var position = 0;
        var heightLeft = imgHeight;
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        pdf.save("lenses.pdf");
      });
  }*/
  exportPDF = () => {
    const unit = "pt";
    const size = "A3"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    

    const data = this.state.data.map(elt=> [elt.Orderno, elt.Orderdate.substring(0, 10),elt.Category,elt.Products,elt.Status,elt.Comment,elt.qte,elt.volume,elt.FirstName,elt.LastName]);
    const headers = [["Orderno", "Orderdate","Category","Products","Status","Comment","Quantity","Volume","FirstName","LastName"]];

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

   
    doc.autoTable(content);
    doc.save("Product.pdf")
  }


  render() {
    return (
      <Card

      >


        <PerfectScrollbar>
          <Box minWidth={800}>
            <TableContainer id="pdfdiv" className="txt" component={Paper}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={this.exportPDF} variant="contained" color="primary" 
                 startIcon={
                  <PDF />
               }>
                  Download as PDF
                 </Button>
              </div>
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
                <TableCell>
                      Quantity
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
                          Order Date
                    </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      Status
                </TableCell>
                <TableCell>
                      Comment
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
                        {order.qte}
                      </TableCell>
                      <TableCell>
                        {moment(order.Orderdate).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell >
                        <Chip

                          style={{ backgroundColor: order.Status == "WaitingValidation" ? "#ffff00" : order.Status == "Validated" ? "greenyellow" : order.Status == "Rejected" ? "red" : order.Status == "Created" ? "gray" : order.Status == "InProgress" ? "#FAA742" : order.Status == "Suspended" ? "#DAFA87" : order.Status == "Paid" ? "#0BDB16" : order.Status == "PartiallyPaid" ? "#0BFFE8" : "primary" }}
                          label={order.Status=='WaitingValidation'?'Waiting Validation':order.Status=='PartiallyPaid'?'Partially Paid':order.Status=='InProgress'?'In Progress':order.Status}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        {order.Comment}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </Box>
        </PerfectScrollbar>

      </Card>

    )



  }



}
export default Products;
