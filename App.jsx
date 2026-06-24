import React, { useState } from 'react';
import './App.css';

// 架空の商品データ
const PRODUCTS = [
  { id: 1, name: "CITY BOY SWEATSHIRT", price: "¥9,800", category: "TOPS", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "CHINO PANTS STANDARD", price: "¥12,000", category: "BOTTOMS", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=60" },
  { id: 3, name: "WEEKEND CAP", price: "¥4,500", category: "ACCESSORIES", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=60" },
  { id: 4, name: "BIG TEE (ORDINARY)", price: "¥5,500", category: "TOPS", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=60" },
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="popeye-style-site">
      {/* --- HEADER --- */}
      <header className="header">
        <div className="header-left">
          <span className="issue-number">ISSUE NO. 01</span>
          <span className="sub-text">FOR CITY BOYS & GIRLS.</span>
        </div>
        <h1 className="logo">SHOSHIN & CO.</h1>
        <div className="header-right">
          <span className="nav-link">SEARCH</span>
          <span className="nav-link" onClick={() => setCartCount(0)}>
            BAG <span className="cart-badge">({cartCount})</span>
          </span>
        </div>
      </header>

      {/* --- HERO BANNER --- */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&auto=format&fit=crop&q=80" 
              alt="Hero Visual" 
              className="hero-img"
            />
          </div>
          <div className="hero-text-overlay">
            <h2 className="hero-title">ORDINARY<br />LOGIC.</h2>
            <p className="hero-sub">僕たちの、これからのスタンダード。</p>
          </div>
        </div>
      </section>

      {/* --- CONCEPT BAR --- */}
      <div className="concept-bar">
        <p className="ticker-text">SUMMER EDITON / LOOK GOOD, FEEL GOOD / SHOSHIN & CO. ALL WEATHER STUFF</p>
      </div>

      {/* --- MAIN PRODUCT GRID --- */}
      <main className="main-container">
        <div className="section-title-area">
          <h3 className="section-title">FEATURED ITEMS</h3>
          <p className="section-subtitle">今週、編集部が気になるもの。</p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-thumb-wrap">
                <img src={product.img} alt={product.name} className="product-img" />
                <button 
                  className={`like-btn ${likedItems[product.id] ? 'is-liked' : ''}`}
                  onClick={() => toggleLike(product.id)}
                >
                  {likedItems[product.id] ? '♥' : '♡'}
                </button>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">{product.price}</p>
                <button className="add-to-bag-btn" onClick={addToCart}>
                  ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <p className="footer-logo">SHOSHIN & CO.</p>
        <p className="copyright">© 2026 SHOSHIN & CO. MAGAZINE STYLE EC. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}