import { useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios';

export const Home = () => {

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = async () => {
	const response = await axios.get("https://sunnygo-stg.onrender.com/api/v1.4.0/users/1/favorites");
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'} }/>
    )
}
