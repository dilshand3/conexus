import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../utils/Icon';
import { useThemeColors } from '../../utils/color';

const UserMessage: React.FC = () => {
    const {accent} = useThemeColors();
    return (
        <View style={styles.container}>
            <View style={[styles.messageBubble,{backgroundColor : accent}]}>
                <Text style={styles.messageText}>Japan looks amazing!</Text>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>10:10</Text>
                    <Icon
                        name="done-all"
                        type="MaterialIcons"
                        color="blue"
                        size={16}
                        style={{ marginLeft: 4 }}
                    />
                </View>
            </View>
        </View>
    );
};

export default UserMessage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    messageBubble: {
        borderRadius: 14,
        paddingHorizontal: 12,
        paddingVertical: 8,
        maxWidth: '80%',
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 4,
    },
    timeText: {
        fontSize: 12,
        color: '#fff',
    },
});
