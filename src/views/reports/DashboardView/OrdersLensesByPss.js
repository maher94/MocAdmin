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

class OrdersLensesByPss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      statLenses: [],
      statProduct: [],
      month: []

    }
   // this.salesLenses = this.salesLenses.bind(this);
  }
  
  componentDidMount() {
    this.salesPerMonth()
     
  }
  salesPerMonth = () => {
     
    fetch('https://mocbackend.cleverapps.io/ordersLentille/getNborderbyPss' )
    .then(response=>response.json())
    .then(response=>this.setState({ result: response.data }))
    .catch(err=>console.error(err))
     
    

    

  }
   strCompare(str1,str2){
    return str1 === str2 ;
}
  render() {
    
     
      let pss=[];
      let values=[];
      let nb=[]
     // console.log(this.state.result);
      this.state.result.map(function (element) {
       
        pss.push(element.pss)
         values.push(element.nb)
      });
       

      
     
      //console.log(values)
    const data = {
      datasets: [
        {
          backgroundColor: "#F4D03F",
          data: values,
          label: 'lenses'
        } 
      ],
      labels: pss
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
              fontColor: "#1ABC9C"

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
          title="List Lenses By SPH"
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

export default OrdersLensesByPss;
