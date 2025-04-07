import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Icon from '../../utils/Icon';

const Search: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <Icon name='search' type='Ionicons' color='#3498DB' size={24} />
                <TextInput
                    placeholder='Search with username'
                    placeholderTextColor="#3498DB"
                    style={styles.input}
                />
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "4%",
        backgroundColor: "#F4FBFF",
        flex: 1,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#3498DB",
        borderWidth: 1
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#3498DB',
        marginLeft: 10,
    },
});
