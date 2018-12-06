import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SocialSection from './SocialSection.js';
import CaseType from './CaseType.js';
import App from '../App.js';
import WriteWitnessSession from './WriteWitnessSession.js';
import SignUpPage from './Users/SignUpPage.js';
import Profile from '../Profile.js'

const WitnessSessionRoute = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "SocialSection"  component = {SocialSection}  title = "SocialSection" initial = {true}/>
         <Scene key = "CaseType" component =  {CaseType} title = "CaseType" />
         <Scene key = "WriteWitnessSession" component = {WriteWitnessSession} title = "WriteWitnessSession" />
         <Scene key = "SignUpPage"   component = {SignUpPage}   title = "SignUpPage" />
         <Scene key = "Profile"   component = {Profile}   title = "Profile" />
         <Scene key = "App"   component = {App}   title = "App" />
      </Scene>
   </Router>
)
export default WitnessSessionRoute;
