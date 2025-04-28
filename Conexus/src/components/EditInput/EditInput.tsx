import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { useThemeColors } from '../../utils/color';

interface IEditInput {
    value: any;
}

const EditInput: React.FC<IEditInput> = ({ value }) => {
    const { accent } = useThemeColors();
    const [data, setdata] = useState<any>(value)
    return (
        <>
            <TextInput value={data} onChange={setdata} style={[styles.input, { borderColor: accent, color: accent }]} />
        </>
    )
}

export default EditInput;

const styles = StyleSheet.create({
    input: {
        width: "94%",
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: "4.5%",
        paddingVertical: "3%",
        fontWeight: "500",
        fontSize: 16,
        margin: "auto",
        marginTop: "3.5%",
    }
})