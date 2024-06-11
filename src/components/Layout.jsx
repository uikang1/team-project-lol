import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <div className="block"></div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
