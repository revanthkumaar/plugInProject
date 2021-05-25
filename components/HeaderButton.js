import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';



const CustomHeaderButton = props => {
    return <HeaderButton color={Platform.OS==='android'? 'white':''}/>
}