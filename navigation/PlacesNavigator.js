//dependencies 
import {createStackNavigator, createAppContainer} from 'react-navigation';


//screens you want to navigate to
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';


const PlacesNavigator = createStackNavigator(

    {
        Places: PlacesListScreen,
        PlaceDetailScreen: PlaceDetailScreen,
        NewPlaceScreen: NewPlaceScreen,
        Map:MapScreen
    },
    {

    
    defaultNavigationOptions: {
        headerStyle: {
           backgroundColor:  Platform.OS === 'android' ? Colors.primary: ''}
    },
    headerTintColor: Platform.OS === 'android' ? 'white': ''

}
}
    
    )



export default createAppContainer(PlacesNavigator)
