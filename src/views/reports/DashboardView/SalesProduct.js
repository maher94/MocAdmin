import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { array, element } from 'prop-types';

class SalesProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
       
    }
   // this.salesLenses = this.salesLenses.bind(this);
  }
  
  componentDidMount() {
    this.salesPerMonth()
     
  }
  salesPerMonth = () => {
     
    fetch('http://mocbackend.cleverapps.io/ordersProduit/getNbOrdersByMonth' )
    .then(response=>response.json())
    .then(response=>this.setState({ result: response.data }))
    .catch(err=>console.error(err))
     
    

    

  }
   strCompare(str1,str2){
    return str1 === str2 ;
}
  render() {
    
     let monthofYears=["January","February","March","April","May","June","July","August","September","October","November","December"];
      let month=[];
      let values=[];
      let nb=[]
     // console.log(this.state.result);
      this.state.result.map(function (element) {
        nb.push(element.nbOrders)
        month.push(element.monthName)
         values.push(element.nbOrders)
      });
       

      
     
      //console.log(values)
    const data = {
      datasets: [
        {
          backgroundColor:"#27AE60",
          data: values,
          label: 'Product'
        } 
      ],
      labels: month
    };

    const options = {
      animation: false,
      cornerRadius: 20,
      layout: { padding: 0 },
      legend: { display: false },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            barThickness: 12,
            maxBarThickness: 10,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            ticks: {
              fontColor: "#9A7D0A"

            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              fontColor: "#01579B",
              beginAtZero: true,
              min: 0
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: "#9E9E9E",
              drawBorder: false,
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
              zeroLineColor: "#9E9E9E"
            }
          }
        ]
      },
      tooltips: {
        backgroundColor: "#EEEEEE",
        bodyFontColor: "#01579B",
        borderColor: "#01579B",
        borderWidth: 1,
        enabled: true,
        footerFontColor: "#01579B",
        intersect: false,
        mode: 'index',
        titleFontColor: "#000"
      }
    }

    return (
      <Card

      >
        <CardHeader
          //action={ }
          title="Sales of Product Per Month of years 2020"
        />
        <Divider />
        <CardContent>
          <Box
            height={400}
            position="relative"
          >
            <Bar

              data={data}
              options={options}

            />
          </Box>
        </CardContent>
        <Divider />

      </Card>


    )

  }
  


}

export default SalesProduct;
