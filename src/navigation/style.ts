import { ScaledSheet } from 'react-native-size-matters';
import COLORS from 'utils/colors';


const styles = ScaledSheet.create({
    shadow: {
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    tabBarStyle: {
        // transform: [{ scaleX: -1 }],
        borderTopColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
        paddingVertical: 0,
        paddingHorizontal:10,
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default styles;
