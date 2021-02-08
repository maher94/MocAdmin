import axios from 'axios';

import React from 'react';
  
export const updateStatus = (orderid, OrderType,status) => {


  orderid.forEach(element => {
  

  // url de backend
  const baseUrl = "http://mocbackend.cleverapps.io/orders" + OrderType + "/updateStatus/" + element
  // parameter data post
  const datapost = {
    Status: status,

  }

  axios.post(baseUrl, datapost)
    .then(response => {
      if (response.data.success) {
        
       // alert("Order Updated to Status "+status)
        //window.location.reload(false)
      }
      else {
        alert("Error when updating status ")

      }
    })
    .catch(error => {
      alert(error)
      console.log(error)
    })
  });
}
export const lensesPayment = (orderid, amount) => {

 
  // url de backend
  const baseUrl = "http://mocbackend.cleverapps.io/ordersLentille/LensesPayment/"+amount+"/"+ orderid
  const UrlAmoutStillTopay = "http://mocbackend.cleverapps.io/ordersLentille/amountStillToPay/"+ orderid
  axios.get(baseUrl)
    .then(response => {
     
      if (response.data.success==true) {
        axios.get(UrlAmoutStillTopay)
        .then(response2 => {
         
          if (response.data.success==true) {
            
           if(response2.data.data[0].amountStillToPay==0) {
            const baseUrl2 = "http://mocbackend.cleverapps.io/ordersLentille/updateStatus/" + orderid
             
            const datapost = {
              Status: "Paid",
            }
          
            axios.post(baseUrl2, datapost)  .then(response2 => {if (response2.data.success==true){window.location.reload(false)}})
           
           }  
           else (window.location.reload(false))
          }
          else {
            alert("Error")
    
          }
        })
        .catch(error => {
          alert(error )
          console.log(error)
        })
      }
      else {
        alert("Error ")

      }
    })
    .catch(error => {
      alert(error)
      console.log(error)
    })
  
}
export const productPayment = (orderid, amount) => {

 
  // url de backend
  const baseUrl = "http://mocbackend.cleverapps.io/ordersProduit/productPayment/"+amount+"/"+ orderid
  const UrlAmoutStillTopay = "http://mocbackend.cleverapps.io/ordersProduit/amountStillToPay/"+ orderid

  axios.get(baseUrl)
    .then(response => {
     
      if (response.data.success==true) {
        axios.get(UrlAmoutStillTopay)
        .then(response2 => {
         
          if (response.data.success==true) {
            
           if(response2.data.data[0].amountStillToPay==0) {
            const baseUrl2 = "http://mocbackend.cleverapps.io/ordersProduit/updateStatus/" + orderid
             
            const datapost = {
              Status: "Paid",
            }
          
            axios.post(baseUrl2, datapost).then(response2 => {if (response2.data.success==true){window.location.reload(false)}})
           
           }  
           else (window.location.reload(false))
          }
          else {
            alert("Error")
    
          }
        })
        .catch(error => {
          alert(error )
          console.log(error)
        })
      }
      else {
        alert("Error ")

      }
    })
    .catch(error => {
      alert(error)
      console.log(error)
    })
  
  
}

export default { updateStatus,lensesPayment,productPayment}
