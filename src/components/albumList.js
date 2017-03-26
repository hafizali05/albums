import React, {Component} from 'react';

import { View } from 'react-native';

import axios from 'axios';

import Albumdetails from './Albumdetails';

class AlbumList extends Component {
    state = {album: [] };
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({album:response.data}))
    }

    renderAlbums(){
        return this.state.album.map(album =>
            <Albumdetails key = {album.title} album={album}/>
        )
    }

    render(){
        console.log('this.state',this.state);
        let { viewStyle } = styles;
        let { textStyle } = styles;
        return (
            <View style={ viewStyle }>
                {/*<Text style = { textStyle }>THIS IS GOING TO BE AN NO IMAGE Yp</Text>*/}
                {this.renderAlbums()}
            </View>
        )
    }
}

let styles = {
    viewStyle: {
        height:300,
        backgroundColor:'red'
    },
    textStyle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    }
}

export  default AlbumList