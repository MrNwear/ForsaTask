
import React, {useEffect, useState} from 'react';
import {Platform, NativeModules} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {setLanguage} from 'i18n';
import AppContainer from 'navigation';

let App: React.FC;
const awaitToExecute = Promise.all([AsyncStorage.getItem('language')]);

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const Bootstrap = () => {
  const [loaded, setLoaded] = useState(false);
  let langauge = deviceLanguage.substring(0, 2) === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    awaitToExecute.then(value => {
      setLanguage((value[0] as any) || langauge);
      App = require('./App').default;
      setLoaded(true);
    });
  }, [langauge]);

  if (!loaded) return null;
  return <AppContainer />;
};

export default Bootstrap;
