/**
 * Created by hafiz on 3/25/17.
 */
import React from 'react';

import { Text, View } from 'react-native';

const Albumdetails = (props) =>{

    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default Albumdetails;