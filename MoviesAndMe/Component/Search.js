import React from 'react';
import {View, TextInput, Button, StyleSheet, FlatList, Text} from 'react-native';
//look likes we can give every name we want
import FilmItem from '../Component/FilmItem.js';
import { getFilmsFromTMDBApiWithSearchText } from '../API/TMDBApi.js'

class Search extends React.Component {

    constructor(props)
    {
        super(props);
        this.searchedText = "";
        this.state = {
            film: [] 
        }
    }

    _searchTextInputChangedText(text) {
        this.searchedText = text;
    }

    // underscore mean is a private method, but in javascript private didnt exist
    _loadFilms() 
    {
        if (this.searchedText.length > 0) 
        {
            getFilmsFromTMDBApiWithSearchText(this.searchedText).then(data => {
                this.setState({film: data.results})
            });
        }
    }

    render() {
        console.log("RENDER");
        return (
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.title} 
                    placeholder="Titre ..."
                    onChangeText={(text) => this._searchTextInputChangedText(text)}
                    />
                <Button style={{ height: 50 }} title="Rechercher" onPress={()=> this._loadFilms()}/>
                <FlatList 
                    data={this.state.film}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 24
    },
    title: {
        margin: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});
export default Search;