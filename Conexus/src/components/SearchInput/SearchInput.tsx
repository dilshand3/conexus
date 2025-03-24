import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';
import Icon from "../../utils/Icon";
import { useThemeColors } from "../../utils/color";

interface input{
      placeholder : string;
}

const SearchInput : React.FC<input> = ({placeholder}) => {
    const { color } = useThemeColors();
    return (
        <View style={styles.searchContainer}>
            <Icon name='search' color={color} size={28} type='Ionicons' />
            <TextInput placeholder={placeholder} style={styles.searchInput} />
        </View>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4FBFF',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#2C3E50',
    },
})