import { useColorScheme } from "react-native";

interface themeColor {
    background: string;
    color: string;
    accent: string;
}

interface colorPalette {
    lightColor: themeColor;
    darkColor: themeColor;
}

const Colors: colorPalette = {
    lightColor: {
        background: '#FFFFFF',
        color: '#2C3E50',
        accent: '#3498DB',
    },
    darkColor: {
        background: '#2C3E50',
        color: '#F4FBFF',
        accent: '#3498DB',
    },
}

export const useThemeColors = (): themeColor => {
    const scheme = useColorScheme();
    return scheme === "dark" ? Colors.darkColor : Colors.lightColor
}