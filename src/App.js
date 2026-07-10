import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      {/* ヘッダー */}
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/image/fuushin-logo.jpg`}
              alt="ロゴ"
            />
            風新アグリサポート
          </h1>
          <nav className="nav">
            <ul>
              <li>
                <a href="#about">会社概要</a>
              </li>
              <li>
                <a href="#services">事業内容</a>
              </li>
              <li>
                <a href="#contact">お問い合わせ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="hero">
        <div className="hero-text">
          <h2>日本の農業の未来を支える</h2>
          <p>確かな技術と信頼で、地域の営農を強力にサポートします。</p>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">会社概要</h2>
          <table className="profile-table">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>風新アグリサポート</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>大風　新一</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>河東郡音更町大通り12丁目14-2</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2026年</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="services" className="section bg-light">
        <div className="container">
          <h2 className="section-title">事業内容</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚜</div>
              <h3>農業コントラクター</h3>
              <p>
                大型農機具を活用した農作業の受託を行います。耕起、播種、収穫など、効率的な農作業オペレーションで生産者の皆さまの負担を軽減し、地域の農業を守ります。
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔑</div>
              <h3>農機レンタル</h3>
              <p>
                必要な時に、必要な期間だけ最新の農業機械をご利用いただけるレンタルサービスです。初期投資やメンテナンスの手間を抑え、効率的な経営をサポートします。
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>肥料販売・紹介</h3>
              <p>
                土壌や作物の特性に合わせた最適な肥料を提案・販売いたします。豊かな土壌づくりと高品質な作物の収穫を目指し、持続可能な農業を足元から支えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクト */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="contact-text">
            各種サービスのご相談、お見積りのご依頼など、お気軽にお問い合わせください。
          </p>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>お電話・メール</h3>
              <p>
                <strong>お電話：</strong> 000-000-0000
              </p>
              <p>
                <strong>メール：</strong> bonco3207@gmail.com
              </p>
              <p>
                <strong>受付時間：</strong> 平日 9:00 〜 18:00
              </p>
            </div>
            <div className="contact-info">
              <h3>LINE</h3>
              <a href="https://line.me/ti/p/qA2-blyG_7">
                <img
                  src={`${process.env.PUBLIC_URL}/image/fuushin.jpg`}
                  alt="LINE QR"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <p>&copy; 2026 風新アグリサポート All Rights Reserved.</p>
      </footer>
    </div>
  );
}
