import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code, Palette, Search, Globe, Figma, Zap, Shield, Award, Monitor, ShoppingCart, Target, Users, BarChart3, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

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
        duration: 0.6
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const coreSkills = [
    { name: 'Figma', icon: Figma, color: 'text-purple-500' },
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Webflow', icon: Globe, color: 'text-green-500' },
    { name: 'SEO', icon: Search, color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Hero Section */}
        <section className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center space-y-12 lg:space-y-0">
            
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left">
              {/* Primary Heading (H1) - SEO Optimized */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              >
                RivaaL dESA
                <span className="block text-3xl lg:text-4xl font-bold text-cyan-300 mt-2">
                  Creative Designer & Developer
                </span>
              </motion.h1>

              {/* Sub-heading (H2) - Supporting Keywords */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl lg:text-2xl font-semibold text-blue-100 leading-relaxed"
              >
                Building Digital Experiences that Perform and Inspire
              </motion.h2>

              {/* Body Text - Value Proposition */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg lg:text-xl text-blue-50 leading-relaxed max-w-2xl"
              >
                Transforming ideas into powerful digital solutions through innovative design and cutting-edge development. 
                Let's create something extraordinary together.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col gap-4 lg:flex-row lg:gap-6 pt-4"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 233, 169, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/portfolio')}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-green-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 lg:px-10"
                >
                  Explore Portfolio
                  <ArrowRight size={24} />
                </motion.button>
                
                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 lg:px-10"
                >
                  <Mail size={24} />
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Core Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="pt-8 space-y-4"
              >
                <h3 className="text-lg font-semibold text-blue-200">Core Skills</h3>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {coreSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-lg"
                    >
                      <skill.icon size={24} className={skill.color} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Graphic */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center justify-center"
            >
              {/* Main Visual Container */}
              <div className="relative w-full max-w-lg">
                
                {/* Central Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="relative z-20 w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <span className="text-4xl lg:text-5xl font-black text-gray-900">RD</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/50 to-green-400/50 rounded-full blur-xl"></div>
                </motion.div>

                {/* Floating UI Cards */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute top-0 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl"
                >
                  <div className="space-y-2">
                    <div className="w-16 h-2 bg-cyan-400 rounded"></div>
                    <div className="w-12 h-2 bg-white/50 rounded"></div>
                    <div className="w-20 h-2 bg-white/30 rounded"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '2s' }}
                  className="absolute top-16 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={16} className="text-green-400" />
                    <span className="text-white text-sm font-medium">React</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-14 h-1 bg-green-400 rounded"></div>
                    <div className="w-10 h-1 bg-white/50 rounded"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '4s' }}
                  className="absolute bottom-8 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Palette size={16} className="text-purple-400" />
                    <span className="text-white text-sm font-medium">Design</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-3 h-3 bg-purple-400 rounded"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded"></div>
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '1s' }}
                  className="absolute bottom-0 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Search size={16} className="text-orange-400" />
                    <span className="text-white text-sm font-medium">SEO</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-4 bg-orange-400 rounded"></div>
                    <div className="w-2 h-6 bg-orange-400 rounded"></div>
                    <div className="w-2 h-3 bg-orange-400 rounded"></div>
                    <div className="w-2 h-5 bg-orange-400 rounded"></div>
                  </div>
                </motion.div>

                {/* Code Snippet Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-gray-900/90 backdrop-blur-md border border-cyan-400/30 rounded-xl p-4 shadow-2xl font-mono text-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="text-cyan-400">const success = () =&gt; {'{'}</div>
                    <div className="text-white pl-2">return innovation;</div>
                    <div className="text-cyan-400">{'}'}</div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-16 h-16 border-2 border-cyan-400/30 rounded-full"
                ></motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-12 -left-12 w-20 h-20 border-2 border-green-400/30 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievement Stats */}
        <motion.section
          variants={itemVariants}
          className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { number: '100+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm lg:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why RivaaL dESA Section */}
        <motion.section
          variants={itemVariants}
          className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="text-center space-y-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-white"
            >
              Why Choose RivaaL dESA?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-200 lg:text-lg lg:max-w-3xl lg:mx-auto"
            >
              Experience the difference of working with a dedicated professional who delivers 
              exceptional results and unmatched value for your business growth.
            </motion.p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12">
            {[
              {
                icon: Award,
                title: 'Proven Track Record',
                description: 'Over 500+ successful projects delivered with 98% client satisfaction rate. Our portfolio speaks for itself.',
                highlight: '500+ Projects Completed',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: Zap,
                title: 'Lightning-Fast Delivery',
                description: 'Quick turnaround times without compromising quality. Most projects delivered within 2-6 weeks.',
                highlight: '2-6 Week Delivery',
                color: 'from-cyan-400 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: 'Every project comes with our quality guarantee and ongoing support to ensure your success.',
                highlight: '100% Quality Assured',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Personalized Service',
                description: 'Direct communication with RivaaL dESA. No middlemen, no confusion - just clear, professional service.',
                highlight: 'Direct Communication',
                color: 'from-purple-400 to-pink-500'
              },
              {
                icon: BarChart3,
                title: 'Results-Driven Approach',
                description: 'Focus on measurable outcomes that impact your bottom line. Every decision is data-driven.',
                highlight: 'Measurable Results',
                color: 'from-blue-500 to-purple-600'
              },
              {
                icon: Globe,
                title: 'Cutting-Edge Technology',
                description: 'Always using the latest tools and technologies to keep your business ahead of the competition.',
                highlight: 'Latest Technology',
                color: 'from-indigo-400 to-cyan-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="pt-4 border-t border-white/20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-cyan-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-200 transition-colors">
                      ✨ {benefit.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12"
          >
            <div className="text-center space-y-6 mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                What Sets Us Apart
              </h3>
              <p className="text-blue-200 lg:text-lg max-w-2xl mx-auto">
                Beyond exceptional work, you get a partnership focused on your long-term success
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  icon: '🎯',
                  title: 'Strategic Thinking',
                  description: 'Every project starts with understanding your business goals'
                },
                {
                  icon: '💡',
                  title: 'Creative Innovation',
                  description: 'Fresh, original ideas that make your brand stand out'
                },
                {
                  icon: '🚀',
                  title: 'Growth Focused',
                  description: 'Solutions designed to scale with your business'
                },
                {
                  icon: '🤝',
                  title: 'Long-term Partnership',
                  description: 'Ongoing support and optimization for continued success'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-4 p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-4xl">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Services Preview */}
        <motion.section
          variants={itemVariants}
          className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="text-center space-y-4 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-white"
            >
              Specialized Services That Drive Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-200 lg:text-lg"
            >
              Comprehensive digital solutions to grow your business and online presence
            </motion.p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                icon: Monitor,
                title: 'Website Creation',
                description: 'Professional, responsive websites that convert visitors into customers',
                color: 'from-blue-400 to-cyan-400',
                link: '/website-services'
              },
              {
                icon: Search,
                title: 'SEO Services',
                description: 'Boost your search rankings and drive organic traffic to your website',
                color: 'from-green-400 to-blue-500',
                link: '/seo-services'
              },
              {
                icon: ShoppingCart,
                title: 'SEO Marketplace',
                description: 'Dominate Amazon, eBay, Etsy and other marketplace platforms',
                color: 'from-orange-400 to-purple-500',
                link: '/seo-marketplace-services'
              },
              {
                icon: Target,
                title: 'Ads Management',
                description: 'Professional advertising campaigns that deliver exceptional ROI',
                color: 'from-blue-500 to-purple-600',
                link: '/ads-services'
              },
              {
                icon: Users,
                title: 'Social Media Management',
                description: 'Build your brand and engage your audience across all platforms',
                color: 'from-pink-500 to-purple-600',
                link: '/social-media-services'
              },
              {
                icon: BarChart3,
                title: 'Digital Marketing Agency',
                description: 'Full-service digital marketing solutions for complete growth',
                color: 'from-blue-500 to-purple-600',
                link: '/digital-marketing-agency'
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces that users love to interact with',
                color: 'from-purple-400 to-pink-400',
                link: '/portfolio'
              },
              {
                icon: Code,
                title: 'Web Development',
                description: 'Custom web applications built with modern technologies',
                color: 'from-cyan-400 to-blue-500',
                link: '/portfolio'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(service.link)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-200 leading-relaxed">{service.description}</p>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center text-cyan-300 text-sm font-medium hover:text-white transition-colors cursor-pointer">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Preview Section */}
        <motion.section
          variants={itemVariants}
          className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="text-center space-y-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-white"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-200 lg:text-lg lg:max-w-3xl lg:mx-auto"
            >
              Explore some of our recent projects that showcase the quality and innovation 
              we bring to every client engagement.
            </motion.p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 mb-12">
            {[
              {
                title: 'Nexus Banking App',
                category: 'UI/UX Design',
                description: 'Modern banking interface with seamless user experience and intuitive navigation.',
                image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
                year: '2024',
                client: 'Nexus Financial'
              },
              {
                title: 'EcoTech Brand Identity',
                category: 'Branding',
                description: 'Complete brand identity for sustainable technology company with modern aesthetics.',
                image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
                year: '2024',
                client: 'EcoTech Solutions'
              },
              {
                title: 'ArtSpace Gallery',
                category: 'Web Design',
                description: 'Contemporary art gallery website redesign with clean, minimalist approach.',
                image: 'https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=600',
                year: '2023',
                client: 'ArtSpace Gallery'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate('/portfolio')}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-cyan-300 bg-cyan-400/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-blue-200">{project.year}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors lg:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed lg:text-lg">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.client && (
                    <p className="text-sm text-blue-300 lg:text-base">
                      Client: {project.client}
                    </p>
                  )}

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center text-cyan-300 text-sm font-medium group-hover:text-white transition-colors cursor-pointer lg:text-base">
                      View Project
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Portfolio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 233, 169, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 lg:px-10"
            >
              View All Projects
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          variants={itemVariants}
          className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-blue-200 lg:text-lg max-w-2xl mx-auto">
                Let's discuss your project and bring your vision to life with innovative design and development.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 233, 169, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-green-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={24} />
            </motion.button>

            {/* Blog Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16 lg:mt-20"
            >
              <div className="text-center space-y-4 mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Latest Insights
                </h3>
                <p className="text-blue-200 lg:text-lg max-w-2xl mx-auto">
                  Stay updated with the latest trends, tips, and strategies in digital design and marketing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: 'The Future of Web Design: Trends to Watch in 2025',
                    excerpt: 'Discover the latest web design trends that will shape the digital landscape in 2025, from AI-powered interfaces to immersive experiences.',
                    category: 'Web Design',
                    date: 'Dec 15, 2024',
                    readTime: '8 min read',
                    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
                  },
                  {
                    title: 'SEO Strategies That Actually Work in 2025',
                    excerpt: 'Learn the most effective SEO techniques that are driving real results for businesses in today\'s competitive digital landscape.',
                    category: 'SEO',
                    date: 'Dec 10, 2024',
                    readTime: '12 min read',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
                  },
                  {
                    title: 'Building a Brand That Resonates: A Complete Guide',
                    excerpt: 'From logo design to brand voice, discover how to create a cohesive brand identity that connects with your target audience.',
                    category: 'Branding',
                    date: 'Dec 5, 2024',
                    readTime: '10 min read',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }
                ].map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => navigate('/blog')}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6 lg:p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-cyan-300 bg-cyan-400/20 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-blue-200">{post.date}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors lg:text-2xl">
                          {post.title}
                        </h4>
                        <p className="text-blue-200 leading-relaxed lg:text-lg">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center text-cyan-300 text-sm font-medium group-hover:text-white transition-colors">
                          Read More
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* View All Blog Posts CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 233, 169, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/blog')}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 lg:px-10"
                >
                  View All Articles
                  <ArrowRight size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Home;