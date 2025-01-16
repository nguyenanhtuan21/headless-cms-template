// import Image from "next/image";
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          <div className="bg-blue-700 text-white text-center py-2">
            <span>[Hot] - MISA AMIS được công nhận là Thương hiệu Quốc gia Việt Nam trao tặng bởi Thủ tướng chính phủ</span>
            <button className="bg-yellow-400 text-black ml-2 px-2 py-1 rounded">Xem ngay</button>
          </div>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Nền tảng quản trị doanh nghiệp hợp nhất</h1>
              <p className="text-lg text-gray-600 mb-8">Giải pháp chuyển đổi số nhanh chóng - dễ dàng - chi phí hợp lý cho mọi doanh nghiệp.</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Đăng ký tư vấn</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Dùng thử miễn phí</button>
                <button className="flex items-center text-blue-600">
                  <i className="fas fa-play-circle text-2xl mr-2"></i> Play Video
                </button>
              </div>
            </div>
            <div className="mt-12">
              <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/view-all-2.webp" alt="Illustration of business management platform with various modules and features" className="w-full max-w-4xl" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Một nền tảng cho mọi nhu cầu của doanh nghiệp</h1>
            <p className="text-gray-600 mt-2">Được tách thành các phân hệ nhỏ giúp doanh nghiệp lựa chọn ứng dụng phù hợp với từng thời kỳ phát triển. Triển khai dễ dàng, nhanh chóng đạt hiệu quả từng phần và phù hợp với khả năng tài chính</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Tài chính - Kế toán</h2>
                <a href="#" className="text-blue-600 text-sm flex">Xem thêm <img width="20" height="21px" alt="AMIS" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-external.svg" className="lazyloaded" data-ll-status="loaded" /></a>
              </div>
              <p className="text-gray-600 mb-4">Bộ giải pháp quản lý hoạt động tài chính - kế toán của doanh nghiệp</p>
              <div className="space-y-4 grid grid-cols-2">
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-act.svg" alt="Kế toán icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Kế toán</h3>
                    <p className="text-gray-600 text-sm">Kế toán doanh nghiệp</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-mTax.svg" alt="Thuế điện tử icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Thuế điện tử</h3>
                    <p className="text-gray-600 text-sm">Kê khai và nộp thuế</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/misa-esign.svg" alt="Chữ ký số icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Chữ ký số</h3>
                    <p className="text-gray-600 text-sm">Dịch vụ chữ ký số</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-mua-hang.svg" alt="Mua hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Mua hàng</h3>
                    <p className="text-gray-600 text-sm">Quản lý quy trình mua hàng</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-mein.svg" alt="Hóa đơn điện tử icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Hóa đơn điện tử</h3>
                    <p className="text-gray-600 text-sm">Phát hành và xử lý hóa đơn</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/jetpay.svg" alt="Ngân hàng điện tử icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Ngân hàng điện tử</h3>
                    <p className="text-gray-600 text-sm">Kết nối ngân hàng điện tử</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Marketing - Bán hàng</h2>
                <a href="#" className="text-blue-600 text-sm flex">Xem thêm <img width="20" height="21px" alt="AMIS" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-external.svg" className="lazyloaded" data-ll-status="loaded" /></a>
              </div>
              <p className="text-gray-600 mb-4">Bộ giải pháp CRM quản lý marketing, bán hàng, chăm sóc khách hàng</p>
              <div className="space-y-4 grid grid-cols-2">
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-mkt.svg" alt="Marketing icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Marketing</h3>
                    <p className="text-gray-600 text-sm">Tự động hóa Marketing</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-khuyen-mai.svg" alt="CRM icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">CRM</h3>
                    <p className="text-gray-600 text-sm">Quản lý khách hàng, bán hàng</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-eshop.svg" alt="Khuyến mại icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Khuyến mại</h3>
                    <p className="text-gray-600 text-sm">Quản lý khuyến mại</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-crm.svg" alt="Nhà hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Nhà hàng</h3>
                    <p className="text-gray-600 text-sm">Quản lý nhà hàng, quán cafe</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/cukcuk.svg" alt="Cửa hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Cửa hàng</h3>
                    <p className="text-gray-600 text-sm">Quản lý cửa hàng, bán lẻ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Quản trị nguồn nhân lực</h2>
                <a href="#" className="text-blue-600 text-sm flex">Xem thêm <img width="20" height="21px" alt="AMIS" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-external.svg" className="lazyloaded" data-ll-status="loaded" /></a>
              </div>
              <p className="text-gray-600 mb-4">Bộ giải pháp phục vụ công tác quản trị nguồn nhân lực</p>
              <div className="space-y-4 grid grid-cols-2">
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-tuyen-dung.svg" alt="Marketing icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Tuyển dụng</h3>
                    <p className="text-gray-600 text-sm">Quản lý tuyển dụng</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-muc-tieu.svg" alt="CRM icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Mục tiêu</h3>
                    <p className="text-gray-600 text-sm">Quản lý mục tiêu</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/amis-tien-luong.svg" alt="Khuyến mại icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Tiền lương</h3>
                    <p className="text-gray-600 text-sm">Tính lương tự động</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-tt-nhan-su.svg" alt="Nhà hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Thông tin nhân sự</h3>
                    <p className="text-gray-600 text-sm">Hệ thống thông tin nhân sự</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-danh-gia.svg" alt="Cửa hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Đánh giá</h3>
                    <p className="text-gray-600 text-sm">Đánh giá năng xuất, năng lực</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/amis-cham-cong.svg" alt="Cửa hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Chấm công</h3>
                    <p className="text-gray-600 text-sm">Chấm công, thời gian làm việc</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Văn phòng số</h2>
                <a href="#" className="text-blue-600 text-sm flex">Xem thêm <img width="20" height="21px" alt="AMIS" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-external.svg" className="lazyloaded" data-ll-status="loaded" /></a>
              </div>
              <p className="text-gray-600 mb-4">Bộ giải pháp quản trị công việc, giao tiếp nội bộ, điều hành văn phòng số.</p>
              <div className="space-y-4 grid grid-cols-2">
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-cong-viec.svg" alt="Marketing icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Công việc</h3>
                    <p className="text-gray-600 text-sm">Quản lý công việc</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-wesign.svg" alt="CRM icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Tài liệu điện tử</h3>
                    <p className="text-gray-600 text-sm">Ký tài liệu điện tử</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/amis-tai-san.svg" alt="Khuyến mại icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Tài sản</h3>
                    <p className="text-gray-600 text-sm">Quản lý tài sản</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-quy-trinh.svg" alt="Nhà hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Quy trình</h3>
                    <p className="text-gray-600 text-sm">Quản lý quy trình</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ic-ghi-chep.svg" alt="Cửa hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Ghi chép</h3>
                    <p className="text-gray-600 text-sm">Lưu trữ tài liệu</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://amis.misa.vn/sites/amis/images/pages/home-v2/amis-mxh.svg" alt="Cửa hàng icon" className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-gray-800 font-medium">Mạng xã hội</h3>
                    <p className="text-gray-600 text-sm">Truyền thông nội bộ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 bg-blue-600">
          <div className="text-white lg:w-1/2 space-y-8">
            <h1 className="text-3xl lg:text-4xl font-bold">Đăng ký nhận tư vấn giải pháp quản trị doanh nghiệp toàn diện và bền vững</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                <img loading="lazy" alt="AMIS" width="36" height="36" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/nen-tang.svg" className="lazyloaded w-[35px]" data-ll-status="loaded"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Nền tảng toàn diện</h2>
                  <p>Đáp ứng mọi nghiệp vụ, nhu cầu về quản trị của doanh nghiệp.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                <img loading="lazy" alt="AMIS" width="36" height="36" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/ket-noi.svg" className="lazyloaded w-[35px]" data-ll-status="loaded"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Kết nối hợp nhất</h2>
                  <p>Sẵn sàng mở rộng, kết nối với các ứng dụng khác bên trong và bên ngoài MISA AMIS.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                <img loading="lazy" alt="AMIS" width="36" height="36" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/cong-nghe-tien-tien.svg" className="lazyloaded w-[35px]" data-ll-status="loaded"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Công nghệ tiên tiến</h2>
                  <p>Sử dụng công nghệ Cloud và Trí thông minh nhân tạo AI giúp tiết kiệm thời gian, công sức.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                <img loading="lazy" alt="AMIS" width="36" height="36" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/uy-tin-30nam.svg" className="lazyloaded w-[35px]" data-ll-status="loaded"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Uy tín 30 năm phát triển</h2>
                  <p>MISA là đơn vị chuyên tư vấn và cung cấp giải pháp chuyển đổi số cho hàng trăm nghìn doanh nghiệp.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                <img loading="lazy" alt="AMIS" width="36" height="36" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/chat-luong-quoc-te.svg" className="lazyloaded w-[35px]" data-ll-status="loaded"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Chất lượng chuẩn quốc tế</h2>
                  <p>Sản phẩm đạt chuẩn quốc tế về an toàn thông tin và lưu trữ dữ liệu ở mức bảo mật cao nhất.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                <img loading="lazy" alt="AMIS" width="36" height="36" src="https://amis.misa.vn/sites/amis/images/pages/home-v2/giai-thuong.svg" className="lazyloaded w-[35px]" data-ll-status="loaded"/>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Giải thưởng chuyên môn</h2>
                  <p>Nền tảng MISA AMIS đã nhận được nhiều giải thưởng như Đổi Mới Sáng Tạo, Sao Khuê, Sao Vàng Đất Việt, ...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/3 mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
            <p className="mb-4">Nhận DEMO toàn bộ tính năng miễn phí</p>
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên *" className="w-full p-3 border border-gray-300 rounded-lg" />
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Bộ giải pháp Quản trị Doanh nghiệp tổng thể</option>
              </select>
              <input type="text" placeholder="Số điện thoại *" className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email *" className="w-full p-3 border border-gray-300 rounded-lg" />
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Chức vụ/Vai trò *</option>
              </select>
              <input type="text" placeholder="Tên doanh nghiệp/Mã số thuế *" className="w-full p-3 border border-gray-300 rounded-lg" />
              <p className="text-sm text-gray-600">Bằng cách nhấn vào nút Nhận tư vấn miễn phí, bạn đã đồng ý với <a href="#" className="text-blue-600">Chính sách quyền riêng tư</a> của MISA.</p>
              <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg font-bold">Nhận tư vấn miễn phí</button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
