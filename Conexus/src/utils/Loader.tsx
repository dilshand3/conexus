import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const Loader: React.FC = () => {
    const animations = useRef<Animated.Value[]>(Array.from({ length: 8 }, () => new Animated.Value(0))).current;

    useEffect(() => {
        animations.forEach((anim, index) => {
            Animated.loop(
                Animated.sequence([
                    Animated.delay(index * 100),
                    Animated.timing(anim, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                        easing: Easing.linear,
                    }),
                    Animated.timing(anim, {
                        toValue: 0.2,
                        duration: 300,
                        useNativeDriver: true,
                        easing: Easing.linear,
                    }),
                ])
            ).start();
        });
    }, [animations]);

    return (
        <View style={styles.container}>
            {animations.map((anim, index) => {
                const rotate = index * 45;
                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.bar,
                            {
                                transform: [
                                    { rotate: `${rotate}deg` },
                                    { translateY: -12 }, // Adjusted based on reduced size
                                ],
                                opacity: anim,
                            },
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
    },
    bar: {
        position: 'absolute',
        width: 3,
        height: 8,
        borderRadius: 50,
        backgroundColor: '#3498DB',
        shadowColor: '#3498DB',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
});
