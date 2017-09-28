import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Drawer from './Drawer';
import BaruMI from './BaruMI';
import Promosi from './Promosi';
import Terdekat from './Terdekat';
import Terlaris from './Terlaris';
import PromoAn from './PromoAn';
import Jam24 from './Jam24';
import MenuHe from './MenuHe';
import MenuSe from './MenuSe';
import Terfavorit from './Terfavorit';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Home', () => Home);
  Navigation.registerComponent('example.Drawer', () => Drawer);
  Navigation.registerComponent('example.BaruMI', () => BaruMI);
  Navigation.registerComponent('example.Promosi', () => Promosi);
  Navigation.registerComponent('example.Terdekat', () => Terdekat);
  Navigation.registerComponent('example.Terlaris', () => Terlaris);
  Navigation.registerComponent('example.PromoAn', () => PromoAn);
  Navigation.registerComponent('example.Jam24', () => Jam24);
  Navigation.registerComponent('example.MenuHe', () => MenuHe);
  Navigation.registerComponent('example.MenuSe', () => MenuSe);
  Navigation.registerComponent('example.Terfavorit', () => Terfavorit);
}
