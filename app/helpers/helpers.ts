import ImageColors from "react-native-image-colors";

const getImageColors =  async (imageURL: string) => {        
    const colors = await ImageColors.getColors(imageURL, {});
    let primary, secondary;

    if (colors.platform === 'android') {
        primary = colors.dominant;
        secondary = colors.average;

    } else {
        primary = colors.primary;
        secondary = colors.secondary
    }

    return {
        primary,
        secondary,
    }
}

export {getImageColors};