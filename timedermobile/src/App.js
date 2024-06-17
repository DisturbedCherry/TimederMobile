import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarScreen from './pages/CalendarScreen/CalendarScreen';
import CreateEvenScreen from './pages/CreateEvenScreen/CreateEventScreen';
import CreateGroupScreen from './pages/CreateGroupScreen/CreateGroupScreen';
import EventScreen from './pages/EventScreen/EventScreen';
import GroupScreen from './pages/GroupScreen/GroupScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import MainMenu from './pages/MainMenu/MainMenu';
import MonthEventScreen from './pages/MonthEventScreen/MonthEventScreen';
import NoPage from './pages/NoPage/NoPage';
import NotificationScreen from './pages/NotificationScreen/NotificationScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import ReportIssueScreen from './pages/ReportIssueScreen/ReportIssueScreen';
import SettingsScreen from './pages/SettingsScreen/SettingsScreen';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import AllGroups from './pages/AllGroupsScreen/AllGroupsScreen'

function App() {
  return (
    <div className="phone">
      <div className="screen">
        <BrowserRouter>
          <Routes>  
            <Route index element={<WelcomeScreen/>}/>
            <Route path = "/AllGroups" element = {<AllGroups/>}/>
            <Route path = "/CalendarScreen" element = {<CalendarScreen/>}/>
            <Route path = "/CreateEventScreen" element = {<CreateEvenScreen/>}/>
            <Route path = "/CreateGroupScreen" element = {<CreateGroupScreen/>}/>
            <Route path = "/EventScreen" element = {<EventScreen/>}/>
            <Route path = "/GroupScreen" element = {<GroupScreen/>}/>
            <Route path = "/LoginScreen" element = {<LoginScreen/>}/>
            <Route path = "/MainMenu" element = {<MainMenu/>}/>
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
