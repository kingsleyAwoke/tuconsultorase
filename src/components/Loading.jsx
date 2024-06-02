import React from 'react';
import '../assets/css/loading.css';

const SkeletonLoading = () => {
  return (
    <div className='loading-container'>
      <header className="loading-header">
        <nav className="loading-nav">
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
          <div className="loading-nav-item"></div>
        </nav>
      </header>

      <div className="loading-content">

        <main className="loading-main">
          <div className="loading-hero">
            <div className="loading-hero-image"></div>
          </div>

          <div className="loading-features">
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
          </div>

          <div className="loading-features">
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
          </div>

          <div className="loading-features">
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
            <div className="loading-feature-item">
              <div className="loading-feature-image"></div>
              <div className="loading-feature-text"></div>
            </div>
          </div>
        </main>
      </div>

      <footer className="loading-footer">
        <div className="loading-footer-item"></div>
      </footer>
    </div>
  );
};

export default SkeletonLoading;