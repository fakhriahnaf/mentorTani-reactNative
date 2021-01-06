import React from 'react'
//import SplashScreen from './pages/splash-screen/splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/index-router';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import { Loading } from './components/index-components';






const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  console.log('state global :', stateGlobal);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position='top' />
      {stateGlobal.loading && <Loading/>}
    </>
  )
};
const App =() => {
  return(
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App;

