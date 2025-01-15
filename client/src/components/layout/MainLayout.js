import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
export default function MainLayout({ children }) {
    return (
        <div className='pt-[60px] font-inter'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}