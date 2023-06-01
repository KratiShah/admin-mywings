import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SideBar } from './Component/sidebar/SideBar';
import { Home } from './Component/home/Home';
import { ViewUsers } from './Component/Users/ViewUsers';
import SpamUser from './Component/viewSpamUser/spamUser';
import Collabration from './Component/collaboration/collaboration';
import SignIn from './Component/signIn/singIn';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProtectedRoute from './Component/protectedRoute';
import InterestedContestent from './Component/InterestedContestent/Interest';
import { FreindProfile } from './Component/friendProfil/FriendProfile';
import { Header } from './Component/header/Header';
function App() {
  return <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <SideBar />
          <GoogleOAuthProvider clientId="517503890947-1sfdqv9okmcm0u463fot3qulcgj4ugmb.apps.googleusercontent.com">
          </GoogleOAuthProvider >
        </div>
        <div className='col-md-9'>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/viewuser" element={<ViewUsers />} />
            <Route path='/viewSpam' element={<SpamUser />} />
            <Route path='/collaborationdetails' element={<Collabration />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/interestedcontestants' element={<InterestedContestent />} />
            <Route path='/userFriendProfile' element={<FreindProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  </>
}

export default App;
