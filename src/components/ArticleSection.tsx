import React from "react";
import { motion } from "framer-motion";
import "../styles/ArticleSection.css";
import {
  User2,
  Calendar,
  Clock,
  Facebook,
  Linkedin, Twitter,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ============================
   Type Definitions
============================ */

interface BlogSection {
  image?: string;
  heading?: string;
  content?: string[];
  list?: string[];
}

interface BlogNavigation {
  id: string;
  title: string;
  image?: string;
}

interface Blog {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
  tags?: string[];
  prev?: BlogNavigation;
  next?: BlogNavigation;
}

interface ShareSectionProps {
  tags: string[];
}

interface ArticleSectionProps {
  blog: Blog | null;
}

/* ============================
   Share Section Component
============================ */

const ShareSection: React.FC<ShareSectionProps> = ({ tags }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const shareUrl =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.href)
      : "";

  const shareText = encodeURIComponent("Check out this article!");

  return (
    <motion.div
      className="share-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="tags-title">Tags</h3>
      <div className="tags-container">
        {tags.map((tag: string) => (
          <motion.span
            key={tag}
            className="tag"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            #{tag}
          </motion.span>
        ))}
      </div>

      <h3 className="share-title">Share this article</h3>
      <div className="share-buttons">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn facebook"
        >
          <Facebook size={18} />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn twitter"
        >
           <Twitter size={18} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn linkedin"
        >
          <Linkedin size={18} />
        </a>

        <button onClick={handleCopyLink} className="share-btn copy">
          <LinkIcon size={18} />
          Copy Link
        </button>
      </div>
    </motion.div>
  );
};

/* ============================
   Article Section Component
============================ */

const ArticleSection: React.FC<ArticleSectionProps> = ({ blog }) => {
  if (!blog) return <p>Loading...</p>;

  return (
    <motion.section
      className="article-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="article-container">
        <a href="/blog" className="article-back-link">
          ← Back to Blog
        </a>

        <span className="article-category-badge">{blog.category}</span>

        <h1 className="article-title">{blog.title}</h1>

        <div className="article-meta">
          <div className="article-item">
            <User2 size={16} /> {blog.author}
          </div>

          <div className="article-meta-item">
            <Calendar size={16} /> {blog.date}
          </div>

          <div className="article-meta-item">
            <Clock size={16} /> {blog.readTime}
          </div>
        </div>

        {blog.sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="article-section-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {section.image && (
              <div className="article-image-container">
                <img
                  src={section.image}
                  alt="blog visual"
                  className="article-image"
                />
              </div>
            )}

            {section.heading && <h2>{section.heading}</h2>}

            {section.content &&
              section.content.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}

            {section.list && (
              <div className="numbered-list-container">
                {section.list.map((text: string, i: number) => (
                  <div className="list-item" key={i}>
                    <div className="number-circle">
                      <span>{i + 1}</span>
                    </div>
                    <p className="item-text">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        <ShareSection tags={blog.tags || []} />

        <div className="post-nav-container">
          {blog.prev && (
            <Link to={`/blog/${blog.prev.id}`} className="link-text">
              <motion.div
                className="post-nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="post-nav-item-left">
                  <p className="post-label">PREV POST</p>
                  <h3>{blog.prev.title}</h3>
                </div>

                <img
                  src={blog.prev.image || "/default.jpg"}
                  alt={blog.prev.title}
                  className="post-nav-image"
                />
              </motion.div>
            </Link>
          )}

          {blog.next && (
            <Link to={`/blog/${blog.next.id}`} className="link-text">
              <motion.div
                className="post-nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={blog.next.image || "/default.jpg"}
                  alt={blog.next.title}
                  className="post-nav-image"
                />

                <div className="post-nav-item-right">
                  <p className="post-label">NEXT POST</p>
                  <h3>{blog.next.title}</h3>
                </div>
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ArticleSection;