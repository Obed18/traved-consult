import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/BlogSection.css";

interface FeaturedArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

interface Article {
  id: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  time: string;
  image: string;
}

const featuredArticle: FeaturedArticle = {
  id: "complete-guide-to-studying",
  title: "Your Complete Guide to Studying Abroad in 2026",
  author: "Traved Consult",
  date: "February 11th, 2026",
  time: "8 min read",
  description:
    "Dreaming of studying abroad? Here’s everything you need to know to get started successfully.",
  image: "/article.jpg",
};

const articles: Article[] = [
  {
    id: "top-5-countries",
    image: "/blog1.jpg",
    tag: "Jobs",
    title:
      "Top 5 Countries with Affordable Tuition for International Students",
    author: "EduGuide",
    date: "January 11th, 2026",
    time: "2 min read",
  },
  {
    id: "how-to-prepare-sop",
    image: "/blog2.jpg",
    tag: "Education",
    title: "How to Prepare a Winning Statement of Purpose (SOP)",
    author: "Traved Consult",
    date: "January 4th, 2026",
    time: "2 min read",
  },
  {
    id: "student-visa-tips",
    image: "/blog3.jpg",
    tag: "Education",
    title: "Student Visa Interview Tips: How to Pass with Confidence",
    author: "Traved Consult",
    date: "December 30th, 2025",
    time: "10 min read",
  },
  {
    id: "scholarships-for-african-students",
    image: "/blog4.jpg",
    tag: "Support",
    title: "Scholarships for African Students in 2025",
    author: "Traved Consult",
    date: "December 3rd, 2025",
    time: "5 min read",
  },
  {
    id: "post-study-work-opportunities",
    image: "/blog5.jpg",
    tag: "Jobs",
    title: "Post-Study Work Opportunities: What You Should Know",
    author: "Traved Consult",
    date: "November 28th, 2025",
    time: "9 min read",
  },
  {
    id: "why-use-consultancy",
    image: "/blog6.jpg",
    tag: "Education",
    title: "Why Use a Travel & Study Consultancy?",
    author: "Traved Consult",
    date: "November 11th, 2025",
    time: "9 min read",
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog-section">
      <div className="blog-featured">
        <motion.div
          className="blog-featured-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-badge">Featured Article</span>
          <h2>{featuredArticle.title}</h2>
          <p>{featuredArticle.description}</p>
          <div className="blog-meta">
            <span>{featuredArticle.author}</span> |{" "}
            <span>{featuredArticle.date}</span> |{" "}
            <span>{featuredArticle.time}</span>
          </div>
          <Link
            to={`/blog/${featuredArticle.id}`}
            className="blog-read-more-small"
          >
            <button className="blog-read-more">
              Read Full Article →
            </button>
          </Link>
        </motion.div>

        <motion.img
          src={featuredArticle.image}
          alt="Featured"
          className="blog-featured-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <h3 className="blog-latest-heading">Latest Articles</h3>

      <div className="blog-articles-grid">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="blog-article-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={article.image} alt="blog" className="blog-image"/>
            <span className="blog-tag">{article.tag}</span>
            <h4>{article.title}</h4>
            <div className="blog-meta">
              <span>{article.author}</span> |{" "}
              <span>{article.date}</span> |{" "}
              <span>{article.time}</span>
            </div>
            <Link
              to={`/blog/${article.id}`}
              className="blog-read-more-small"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;