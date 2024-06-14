import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarScreen from './components/CalendarScreen/CalendarScreen';
import CreateEvenScreen from './components/CreateEvenScreen/CreateEvenScreen';
import CreateGroupScreen from './components/CreateGroupScreen/CreateGroupScreen';
import EventScreen from './components/EventScreen/EventScreen';
import GroupScreen from './components/GroupScreen/GroupScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import MonthEventScreen from './components/MonthEventScreen/MonthEventScreen';
import NoPage from './components/NoPage/NoPage';
import NotificationScreen from './components/NotificationScreen/NotificationScreen';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import ReportIssueScreen from './components/ReportIssueScreen/ReportIssueScreen';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

function App() {
  return (
    <div className="phone">
      <div className="screen">
        <BrowserRouter>
          <Routes>  
            <Route index element={<WelcomeScreen/>}/>
            <Route path = "/CalendarScreen" element = {<CalendarScreen/>}/>
            <Route path = "/CreateEvenScreen" element = {<CreateEvenScreen/>}/>
            <Route path = "/CreateGroupScreen" element = {<CreateGroupScreen/>}/>
            <Route path = "/EventScreen" element = {<EventScreen/>}/>
            <Route path = "/GroupScreen" element = {<GroupScreen/>}/>
            <Route path = "/LoginScreen" element = {<LoginScreen/>}/>
            <Route path = "/MonthEventScreen" element = {<MonthEventScreen/>}/>
            <Route path = "*" element = {<NoPage/>}/>
            <Route path = "/NotificationScreen" element = {<NotificationScreen/>}/>
            <Route path = "/ProfileScreen" element = {<ProfileScreen/>}/>
            <Route path = "/ReportIssueScreen" element = {<ReportIssueScreen/>}/>
            <Route path = "/SettingsScreen" element = {<SettingsScreen/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
