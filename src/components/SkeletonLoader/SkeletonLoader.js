import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ theme }) => {
  return (
    <div className={`skeleton-container ${theme}`}>
      {/* Home section skeleton */}
      <div className="skeleton-section home-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text-short"></div>
        <div className="skeleton-button"></div>
      </div>

      {/* About section skeleton */}
      <div className="skeleton-section about-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>

      {/* Skills section skeleton */}
      <div className="skeleton-section skills-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton-card"></div>
          ))}
        </div>
      </div>

      {/* Projects section skeleton */}
      <div className="skeleton-section projects-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-grid">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="skeleton-card-large"></div>
          ))}
        </div>
      </div>

      {/* Education section skeleton */}
      <div className="skeleton-section education-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-card-full"></div>
        <div className="skeleton-card-full"></div>
      </div>

      {/* Contact section skeleton */}
      <div className="skeleton-section contact-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-form">
          <div className="skeleton-input"></div>
          <div className="skeleton-input"></div>
          <div className="skeleton-textarea"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;