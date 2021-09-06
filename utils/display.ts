import { Dimensions } from 'react-native';

const SCREEN_WIDTH = 360

const display = (size: number) => {
    const widthDimensi = Dimensions.get('screen');
    const dimensi = (widthDimensi.width / SCREEN_WIDTH) * size;

    return Number(dimensi);
}

export default display