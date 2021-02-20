import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { colors } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Block from '@material-ui/icons/Block';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import { Component } from 'react';
class ListClients extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    this.getClientsInformations();
  }
  getClientsInformations = _ => {

    fetch('https://mocbackend.cleverapps.io/api/user/list5Clients/')
      .then(response => response.json())
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.error(err))
  }
  render() {
    return (
      <Card

      >
        <CardHeader
          style={{ height: '100%' }}
          title="List Clients"
        />
        <Divider />
        <List>
          {this.state.data.map((Clients, i) => (
            <ListItem
              divider={i < Clients - 1}
              key={Clients.id}
            >
              <ListItemAvatar>
                <Avatar style={{
                  height: 48,
                  width: 48
                }}
                  alt="Client" src="/static/images/avatars/avatar_5.png"

                />
              </ListItemAvatar>
              <ListItemText
                primary={Clients.FirstName != null ? Clients.FirstName : "" + " " + Clients.LastName != null ? Clients.LastName : ""}

                secondary={Clients.Adresse != null ? Clients.Adresse : "" + " " + Clients.city != null ? Clients.city : "" + " " + Clients.Country != null ? Clients.Country : ""}
              />
              <IconButton
                edge="end"
                size="small"
              // style={{color:"green"}}
              >
                <CheckCircleOutline />
              </IconButton>
              <IconButton
                edge="end"
                size="small"
              // style={{color:"red"}}
              >
                <Block />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Divider />
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
            component={RouterLink}
            to="../customers"
          >
            View all
        </Button>
        </Box>
      </Card>


    );
  }
}
export default ListClients;
