import { Alert, ImagePickerIOS } from "react-native"


import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

const ImgPicker = props => {

    //permission

    const verifyPermissions = async() => {
        const result = await Permissions.askAsync(Permissions.CAMERA)
        if(result.status !== 'granted'){
            Alert.alert(
                'Permissions arent granted!',
                'give permissions to use the app',
                [{text:'Okay'}]);
            return false;
        }
        return true;
    }

    //picker function 
    const takeImageHandler = async() => {
       const hasPermission =  await verifyPermissions();
       if(!hasPermission){
           return;
       }
        ImagePicker.launchCameraAsync()
    }

    //UI 

    <Button onPress ={ }> </Button>

}
