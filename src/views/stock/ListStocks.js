import React, { Component } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import Refresh from '@material-ui/icons/Autorenew';



const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  pdf: forwardRef((props, ref) => <pdf {...props} ref={ref} />)
};

class ListStocks extends Component {
  state = {
    columns: [
      {
        title: 'no', field: 'no', editable: 'never', cellStyle: {
          backgroundColor: '#B1D9FE',
          color: '#FFF'
        },
        headerStyle: {
          backgroundColor: '#B1D9FE',
        }
      },
      { title: 'Initial Quantity', field: 'initialQuantity' },
      { title: 'Total Quantity', field: 'totalquantity' },
      { title: 'Available Quantity', field: 'availablequantity' },
      { title: 'Category', field: 'productCategory', lookup: { Lenses: 'Lenses',Product:'Product' } },
    ],
    data: [],
    selectedRow: null,
    Orderdate: "",
    Category: "",
    Products: "",
    Status: "",
    Comment: "",
    qte: 0,
    pss: 0,
    order: "",
    selectedorderpdf: {}

  }
  componentDidMount() {
    this.getStocks();

  }





  getStocks = _ => {
    const userId = JSON.parse(localStorage.getItem('user'));
    fetch('https://mocbackend.cleverapps.io/stock/list')
      .then(response => response.json())
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.error(err))
  }
  render() {


    return (
      <MaterialTable
        icons={tableIcons}
        title="stock"
        columns={this.state.columns}
        data={this.state.data}

        actions={[
          {
            icon: Refresh,
            tooltip: 'Refresh',
            isFreeAction: true,
            onClick: () => window.location.reload(false)
          },

        ]}
        editable={{
         /* onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),*/
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();

                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }

              }, 600);
            }),
         /* onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();


                window.location.reload(false);
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);

                  return { ...prevState, data };
                }


                );
              }, 600);
            }),
*/

        }}

        onRowClick={((evt, selectedRow) =>
          //todo Dialog 
          console.log("")
           


        )}


        options={{

          headerStyle: {
            backgroundColor: '#82BFE8',
            color: '#FFF'
          },
          // exportButton: true,
          filtering: true,
          grouping: true,
          sorting: true,

          rowStyle: rowData => (


            {

            })
        }}

      />

    );

  }

}
export default ListStocks;