import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';

class PercentageLensesAndProduct extends Component {
  state = {
    nblenses: 0,
    nbproducts: 0,
    persentageLenses: 0,
    percentageProduct: 0,
    total: 0
  }
  componentDidMount() {
    this.percentages();
  }
  percentages = () => {
    axios.get('https://mocbackend.cleverapps.io/ordersLentille/countPercentage')
      .then(response => this.setState({ nblenses: response.data.data[0].nbLenses, nbproducts: response.data.data[0].nbProduct, total: response.data.data[0].total })

      )
      .catch(function (error) {

        console.log(error);
      })

  }

  render() {
    const nb1 = Math.round((this.state.nblenses / (this.state.total)) * 100);
    const nb2 = Math.round((this.state.nbproducts / (this.state.total)) * 100);

    const options = {
      animation: false,
      cutoutPercentage: 80,
      layout: { padding: 0 },
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {

        borderWidth: 1,
        enabled: true,

        intersect: false,
        mode: 'index',

      }
    };
    const data = {
      datasets: [
        {
          data: [nb1, nb2],
          backgroundColor: [
            "#7AB8DE",
            "#DE4E50",

          ],
          borderWidth: 8,
          borderColor: colors.common.white,
          hoverBorderColor: colors.common.white
        }
      ],
      labels: ['Lenses', 'Product']
    }

    const devices = [
      {
        title: 'Lenses',
        value: nb1,
        color: "#7AB8DE",

      },
      {
        title: 'Product',
        value: nb2,
        color: "#DE4E50",
      }

    ];
    return (
      <Card
        style={{ height: '100%' }}
      >
        <CardHeader title="Lenses / Product" />
        <Divider />
        <CardContent>
          <Box
            height={300}
            position="relative"
          >
            <Doughnut
              data={data}
              options={options}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
          >
            {devices.map(({
              color,
              title,
              value
            }) => (
                <Box

                  key={title}
                  p={1}
                  textAlign="center"
                >

                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    {title}
                  </Typography>
                  <Typography
                    style={{ color }}
                    variant="h2"
                  >
                    {value != NaN ? value : 0}
                    %
              </Typography>
                </Box>
              ))}
          </Box>
        </CardContent>
      </Card>

    )

  }

}

export default PercentageLensesAndProduct;
