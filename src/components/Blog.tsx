import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag, TrendingUp, Eye, MessageCircle, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  comments: number;
  featured: boolean;
}

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Design: Trends to Watch in 2025',
      excerpt: 'Discover the latest web design trends that will shape the digital landscape in 2025, from AI-powered interfaces to immersive experiences.',
      content: 'Full blog post content here...',
      author: 'RivaaL dESA',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Web Design',
      tags: ['Design Trends', 'UI/UX', 'Future Tech'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 1250,
      comments: 23,
      featured: true
    },
    {
      id: '2',
      title: 'SEO Strategies That Actually Work in 2025',
      excerpt: 'Learn the most effective SEO techniques that are driving real results for businesses in today\'s competitive digital landscape.',
      content: 'Full blog post content here...',
      author: 'RivaaL dESA',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'SEO',
      tags: ['SEO', 'Digital Marketing', 'Search Rankings'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 980,
      comments: 18,
      featured: true
    },
    {
      id: '3',
      title: 'Building a Brand That Resonates: A Complete Guide',
      excerpt: 'From logo design to brand voice, discover how to create a cohesive brand identity that connects with your target audience.',
      content: 'Full blog post content here...',
      author: 'RivaaL dESA',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Branding',
      tags: ['Branding', 'Identity Design', 'Marketing'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 756,
      comments: 15,
      featured: false
    },
    {
      id: '4',
      title: 'Social Media Marketing: Beyond the Basics',
      excerpt: 'Advanced social media strategies that go beyond posting content to build genuine engagement and drive business results.',
      content: 'Full blog post content here...',
      author: 'RivaaL dESA',
      date: '2024-11-28',
      readTime: '9 min read',
      category: 'Social Media',
      tags: ['Social Media', 'Content Strategy', 'Engagement'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 642,
      comments: 12,
      featured: false
    },
    {
      id: '5',
      title: 'E-commerce UX: Converting Visitors into Customers',
      excerpt: 'Essential UX principles and design strategies that turn your e-commerce website into a conversion machine.',
      content: 'Full blog post content here...',
      author: 'RivaaL dESA',
      date: '2024-11-20',
      readTime: '11 min read',
      category: 'UX Design',
      tags: ['E-commerce', 'UX Design', 'Conversion'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 834,
      comments: 20,
      featured: false
    },
    {
      id: '6',
      title: 'The ROI of Professional Web Design',
      excerpt: 'Why investing in professional web design pays off: real data and case studies showing the impact on business growth.',
      content: 'Full blog post content here...',
      author: 'RivaaL dESA',
      date: '2024-11-15',
      readTime: '7 min read',
      category: 'Business',
      tags: ['ROI', 'Web Design', 'Business Growth'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 567,
      comments: 9,
      featured: false
    }
  ];

  const categories = ['All', 'Web Design', 'SEO', 'Branding', 'Social Media', 'UX Design', 'Business'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="px-6 py-8 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12 lg:space-y-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4 lg:space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-6xl">Blog</h1>
          <p className="text-lg text-gray-600 lg:text-xl lg:max-w-3xl lg:mx-auto">
            Insights, tips, and strategies for digital design, development, and marketing success
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-center lg:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-200 lg:px-6 lg:py-3 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {activeCategory === 'All' && searchTerm === '' && (
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">Featured Articles</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 lg:text-2xl">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 lg:text-lg">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={16} />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={16} />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-medium">
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
          
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 lg:text-xl">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 lg:text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white lg:p-12"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold lg:text-3xl">
                Stay Updated
              </h3>
              <p className="text-blue-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get the latest insights on design, development, and digital marketing delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;