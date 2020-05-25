import React, {Component, useState} from 'react'
import { StyleSheet, Text, View, Row } from 'react-native'
import Appbar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import { ButtonGroup, Button, IconButton, Grid, Container, Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze'
import PersonIcon from '@material-ui/icons/PersonOutline'

class TopBar extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
     styles = StyleSheet.create({
        Title: {
          color: '#313638',
          fontWeight: '800',
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'Arial'
        },
        View: {
            zIndex: 100,
        }
      });

    render() {
        let drawerStyle = {
            padding: "30px",
            backgroundColor: "#313638",
            height: '100%',
            width: '125px'

        };
        let ListText = {
            color: "#E4B363",
            fontSize: "20px",
            fontWeight: "800",
            padding: "3%",
            
        }
        return (
            <View style={this.styles.View}>
                <Appbar position="fixed" style={{ background: '#E4B363' }}>
                    <table width="100%">
                    <tr>
                        <th>
                        <IconButton aria-label="dehaze" onClick={() => {this.setState({isOpen: !this.state.isOpen}), console.log(this.state)}}>
                                <DehazeIcon />
                            </IconButton>
                        </th>
                        <th>
                        <Text style= {this.styles.Title}>J-Notes</Text>
                        </th>
                        <th>
                        <IconButton aria-label="personIcon" onClick={() => {console.log(this.state.isOpen)}}>
                                <PersonIcon />   
                            </IconButton>
                        </th>
                    </tr>
                    </table>

                </Appbar>
                <Drawer anchor='left' open={this.state.isOpen} onClose={
                    () => {this.setState({isOpen: !this.state.isOpen})}
                }>
                <div style = {drawerStyle}>
                    
                <List>
                    <ListItem button onClick={()=> {

                    }}>
                    <ListItemText primary={<Typography type="h2" style={ListText}>Home</Typography>} />                 
                    </ListItem>
                    <ListItem button onClick={()=> {
                        
                    }}>
                    <ListItemText primary={<Typography type="h2" style={ListText}>Notes</Typography>} />
                    </ListItem>
                    <ListItem button onClick={()=> {
                        
                    }}>
                    <ListItemText primary={<Typography type="h2" style={ListText}>Something</Typography>} />
                    </ListItem>                    
                    <ListItem button onClick={()=> {
                        
                    }}>
                    <ListItemText primary={<Typography type="h2" style={ListText}>Settings</Typography>} />
                    </ListItem>
                    <ListItem button onClick={()=> {
                        
                    }}>
                    <ListItemText primary={<Typography type="h2" style={ListText}>Log Out</Typography>} />
                    </ListItem>                                    
                </List>
                </div>
                </Drawer>
            </View>

        )
    }
}

export default TopBar;