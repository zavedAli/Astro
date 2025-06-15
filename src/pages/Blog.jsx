import React, { useState } from 'react';
import SEO from '../components/SEO';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Impact of Saturn Retrograde 2024',
      excerpt: 'Learn how Saturns retrograde motion will affect your life and what remedies you can follow to minimize its negative effects.',
      fullContent: `Saturn's retrograde period in 2024 is a significant astrological event that will affect all zodiac signs. During this time, Saturn will appear to move backward in the sky, creating a period of reflection and reassessment.

Key Effects:
• Career and professional life may face challenges
• Relationships may require more effort and patience
• Financial matters need careful consideration
• Health and well-being require attention

Remedies to Follow:
1. Regular meditation and spiritual practices
2. Wearing blue sapphire or amethyst
3. Performing Saturn puja on Saturdays
4. Donating to the needy
5. Maintaining discipline in daily routines

This period is ideal for:
• Reviewing long-term goals
• Strengthening foundations
• Building patience and resilience
• Developing spiritual practices

Remember that Saturn's influence, while challenging, brings valuable lessons and growth opportunities.`,
      category: 'Planetary Movements',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'The Power of Vedic Astrology in Modern Life',
      excerpt: 'Discover how ancient Vedic wisdom can help navigate contemporary challenges and find balance in today\'s fast-paced world.',
      fullContent: `Vedic astrology, an ancient Indian science, offers profound insights into modern life challenges. This comprehensive system combines astronomy, mathematics, and spiritual wisdom to provide guidance for contemporary living.

Key Aspects of Vedic Astrology:
• Detailed birth chart analysis
• Planetary period predictions
• Relationship compatibility
• Career and life path guidance
• Health and well-being insights

Modern Applications:
1. Career Planning
   - Identifying suitable professions
   - Timing for career changes
   - Work-life balance guidance

2. Relationship Guidance
   - Compatibility analysis
   - Timing for marriage
   - Family harmony solutions

3. Health and Wellness
   - Preventive measures
   - Healing practices
   - Lifestyle recommendations

4. Financial Planning
   - Investment timing
   - Business opportunities
   - Wealth management

The integration of Vedic astrology with modern life provides a unique perspective for personal growth and decision-making.`,
      category: 'Vedic Wisdom',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Zodiac Signs and Their Spiritual Significance',
      excerpt: 'Explore the deeper spiritual meanings behind each zodiac sign and how they influence your spiritual journey.',
      fullContent: `Each zodiac sign carries unique spiritual significance and lessons for personal growth. Understanding these deeper meanings can enhance your spiritual journey and self-awareness.

Aries (March 21 - April 19)
• Spiritual Lesson: Courage and Initiative
• Key Qualities: Leadership, pioneering spirit
• Spiritual Practice: Dynamic meditation

Taurus (April 20 - May 20)
• Spiritual Lesson: Stability and Grounding
• Key Qualities: Patience, determination
• Spiritual Practice: Nature connection

Gemini (May 21 - June 20)
• Spiritual Lesson: Communication and Learning
• Key Qualities: Adaptability, curiosity
• Spiritual Practice: Mantra chanting

Cancer (June 21 - July 22)
• Spiritual Lesson: Emotional Intelligence
• Key Qualities: Nurturing, intuition
• Spiritual Practice: Moon meditation

Leo (July 23 - August 22)
• Spiritual Lesson: Self-Expression
• Key Qualities: Creativity, leadership
• Spiritual Practice: Sun salutations

Virgo (August 23 - September 22)
• Spiritual Lesson: Service and Perfection
• Key Qualities: Analysis, healing
• Spiritual Practice: Karma yoga

Libra (September 23 - October 22)
• Spiritual Lesson: Balance and Harmony
• Key Qualities: Diplomacy, fairness
• Spiritual Practice: Partner meditation

Scorpio (October 23 - November 21)
• Spiritual Lesson: Transformation
• Key Qualities: Depth, intensity
• Spiritual Practice: Shadow work

Sagittarius (November 22 - December 21)
• Spiritual Lesson: Higher Learning
• Key Qualities: Wisdom, adventure
• Spiritual Practice: Philosophy study

Capricorn (December 22 - January 19)
• Spiritual Lesson: Achievement
• Key Qualities: Discipline, responsibility
• Spiritual Practice: Mountain meditation

Aquarius (January 20 - February 18)
• Spiritual Lesson: Innovation
• Key Qualities: Originality, humanitarianism
• Spiritual Practice: Group meditation

Pisces (February 19 - March 20)
• Spiritual Lesson: Transcendence
• Key Qualities: Compassion, imagination
• Spiritual Practice: Dream work

Understanding your sign's spiritual significance can guide your personal growth and spiritual development.`,
      category: 'Zodiac Signs',
      date: 'March 5, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Astrological Remedies for Common Life Challenges',
      excerpt: 'Learn effective astrological remedies and solutions for overcoming obstacles in career, relationships, and personal growth.',
      fullContent: `Astrological remedies offer practical solutions for various life challenges. These ancient practices can help balance planetary influences and improve life circumstances.

Career Challenges:
1. Mercury-related Issues
   - Wear green emerald
   - Practice communication exercises
   - Donate green items on Wednesdays

2. Sun-related Issues
   - Wear ruby or red coral
   - Perform Surya Namaskar
   - Donate to educational causes

Relationship Challenges:
1. Venus-related Issues
   - Wear diamond or white sapphire
   - Practice partner meditation
   - Donate to couples in need

2. Mars-related Issues
   - Wear red coral
   - Practice physical exercise
   - Donate to sports causes

Health Challenges:
1. Moon-related Issues
   - Wear pearl
   - Practice moon meditation
   - Donate to healthcare causes

2. Saturn-related Issues
   - Wear blue sapphire
   - Practice patience exercises
   - Donate to elderly care

Financial Challenges:
1. Jupiter-related Issues
   - Wear yellow sapphire
   - Practice abundance meditation
   - Donate to educational causes

2. Rahu-related Issues
   - Wear hessonite
   - Practice grounding exercises
   - Donate to social causes

Spiritual Growth:
1. Ketu-related Issues
   - Wear cat's eye
   - Practice spiritual meditation
   - Donate to spiritual causes

Remember to:
• Consult with an astrologer before wearing gemstones
• Combine remedies with practical actions
• Maintain consistency in practice
• Have faith in the process

These remedies work best when combined with positive thinking and consistent effort.`,
      category: 'Astrological Remedies',
      date: 'February 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <>
      <SEO 
        title="Astrology Blog - Latest Articles and Insights"
        description="Explore our collection of trending astrology articles, planetary movements, and spiritual insights. Stay updated with the latest in Vedic astrology."
        keywords="astrology blog, vedic astrology articles, planetary movements, zodiac signs, spiritual insights, astrological remedies"
      />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-deep-purple mb-8">Astrology Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  expandedPost === post.id ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-deep-purple text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-deep-purple mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {expandedPost === post.id ? post.fullContent : post.excerpt}
                  </p>
                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="text-deep-purple bg-white hover:text-marigold font-semibold transition-colors"
                  >
                    {expandedPost === post.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog; 