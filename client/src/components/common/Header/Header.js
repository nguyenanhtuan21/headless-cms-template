import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="shadow-header w-full top-0 left-0 fixed bg-white">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container sm:container m-auto px-4 flex justify-between items-center">
                <div className="logo-main text-center">
                    <a href="/" className="logo-link">
                        <img className="py-[10px] max-w-[200px] max-h-[60px]" src="https://amis.misa.vn/wp-content/uploads/2020/12/logo.svg" alt="MISA AMIS - Nền tảng quản trị doanh nghiệp hợp nhất" title="MISA AMIS - Nền tảng quản trị doanh nghiệp hợp nhất" />
                    </a>
                </div>
                <ul className="menu-list flex justify-center items-center w-full leading-[60px] height-[60px]">
                    <li className={`menu-item ${styles['menu-item-dropdown']}`} >
                        <a href="/category/5/beatae" className="menu-link px-[13px] h-[60px] leading-[60px] block">Sản phẩm</a>
                    </li>
                    <li className={`menu-item ${styles['menu-item-dropdown']}`}>
                        <a href="/category/4/dolorem" className="menu-link px-[13px] h-[60px] leading-[60px] block">Giải pháp</a>
                    </li>
                    <li className="menu-item">
                        <a href="/category/2/dolores" className="menu-link px-[13px] h-[60px] leading-[60px] block">Khách hàng</a>
                    </li>
                    <li className={`menu-item ${styles['menu-item-dropdown']}`}>
                        <a href="/category/6/et" className="menu-link px-[13px] h-[60px] leading-[60px] block">Kiến thức</a>
                    </li>
                    <li className={`menu-item ${styles['menu-item-dropdown']}`}>
                        <a href="/category/3/saepe" className="menu-link px-[13px] h-[60px] leading-[60px] block">Hỗ trợ</a>
                    </li>
                    <li className={`menu-item ${styles['menu-item-dropdown']}`}>
                        <a href="/category/1/Uncategorized" className="menu-link px-[13px] h-[60px] leading-[60px] block">Công ty</a>
                    </li>
                    <li className="menu-item py=[6px] px-[13px] h-[60px] leading-[60px] block">
                        <a href="tel:0904885833" className="leading-[24px] text-primary-home flex justify-center items-center flex-col align-center h-full">
                            <div>Hotline Mua Hàng</div>
                            <div className="text-center">0904885833</div>
                        </a>
                    </li>
                    <li className="menu-item px-[13px] h-[60px] leading-[60px] block">
                        <a id={styles.MenuTrial} href="#product" className="menu-link">Dùng thử</a>
                    </li>
                    <li className="menu-item px-[13px] h-[60px] leading-[60px] block">
                        <a id={styles.MenuLogin} href="#product" className="menu-link">Đăng nhập</a>
                    </li>
                </ul>
            </nav>    
        </header>
    )
}