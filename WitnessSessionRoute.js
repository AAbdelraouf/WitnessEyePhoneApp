import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SocialSection from './SocialSection.js';
import CaseType from './CaseType.js';
import App from './App.js'
import WriteWitnessSession from './WriteWitnessSession.js';

const WitnessSessionRoute = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "SocialSection"  component = {SocialSection}  title = "Witness stories" initial = {true}/>
         <Scene key = "CaseType" component = {CaseType} title = "Type" />
         <Scene key = "WriteWitnessSession" component = {WriteWitnessSession} title = "WriteWitnessSession" />
         <Scene key = "app"   component = {App}   title = "App" />
      </Scene>
   </Router>
)
export default WitnessSessionRoute;