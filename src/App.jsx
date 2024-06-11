import Layout from './components/Layout';
import CartEmpty from './components/cart/CartEmpty';
import ChampionDetail from './components/champions/ChampionDetail';
import CommunityAdd from './components/community/CommunityAdd';
import CommunityEdit from './components/community/CommunityEdit';
import SkinDetail from './components/skinstore/SkinDetail';
import StoreCart from './pages/Cart/StoreCart';
import Champion from './pages/champions/Champion';
import Community from './pages/community/Community';
import Esport from './pages/esports/Esport';
import HowToPlay from './pages/howToPlay/HowToPlay';
import Join from './pages/login/Join';
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import RealLogout from './pages/login/RealLogout';
import Mainpage from './pages/main/Mainpage';
import Notice from './pages/notice/Notice';
import Requests from './pages/requests/Requests';
import SkinStore from './pages/skinstore/SkinStore';

import GlobalStyle from './styled/GlobalStyle';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Mainpage />} />
                        <Route path="/how-to-play" element={<HowToPlay />} />
                        <Route path="/champions" element={<Champion />} />
                        <Route path="/champion/:id" element={<ChampionDetail />} />
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/esports" element={<Esport />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/communityadd" element={<CommunityAdd />} />
                        <Route path="/communityedit" />
                        <Route index path=":editID" element={<CommunityEdit />} />

                        <Route path="/store">
                            <Route index element={<SkinStore />} />
                            <Route path=":skinID" element={<SkinDetail />} />
                        </Route>

                        <Route path="/cart" element={<StoreCart />} />
                        <Route path="/emptycart" element={<CartEmpty />} />
                        <Route path="/requests" element={<Requests />} />
                    </Route>
                    <Route path="/join" element={<Join />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/bye" element={<RealLogout />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
