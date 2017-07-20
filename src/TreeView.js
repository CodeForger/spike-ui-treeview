import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Converter from 'number-to-words';

const locations = [
  {
    name: 'Singapore',
    locations: [
      {
        name: 'Ang Mo Kio',
        locations: []
      },
      {
        name: 'Changi',
        locations: []
      },
      {
        name: 'Chinatown',
        locations: [
          {
            name: 'China Square Central',
            locations: []
          },
          {
            name: 'Far East Square',
            locations: []
          }
        ]
      }
    ]
  },
  {
    name: 'Malaysia',
    locations: []
  }
]

class TreeNodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    console.log(this.props);
    return (
      <ListItem
        primaryText={`${this.props.level > 0 ? '┗ ' : ''}${this.props.name}`}
        open={this.state.open}
        onNestedListToggle={this.handleToggle}
        nestedLevel={this.props.level}
        nestedItems={
          this.props.locations.map(
            (loc, idx) => <TreeNodeView key={idx} level={this.props.level + 1} {...loc} />)
            .concat(<ListItem primaryText={`+ Add ${Converter.toWordsOrdinal(this.props.level + 2)} Level Site, eg: ...`}/>)}
      />
    )
  }
}

class TreeView extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <List>
          <Subheader>Locations</Subheader>
          {locations.map((loc, idx) => <TreeNodeView key={idx} level={0} {...loc}/>)}
          <ListItem primaryText={`+ Add ${Converter.toWordsOrdinal(1)} Level Site, eg: ...`}/>
        </List>
      </MuiThemeProvider>
    )
  }
}

export default TreeView