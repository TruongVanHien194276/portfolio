const capabilities = [
  {
    number: "01",
    title: "Chiến lược nội dung",
    copy: "Chuyển brief thành tuyến nội dung, thông điệp và lịch triển khai phù hợp với mục tiêu của từng kênh.",
  },
  {
    number: "02",
    title: "Sản xuất video",
    copy: "Phụ trách từ ý tưởng, kịch bản đến quay dựng; tối ưu phần mở đầu, nhịp xem và định dạng đầu ra.",
  },
  {
    number: "03",
    title: "Hình ảnh & thiết kế",
    copy: "Sản xuất ảnh và ấn phẩm social nhất quán về màu sắc, bố cục và nhận diện thương hiệu.",
  },
  {
    number: "04",
    title: "Quảng cáo & tối ưu",
    copy: "Thiết lập, theo dõi Meta Ads; phối hợp thử nghiệm nội dung, đối tượng và ngân sách để cải thiện hiệu quả.",
  },
];

const experience = [
  {
    period: "12/2024 — Hiện tại",
    company: "Interdog Media",
    role: "Meta Ads • Content Planning • Creative Collaboration",
    description:
      "Phụ trách xây dựng nội dung và vận hành Meta Ads cho nhiều dự án của công ty. Công việc bao gồm tiếp nhận brief, lên ý tưởng cùng team, thiết lập và theo dõi chiến dịch, phân tích hiệu suất quảng cáo, đồng thời đề xuất các điều chỉnh về nội dung và phân phối để cải thiện kết quả theo từng giai đoạn.",
  },
  {
    period: "05/2025 — Hiện tại",
    company: "Cake Studio",
    role: "Photo Editing • Media Production — Freelance",
    description:
      "Tham gia sản xuất nội dung truyền thông cho khách hàng, bao gồm chỉnh sửa ảnh, hỗ trợ quay chụp và thiết kế các ấn phẩm phục vụ quảng bá trên nền tảng số. Phối hợp cùng đội ngũ để đảm bảo tiến độ và chất lượng đầu ra.",
  },
  {
    period: "01/2024 — 11/2024",
    company: "Monst Studio",
    role: "Media & Content Analyst",
    description:
      "Phân tích dữ liệu nội dung trên các nền tảng mạng xã hội nhằm đánh giá hiệu quả video và hành vi người xem. Theo dõi xu hướng, tổng hợp insight và phối hợp với đội ngũ sáng tạo để tối ưu định hướng phát triển nội dung.",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;
const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Trương Văn Hiển — Về đầu trang">
          <span className="wordmark-mark">HV</span>
          <span className="wordmark-copy">
            <strong>Trương Văn Hiển</strong>
            <small>Media · Content · Meta Ads</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#work">Case Study</a>
          <a href="#about">Thông tin</a>
          <a href="#capabilities">Năng lực</a>
          <a href="#experience">Kinh nghiệm</a>
          <a href="#contact">Liên hệ</a>
          <a className="nav-cta" href={assetPath("/files/truong-van-hien-cv.pdf")} download>
            Xem CV <Arrow />
          </a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Mở điều hướng">Menu</summary>
          <div className="mobile-nav-panel">
            <a href="#work">Case Study</a>
            <a href="#about">Thông tin</a>
            <a href="#capabilities">Năng lực</a>
            <a href="#experience">Kinh nghiệm</a>
            <a href="#contact">Liên hệ</a>
            <a href={assetPath("/files/truong-van-hien-cv.pdf")} download>Xem CV</a>
          </div>
        </details>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Media Executive · Content Creator · Ads</p>
          <h1>Tôi xây nội dung và vận hành quảng cáo từ brief đến kết quả</h1>
          <p className="hero-intro">
            Tôi là <strong>Trương Văn Hiển</strong>, hiện sống và làm việc tại Hà Nội. Với hơn 2 năm kinh nghiệm trong media, tôi tập trung vào ba mảng: phát triển nội dung social, sản xuất video – hình ảnh và triển khai Meta Ads
          </p>
          <div className="hero-facts">
            <div><strong>2+ năm</strong><span>Kinh nghiệm media</span></div>
            <div><strong>TikTok · Facebook</strong><span>Nội dung & quảng cáo</span></div>
            <div><strong>Fashion · Ad-tech</strong><span>Lĩnh vực đã triển khai</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Xem dự án tiêu biểu <Arrow /></a>
            <a className="text-link" href="mailto:hientv194276@gmail.com">Trao đổi công việc <Arrow /></a>
          </div>
        </div>
        <div className="hero-media hero-portrait">
          <img src={assetPath("/media/about/personal-02.jpg")} alt="Chân dung Trương Văn Hiển" />
          <div className="hero-media-label">
            <span>Trương Văn Hiển</span>
            <span>Hà Nội · Việt Nam</span>
          </div>
        </div>
        <div className="availability">
          <span>0904 371 156 · hientv194276@gmail.com</span>
          <span>Mong muốn đồng hành cùng những thương hiệu cần nội dung sáng tạo, có định hướng và tạo ra hiệu quả thực tế</span>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Dự án tiêu biểu · 2024—2026</p>
          <h2>Bốn dự án<br />Bốn cách tạo ra giá trị</h2>
          <p>Mỗi dự án đại diện cho một năng lực cốt lõi của tôi: xây dựng nội dung, sản xuất video, vận hành quảng cáo và kể chuyện bằng hình ảnh.</p>
        </div>

        <article className="project project-dunnio" id="dunnio">
          <div className="project-topline">
            <span>01</span>
            <span>Social Media · Video ngắn · Hình ảnh sản phẩm</span>
          </div>
          <div className="project-title-row">
            <div>
              <p className="project-client">Dunnio Tailor</p>
              <h3>Kể câu chuyện may đo bằng hình ảnh hiện đại</h3>
            </div>
            <p className="project-summary">
              Phát triển hệ thống nội dung social cho thương hiệu may đo nam, cân bằng giữa kiến thức hữu ích, hình ảnh sản phẩm và trải nghiệm khách hàng.
            </p>
          </div>

          <div className="dunnio-grid media-grid clean-gallery">
            <img className="dunnio-main" src={assetPath("/media/dunnio/navy-suit-clean.png")} alt="Chi tiết bộ suit xanh navy của Dunnio Tailor" />
            <img src={assetPath("/media/dunnio/white-tux-cover.jpg")} alt="Khách hàng thử tuxedo trắng tại Dunnio Tailor" />
            <img src={assetPath("/media/dunnio/product-cover.jpg")} alt="Cận cảnh chất liệu và đường may suit" />
          </div>

          <div className="case-grid">
            <div className="case-narrative">
              <p className="case-label">Bối cảnh dự án</p>
              <h4>Đưa giá trị may đo đến gần hơn với khách hàng trên mạng xã hội.</h4>
              <p>Dunnio sở hữu thế mạnh về phom dáng, chất liệu và kỹ thuật hoàn thiện, nhưng những giá trị này khó được cảm nhận nếu nội dung chỉ dừng ở ảnh sản phẩm. Tôi cần xây dựng cách kể trực quan hơn để người xem vừa hiểu sản phẩm, vừa nhận ra chuyên môn của thương hiệu.</p>
            </div>
            <div className="case-side">
              <div className="case-details">
                <div><span>Ngành hàng</span><strong>Thời trang nam · May đo</strong></div>
                <div><span>Nền tảng</span><strong>TikTok · Facebook</strong></div>
                <div><span>Phạm vi</span><strong>Ý tưởng · Video · Hình ảnh</strong></div>
                <div><span>Công cụ</span><strong>CapCut · Photoshop · Canva</strong></div>
              </div>
              <div className="challenge-list">
                <p className="case-label">Ba bài toán trọng tâm</p>
                <div><span>01</span><p>Giải thích kiến thức may đo bằng ngôn ngữ ngắn gọn, dễ tiếp nhận</p></div>
                <div><span>02</span><p>Cho người xem thấy rõ chất liệu, phom dáng và độ hoàn thiện của sản phẩm</p></div>
                <div><span>03</span><p>Duy trì hình ảnh cao cấp nhưng vẫn phù hợp với nhịp xem của TikTok và Facebook</p></div>
              </div>
            </div>
          </div>

          <div className="result-strip">
            <div><strong>20+</strong><span>Nội dung social được phát triển và hoàn thiện</span></div>
            <div><strong>04</strong><span>Tuyến nội dung giúp kênh duy trì chủ đề nhất quán</span></div>
            <div><strong>03</strong><span>Định dạng chính: video ngắn, ảnh sản phẩm, nội dung tư vấn</span></div>
          </div>

          <div className="project-breakdown">
            <div>
              <p className="case-label">Mục tiêu nội dung</p>
              <ul>
                <li>Giải thích kiến thức may đo bằng ngôn ngữ gần gũi với người xem mạng xã hội.</li>
                <li>Thể hiện rõ chất liệu, phom dáng và độ hoàn thiện của sản phẩm.</li>
                <li>Xây dựng bốn tuyến nội dung có thể lặp lại, giúp kế hoạch đăng bài ổn định và bớt phụ thuộc vào ý tưởng ngắn hạn.</li>
              </ul>
            </div>
            <div>
              <p className="case-label">Vai trò của tôi</p>
              <ul>
                <li>Nghiên cứu câu hỏi thường gặp và xu hướng nội dung thời trang nam.</li>
                <li>Đề xuất góc triển khai, viết cấu trúc nội dung và chuẩn bị tham chiếu hình ảnh.</li>
                <li>Tham gia quay, dựng video ngắn và hoàn thiện hình ảnh social.</li>
                <li>Điều chỉnh định dạng, nhịp dựng và thông điệp theo từng nền tảng.</li>
              </ul>
            </div>
          </div>

          <div className="content-pillars">
            <div><span>01</span><h4>Kỹ thuật may đo</h4><p>Quy trình, chi tiết hoàn thiện và sự chính xác phía sau một sản phẩm được làm theo số đo.</p></div>
            <div><span>02</span><h4>Kiến thức phối đồ</h4><p>Giải đáp các câu hỏi thực tế về suit, giày, chất liệu và cách chọn trang phục theo hoàn cảnh.</p></div>
            <div><span>03</span><h4>Câu chuyện sản phẩm</h4><p>Dùng cận cảnh chất liệu, phom và chuyển động để sản phẩm tự thể hiện giá trị thay vì phụ thuộc vào nhiều chữ.</p></div>
            <div><span>04</span><h4>Trải nghiệm khách hàng</h4><p>Ghi lại quá trình thử đồ, tư vấn và khoảnh khắc hoàn thiện để tạo cảm giác gần gũi, đáng tin cậy.</p></div>
          </div>

          <div className="product-showcase">
            <div className="product-showcase-copy">
              <p className="case-label">Hướng hình ảnh</p>
              <h4>Để sản phẩm tự kể câu chuyện bằng chi tiết.</h4>
              <p>Thay vì đặt nhiều chữ lên ảnh, tôi ưu tiên những khung hình giúp người xem nhìn thấy trực tiếp chất lượng sản phẩm: đường nét của phom, bề mặt chất liệu và sự chỉn chu trong từng chi tiết hoàn thiện.</p>
              <div className="visual-principles">
                <div><span>01</span><strong>Phom dáng</strong><p>Thể hiện tỷ lệ và cách trang phục lên dáng khi sử dụng.</p></div>
                <div><span>02</span><strong>Chất liệu</strong><p>Đưa bề mặt vải, đường may và phụ kiện vào khung hình cận.</p></div>
                <div><span>03</span><strong>Hoàn thiện</strong><p>Nhấn vào ve áo, hàng khuy và đường may tạo nên vẻ chỉn chu.</p></div>
              </div>
            </div>
            <div className="product-photo-grid">
              <img className="product-photo-main" src={assetPath("/media/dunnio/white-trouser-clean.png")} alt="Phom quần âu trắng của Dunnio Tailor" />
              <img className="product-photo-craft" src={assetPath("/media/dunnio/gray-suit-clean.jpg")} alt="Cận cảnh suit xám kẻ với áo gile và cà vạt hoàn thiện" />
              <img className="product-photo-shoes" src={assetPath("/media/dunnio/shoes-clean.png")} alt="Giày da đen phối cùng suit" />
            </div>
          </div>

          <div className="process-block">
            <p className="case-label">Quy trình triển khai</p>
            <div className="process-steps">
              <span>Nghiên cứu chủ đề</span><b>→</b><span>Chọn insight</span><b>→</b><span>Viết cấu trúc</span><b>→</b><span>Quay & dựng</span><b>→</b><span>Tối ưu nền tảng</span>
            </div>
            <p className="reflection">Kết quả nổi bật: kênh có hệ thống chủ đề rõ ràng hơn; hình ảnh sản phẩm đồng nhất hơn; nội dung tư vấn giúp thương hiệu thể hiện chuyên môn thay vì chỉ tập trung bán hàng.</p>
          </div>
        </article>

        <article className="project project-pubpower" id="pubpower">
          <div className="project-topline light">
            <span>02</span>
            <span>Video giải thích · Truyền thông sản phẩm công nghệ</span>
          </div>
          <div className="project-title-row light">
            <div>
              <p className="project-client">PubPower</p>
              <h3>Làm rõ một sản phẩm nhiều thuật ngữ.</h3>
            </div>
            <p className="project-summary">
              Biên tập chuỗi video hướng dẫn sản phẩm ad-tech bằng tiếng Anh, chuyển quy trình nhiều bước thành mạch thông tin ngắn gọn và dễ theo dõi.
            </p>
          </div>

          <div className="result-strip dark-results">
            <div><strong>04</strong><span>Nhóm nội dung sản phẩm được chuẩn hóa</span></div>
            <div><strong>02</strong><span>Video tiêu biểu được trình bày trong portfolio</span></div>
            <div><strong>16:9</strong><span>Định dạng thống nhất cho nội dung hướng dẫn</span></div>
          </div>

          <div className="video-showcase-grid">
            <div className="browser-stage">
              <div className="browser-bar"><i /><i /><i /><span>Reward Ads · Video sản phẩm</span></div>
              <video controls playsInline preload="metadata"><source src={assetPath("/media/pubpower/reward-ads.mp4")} type="video/mp4" /></video>
            </div>
            <div className="browser-stage">
              <div className="browser-bar"><i /><i /><i /><span>PubPower MCM · Video hướng dẫn</span></div>
              <video controls playsInline preload="metadata"><source src={assetPath("/media/pubpower/mcm.mp4")} type="video/mp4" /></video>
            </div>
          </div>

          <div className="pubpower-bottom">
            <div className="case-details light-details">
              <div><span>Lĩnh vực</span><strong>Ad-tech · SaaS</strong></div>
              <div><span>Ngôn ngữ</span><strong>Tiếng Anh</strong></div>
              <div><span>Sản phẩm</span><strong>Video giải thích</strong></div>
              <div><span>Mục đích</span><strong>Hướng dẫn người dùng</strong></div>
            </div>
            <div className="pubpower-copy">
              <p className="case-label">Cách tôi tiếp cận</p>
              <p className="case-lead">Tách một quy trình phức tạp thành các bước nhỏ; xác định thông tin bắt buộc; sau đó dùng tiêu đề, điểm nhấn và thao tác trên giao diện để dẫn mắt người xem.</p>
              <div className="video-list">
                <span>Reward Ads</span><span>PubPower MCM</span><span>Affiliate Program</span><span>Ad Formats</span>
              </div>
            </div>
          </div>

          <div className="dark-breakdown">
            <div><span>01</span><h4>Đọc và rút gọn tài liệu</h4><p>Xác định mục tiêu của video, thuật ngữ quan trọng và thứ tự thao tác mà người mới cần hiểu.</p></div>
            <div><span>02</span><h4>Thiết kế luồng thông tin</h4><p>Sắp xếp nội dung thành mở đầu, vấn đề, từng bước thực hiện và điểm cần ghi nhớ.</p></div>
            <div><span>03</span><h4>Dựng & kiểm tra</h4><p>Phối hợp hình quay màn hình, chữ dẫn và nhịp chuyển cảnh; kiểm tra để hình ảnh khớp với nội dung giải thích.</p></div>
          </div>
          <blockquote>“Kết quả của dự án là một cấu trúc video nhất quán: người xem hiểu vấn đề, theo dõi đúng thứ tự thao tác và ghi nhớ được hành động chính.”</blockquote>
        </article>

        <article className="project project-interdog" id="interdog">
          <div className="project-topline">
            <span>03</span>
            <span>Meta Ads · Creative testing · Vận hành chiến dịch</span>
          </div>
          <div className="project-title-row">
            <div>
              <p className="project-client">Interdog Media</p>
              <h3>Vận hành quảng cáo bằng dữ liệu và creative.</h3>
            </div>
            <p className="project-summary">
              Trực tiếp triển khai Meta Ads cho các dự án của công ty, từ tiếp nhận yêu cầu, chuẩn bị nội dung quảng cáo đến theo dõi chỉ số và tối ưu hiệu quả theo từng giai đoạn.
            </p>
          </div>

          <div className="result-strip interdog-results">
            <div><strong>5–8</strong><span>Chiến dịch được theo dõi và vận hành mỗi tháng</span></div>
            <div><strong>3–5</strong><span>Biến thể creative được thử nghiệm trong mỗi nhóm quảng cáo</span></div>
            <div><strong>10–15%</strong><span>Mức cải thiện chi phí tương tác sau các vòng tối ưu</span></div>
          </div>

          <div className="interdog-project-media">
            <figure>
              <img src={assetPath("/media/pubpower/reward-ads.jpg")} alt="Tư liệu video sản phẩm Reward Ads của PubPower" />
              <figcaption><span>Dự án tiêu biểu</span><strong>PubPower · Reward Ads</strong></figcaption>
            </figure>
            <figure>
              <img src={assetPath("/media/pubpower/mcm.jpg")} alt="Tư liệu video hướng dẫn PubPower MCM" />
              <figcaption><span>Creative & product communication</span><strong>PubPower · MCM</strong></figcaption>
            </figure>
          </div>

          <div className="workflow-board">
            <div className="workflow-title"><span>Quy trình vận hành quảng cáo</span><span>12/2024 — Hiện tại</span></div>
            <div className="workflow-grid">
              <div><span>01</span><h4>Nhận brief</h4><p>Làm rõ mục tiêu, nhóm khách hàng, ngân sách, thời gian chạy và hành động cần tối ưu.</p></div>
              <div><span>02</span><h4>Thiết lập</h4><p>Chuẩn bị creative, cấu trúc campaign, nhóm quảng cáo, tệp đối tượng và phương án phân bổ ngân sách.</p></div>
              <div><span>03</span><h4>Theo dõi</h4><p>Kiểm tra CPM, CTR, CPC, CPE và tần suất; phát hiện sớm quảng cáo có dấu hiệu giảm hiệu quả.</p></div>
              <div><span>04</span><h4>Tối ưu</h4><p>Điều chỉnh creative, đối tượng và ngân sách; tổng hợp kết quả để áp dụng cho vòng chạy tiếp theo.</p></div>
            </div>
          </div>

          <div className="interdog-info">
            <div>
              <p className="case-label">Vai trò của tôi</p>
              <p className="case-lead">Tôi trực tiếp triển khai và vận hành các chiến dịch Meta Ads, theo dõi hiệu suất hằng ngày, phân tích dữ liệu và phối hợp tối ưu để cải thiện kết quả theo mục tiêu của chiến dịch.</p>
            </div>
            <ul>
              <li>Xây dựng cấu trúc chiến dịch theo mục tiêu và ngân sách</li>
              <li>Phân nhóm đối tượng, thiết lập theo dõi và kiểm soát phân phối</li>
              <li>Đánh giá CPM, CTR, CPC và CPE để phát hiện điểm suy giảm</li>
              <li>Phối hợp A/B test thông điệp, định dạng và hình ảnh quảng cáo</li>
              <li>Tổng hợp kết quả, rút insight và đề xuất hành động tiếp theo</li>
            </ul>
          </div>

          <div className="project-breakdown">
            <div>
              <p className="case-label">Kết quả đạt được</p>
              <ul>
                <li>Duy trì chiến dịch hoạt động ổn định, hạn chế ngân sách dồn vào nhóm quảng cáo có hiệu suất thấp.</li>
                <li>Cải thiện khoảng 10–15% chi phí trên mỗi lượt tương tác sau các vòng thay creative và điều chỉnh đối tượng.</li>
                <li>Chuẩn hóa cách theo dõi chỉ số và ghi nhận thay đổi, giúp việc đánh giá chiến dịch rõ ràng hơn.</li>
              </ul>
            </div>
            <div>
              <p className="case-label">Cách tôi ra quyết định</p>
              <ul>
                <li>Không đánh giá quảng cáo bằng một chỉ số riêng lẻ; luôn xem đồng thời chi phí, tỷ lệ nhấp, tần suất và chất lượng creative.</li>
                <li>Ưu tiên những thay đổi có thể đo lường: một lần thử tập trung vào creative, đối tượng hoặc ngân sách.</li>
                <li>Chuyển dữ liệu quảng cáo thành brief cụ thể để đội media biết cần cải thiện phần mở đầu, thông điệp hay hình ảnh.</li>
              </ul>
            </div>
          </div>

          <div className="award-card">
            <span className="award-year">2025</span>
            <div><p>Ghi nhận</p><h4>Employee of the Year</h4><span>Interdog Media · Ghi nhận hiệu suất, đóng góp và tinh thần phối hợp</span></div>
            <span className="award-mark">★</span>
          </div>
          <div className="linked-cases">
            <a href="#dunnio"><span>Dự án liên quan</span><strong>Dunnio Tailor</strong><Arrow /></a>
            <a href="#pubpower"><span>Dự án liên quan</span><strong>PubPower</strong><Arrow /></a>
          </div>
        </article>

        <article className="project project-photo" id="photography">
          <div className="project-topline">
            <span>04</span>
            <span>Tuyển chọn dự án nhiếp ảnh</span>
          </div>
          <div className="project-title-row">
            <div>
              <p className="project-client">Nhiếp ảnh · Hậu kỳ</p>
              <h3>Biến khoảnh khắc thật thành hình ảnh có sức gợi.</h3>
            </div>
            <p className="project-summary">
              Từ sân khấu đông người đến chân dung cá nhân, tôi chủ động chọn góc, kiểm soát ánh sáng và nhịp chuyển động để mỗi khung hình không chỉ đẹp, mà còn truyền tải đúng tinh thần của nhân vật và sự kiện.
            </p>
          </div>
          <div className="photo-collage">
            <img className="photo-a" src={assetPath("/media/photography/TN_TVH.jpeg")} alt="Tốt nghiệp TVH"
                  style={{
                    objectPosition: "center 70%"
                  }}
            />
            <img className="photo-b" src={assetPath("/media/photography/KyYeu_HS.PNG")} alt="Kỷ yếu học sinh VinSchool" />
            <img className="photo-c" src={assetPath("/media/photography/event-behind-the-scenes.jpg")} alt="Toàn cảnh hậu trường và khán giả tại sự kiện" />
            <img className="photo-d" src={assetPath("/media/photography/TN_DLDA.jpg")} alt="Tốt nghiệp ĐLDA" />
          </div>

          <div className="project-breakdown photo-breakdown">
            <div>
              <p className="case-label">Cách tôi thực hiện</p>
              <ul>
                <li>Xác định mục đích sử dụng, nhân vật trung tâm và tinh thần hình ảnh trước buổi chụp.</li>
                <li>Khảo sát bối cảnh, hướng sáng và vị trí máy để chủ động bắt đúng khoảnh khắc.</li>
                <li>Chọn lọc, cân màu và retouch theo hướng tự nhiên, đồng nhất trong toàn bộ ảnh bàn giao.</li>
              </ul>
            </div>
            <div>
              <p className="case-label">Tiêu chuẩn đầu ra</p>
              <ul>
                <li>Bố cục rõ chủ thể, hạn chế chi tiết gây nhiễu và giữ được không khí của bối cảnh.</li>
                <li>Ưu tiên chuyển động, tương tác và biểu cảm thật để hình ảnh có điểm nhớ.</li>
                <li>Bộ ảnh đồng đều về màu sắc, phù hợp cho social media và truyền thông sự kiện.</li>
              </ul>
            </div>
          </div>

          <div className="photo-principles">
            <div><span>01</span><h4>Kết nối tự nhiên</h4><p>Giao tiếp rõ ràng để nhân vật thoải mái, từ đó biểu cảm và tương tác trong ảnh chân thật hơn.</p></div>
            <div><span>02</span><h4>Bố cục có chủ đích</h4><p>Sử dụng đường nét kiến trúc, khoảng trống và ánh sáng để làm rõ nhân vật chính.</p></div>
            <div><span>03</span><h4>Màu sắc nhất quán</h4><p>Chỉnh màu theo từng bộ ảnh nhưng vẫn ưu tiên màu da tự nhiên và cảm giác dễ chịu.</p></div>
          </div>
          <div className="photo-story">
            <img src={assetPath("/media/photography/TNLS.JPG")} alt="Khoảnh khắc chuyển động được bắt trên sân khấu" />
            <div>
              <p className="case-label">Giá trị ứng dụng</p>
              <p className="case-lead">Khả năng quan sát khoảnh khắc, tổ chức bố cục và xử lý ánh sáng giúp tôi tạo ra tư liệu vừa giàu cảm xúc, vừa có thể sử dụng hiệu quả trong các chiến dịch nội dung của thương hiệu.</p>
              <div className="mini-meta"><span>Thể loại</span><strong>Sự kiện · Chân dung · Lifestyle</strong><span>Ứng dụng</span><strong>Social media · Truyền thông · Lưu trữ</strong><span>Hậu kỳ</span><strong>Lightroom · Photoshop</strong></div>
            </div>
          </div>
        </article>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-photo-wrap">
          <img src={assetPath("/media/about/personal-04.jpg")} alt="Chân dung Trương Văn Hiển tại không gian thành phố về đêm" />
          <span>Hà Nội, Việt Nam</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Giới thiệu</p>
          <h2>Sáng tạo có mục tiêu, triển khai có dữ liệu.</h2>
          <p className="about-lead">Tôi là Trương Văn Hiển, tốt nghiệp tại Đại học Bách khoa Hà Nội và hiện phát triển sự nghiệp trong lĩnh vực media.</p>
          <p>Tôi có lợi thế kết hợp giữa tư duy hình ảnh và khả năng làm việc với dữ liệu. Khi nhận một dự án, tôi bắt đầu bằng việc xác định mục tiêu, đối tượng và thông điệp; sau đó mới lựa chọn định dạng nội dung, cách sản xuất và phương án quảng cáo phù hợp.</p>
          <p>Kinh nghiệm tại Monst Studio, Interdog Media và Cake Studio giúp tôi làm việc xuyên suốt từ phân tích nội dung, sản xuất video – hình ảnh đến vận hành Meta Ads. Tôi phù hợp với môi trường cần một nhân sự chủ động, có thể phối hợp đa phòng ban và theo sát công việc đến kết quả cuối cùng.</p>
          <div className="profile-details">
            <div><span>Họ và tên</span><strong>Trương Văn Hiển</strong></div>
            <div><span>Năm sinh</span><strong>2001</strong></div>
            <div><span>Địa điểm</span><strong>Thanh Xuân, Hà Nội</strong></div>
            <div><span>Chuyên môn</span><strong>Media · Content · Meta Ads</strong></div>
          </div>
          <a className="text-link" href="mailto:hientv194276@gmail.com">Bắt đầu trao đổi <Arrow /></a>
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="section-heading compact">
          <p className="eyebrow">Năng lực</p>
          <h2>Những gì tôi có thể đóng góp.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <div key={item.number} className="capability-card">
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p>
            </div>
          ))}
        </div>
        <p className="tools-line">Công cụ: CapCut · Photoshop · Lightroom · Canva · Midjourney · Leonardo AI · Lovart</p>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">Kinh nghiệm</p>
          <h2>Trưởng thành qua từng vai trò</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.company}>
              <span className="experience-period">{item.period}</span>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="education-row">
          <span>Học vấn</span>
          <div><strong>Đại học Bách khoa Hà Nội</strong><p>Kỹ sư Kỹ thuật Máy tính · 2019—2024 · GPA 3.80/4.00 · CPA 3.47/4.00</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner section-shell">
          <div className="contact-heading-grid">
            <div>
              <p className="eyebrow">Liên hệ hợp tác</p>
              <h2>Cùng biến mục tiêu truyền thông thành nội dung có kết quả.</h2>
            </div>
            <div className="contact-intro">
              <p>Tôi sẵn sàng trao đổi về vị trí toàn thời gian, công việc freelance hoặc các dự án cần triển khai nội dung và quảng cáo theo từng giai đoạn.</p>
            </div>
          </div>

          <div className="contact-services">
            <div>
              <span>01</span>
              <h3>Social Content</h3>
              <p>Lên tuyến nội dung, kịch bản, video ngắn và hình ảnh cho TikTok, Facebook.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Meta Ads</h3>
              <p>Thiết lập, theo dõi, A/B test creative và tối ưu chiến dịch dựa trên dữ liệu.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Media Production</h3>
              <p>Quay dựng video, chụp ảnh, chỉnh màu và hoàn thiện ấn phẩm truyền thông.</p>
            </div>
          </div>

          <div className="contact-actions">
            <a className="contact-email" href="mailto:hientv194276@gmail.com">
              <span><small>Email</small>hientv194276@gmail.com</span><Arrow />
            </a>
            <a className="contact-phone" href="tel:+84904371156">
              <span><small>Điện thoại</small>0904 371 156</span><Arrow />
            </a>
          </div>
          <div className="contact-footer">
            <div><span>Trương Văn Hiển</span><span>Media Executive · Content Creator · Meta Ads</span><span>Thanh Xuân, Hà Nội</span></div>
            <div><a href={assetPath("/files/truong-van-hien-cv.pdf")} download>Tải CV</a><a href="#top">Về đầu trang ↑</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
