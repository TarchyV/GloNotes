import React, {Component, useState} from './node_modules/react'
import { StyleSheet, Text, View, Row } from 'react-native'
import zIndex from './node_modules/@material-ui/core/styles/zIndex';
import Grid from './node_modules/@material-ui/core/Grid';
import { Paper, Fab } from './node_modules/@material-ui/core';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add'
import { db } from './config'

let addItem = item => {
  db.ref('/notes/' + item).update({
    'title' : 'null',
    'note' : 'null'
  })
}
class HomePage extends React.Component {


    styles = StyleSheet.create({
          background: {
            backgroundColor: '#313638',
            height: '95%',
            width: 'auto',
            top: '5%',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            zIndex: -1,
          },
    
      });
      useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          height: '50%',
          padding: '2%'
        },
        paper: {
          paddingTop: '100px',
          height: '30%',
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));


      createKey = () =>{
        let r = Math.random().toString(36).substring(2)
        addItem(r);

       }




      render() {

        return(
            <View style={this.styles.background}>
              <div className={this.useStyles.root}>

              <Grid container>
                <NoteCard></NoteCard>
             
              </Grid>
              </div>
            <Fab aria-label="add" style = {{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        backgroundColor: "#E4B363"
            }} onClick= {() => this.createKey(this) }>
              <AddIcon />

            </Fab>
            </View>
        );



      }








}

export default HomePage;




function NoteCard(props) {

    return (
      <Grid item xs={'3'}>
        
        <div style={{
          backgroundColor: '#E4B363', 
          height: '9em',
          width: '7em',
          margin: '1.5em',
          padding: '10%'
          }}>
        <Text style ={{
          fontWeight: '600', 
          fontSize: '16px', 
          textAlign: 'center'
          }}>
          The Title of the Note Goes Here oh no is it still autosizing it even
          </Text>
        </div>
      </Grid>
    )
  
}