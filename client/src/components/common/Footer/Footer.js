export default function Footer() {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <img src="https://amis.misa.vn/sites/library/images/footer/ic_logo.svg" alt="Company Logo" className="mb-4" />
                        <h2 className="font-bold text-lg mb-2">CÔNG TY CỔ PHẦN MISA</h2>
                        <p className="text-gray-600 mb-2">Trụ sở chính:</p>
                        <p className="text-gray-600 mb-2">Tòa nhà Technosoft - Ngõ 15 Duy Tân, Q.Cầu giấy, Hà Nội</p>
                        <p className="text-gray-600 mb-2"><i className="fas fa-envelope"></i> contact@misa.com.vn</p>
                        <p className="text-gray-600 mb-2"><i className="fas fa-phone"></i> 0904 885 833</p>
                        <p className="text-gray-600 mb-2"><i className="fas fa-globe"></i> https://www.misa.vn/</p>
                        <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded">Tất cả sản phẩm MISA</button>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-2">Khám phá</h2>
                        <ul className="text-gray-600">
                            <li className="mb-2">Về MISA</li>
                            <li className="mb-2">Chợ ứng dụng</li>
                            <li className="mb-2">Đăng ký dùng thử</li>
                            <li className="mb-2">Đăng nhập</li>
                            <li className="mb-2">Hợp tác</li>
                            <li className="mb-2">Hỗ trợ khách hàng</li>
                            <li className="mb-2">Tuyển dụng</li>
                            <li className="mb-2">Liên hệ</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-2">Tài nguyên</h2>
                        <ul className="text-gray-600">
                            <li className="mb-2">Tài liệu - eBooks</li>
                            <li className="mb-2">Sự kiện - Webinar</li>
                            <li className="mb-2">Khóa học trực tuyến</li>
                            <li className="mb-2">Ứng dụng miễn phí</li>
                            <li className="mb-2">Trắc nghiệm chuyên môn</li>
                            <li className="mb-2">Học từ chuyên gia</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-2">Blogs</h2>
                        <ul className="text-gray-600">
                            <li className="mb-2">Tài chính - Kế toán</li>
                            <li className="mb-2">Marketing - Bán hàng</li>
                            <li className="mb-2">Quản lý nhân lực</li>
                            <li className="mb-2">Quản lý điều hành</li>
                            <li className="mb-2">Chuyển đổi số</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600"><img className="w-[35px]" src="https://amis.misa.vn/sites/library/images/footer/ic-facebook.svg" alt="ISO 9001:2015" /></a>
                        <a href="#" className="text-red-600"><img className="w-[35px]" src="https://amis.misa.vn/sites/library/images/footer/ic-youtube.svg" alt="ISO 9001:2015" /></a>
                        <a href="#" className="text-blue-700"><img className="w-[35px]" src="https://amis.misa.vn/sites/library/images/footer/ic-linkedin.svg" alt="ISO 9001:2015" /></a>
                        <a href="#" className="text-blue-500"><img className="w-[35px]" src="https://amis.misa.vn/sites/library/images/footer/ic-zalo.svg" alt="ISO 9001:2015" /></a>
                    </div>
                    <div className="flex space-x-4">
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/ic_iso90012015.svg" alt="ISO 9001:2015" />
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/ic_iso270012013.svg" alt="ISO 27001:2013" />
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/ic_cmmidev3.svg" alt="CMMI DEV/3" />
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/ic_csastar.svg" alt="CSA STAR Certification" />
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/ic_dmca.png" alt="DMCA Protected" />
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/ic_bocongthuong.svg" alt="Bộ Công Thương" />
                        <img className="w-[45px]" src="https://amis.misa.vn/sites/library/images/footer/handle_cert.png" alt="NCSC" />
                    </div>
                </div>
                <div className="text-center text-gray-600 mt-4">
                    <p>Copyright © 1994 - 2025 MISA JSC <a href="#" className="text-blue-600">Chính sách bảo mật</a></p>
                </div>
            </div>
        </footer>
    );
}