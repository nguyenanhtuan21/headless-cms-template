import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
export default function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}