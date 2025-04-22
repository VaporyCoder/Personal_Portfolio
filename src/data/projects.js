const projects = [
    {
      id: 1,
      slug: 'animenexus',
      title: 'AnimeNexus',
      shortDescription: 'A modern anime and manga tracking platform with social features and AI-enhanced content',
      overview: 'AnimeNexus is a comprehensive anime and manga tracking platform designed to provide users with a clean, modern interface for discovering, tracking, and engaging with their favorite anime and manga content. The project includes features like personal libraries, detailed information pages, community discussions, and friend connections.',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Mistral LLM'],
      bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
      liveUrl: 'https://animenexusdb.up.railway.app/',
      githubUrl: 'https://github.com/VaporyCoder/AnimeDB',
      images: [
        '/images/projects/animenexus/main.webp',
        '/images/projects/animenexus/main_light.webp',
        '/images/projects/animenexus/animenexus_anime.webp',
        '/images/projects/animenexus/animenexus_manga.webp',
        '/images/projects/animenexus/animenexus_characters.webp',
        '/images/projects/animenexus/animenexus_detail.webp',
        '/images/projects/animenexus/animenexus_profile.webp',
      ],
      technical: [
        'AnimeNexus was built using a modern JavaScript stack, with React on the frontend, Node.js and Express.js for the backend API, and PostgreSQL for the database.',
        'The platform integrates with the Jikan API to build and periodically update its database of anime, manga, and character information, ensuring content stays fresh and relevant.',
        'One of the most innovative aspects is the implementation of a locally hosted Mistral LLM to enhance content descriptions, providing users with more detailed and engaging synopses and character information.'
      ],
      frontend: [
        'ReactJS for component-based UI development',
        'Modern, responsive design with custom CSS',
        'State management with React Context and hooks',
        'Client-side routing with React Router'
      ],
      backend: [
        'Node.js with Express.js for RESTful API',
        'PostgreSQL for relational data storage',
        'Authentication system with JWT',
        'Integration with Jikan API for data',
        'Sentry for application monitoring',
        'Redis caching for quickly calling data'
      ],
      features: [
        {
          title: 'Comprehensive Tracking System',
          description: 'Users can create and maintain detailed libraries of anime and manga, track their progress, and rate and review content.'
        },
        {
          title: 'Content Discovery',
          description: 'Detailed information pages for anime, manga, and characters, enhanced by AI-generated descriptions for a richer experience.'
        },
        {
          title: 'Social Elements',
          description: 'Friend connections allow users to follow others\' activity, while community threads enable discussions around specific topics.'
        },
        {
          title: 'MAL Import Functionality',
          description: 'Seamless migration from MyAnimeList (MAL) with an import tool that preserves all user ratings, statuses, and progress.'
        }
      ],
      challenges: [
        {
          problem: 'Setting up Sentry for comprehensive application monitoring was technically challenging and required deep integration with both frontend and backend.',
          solution: 'Implemented custom configuration of Sentry to track specific metrics relevant to the application, resulting in a robust monitoring system that helps identify and resolve issues quickly.'
        },
        {
          problem: 'Managing a large dataset (~30K anime, ~75K manga, ~120K characters) efficiently to ensure good performance.',
          solution: 'Optimized database schema and query patterns, implementing pagination and selective data loading to maintain fast performance even with substantial data volume.'
        },
        {
          problem: 'Generic or limited content descriptions from the API didn\'t provide the depth of information desired for the platform.',
          solution: 'Implemented a locally hosted Mistral LLM to enhance anime synopses and character attributes, resulting in more detailed and engaging content that improves the user experience.'
        }
      ],
      results: [
        'AnimeNexus now stands as a fully functional anime and manga tracking platform with a comprehensive database covering ~30K anime, ~75K manga titles, and ~120K characters.',
        'The platform features a modern, clean user interface that prioritizes content and user experience, along with core social and tracking features that enhance engagement.',
        'Through this project, I gained valuable experience in balancing feature richness with UI simplicity, efficiently managing large datasets, and implementing AI tools to enhance content quality.'
      ],
      stats: [
        { value: '30K+', label: 'Anime Entries' },
        { value: '75K+', label: 'Manga Entries' },
        { value: '120K+', label: 'Character Profiles' },
        { value: '100%', label: 'Completion' }
      ],
      nextSteps: [
        'Implementation of personalized recommendation system based on user preferences and behavior',
        'Enhanced statistical analysis for deeper insights into user lists',
        'Further UI/UX refinements based on user feedback',
        'Expanded social features to strengthen community engagement'
      ]
    },
    {
      id: 2,
      slug: 'gamershaven',
      title: 'Gamers Haven',
      shortDescription: 'A premium ecommerce platform for gaming products with an immersive UI and seamless shopping experience',
      overview: 'Gamers Haven is a comprehensive ecommerce platform designed specifically for gamers, offering everything from consoles and accessories to merchandise and digital games. The UI/UX design project focused on creating an immersive, intuitive shopping experience that appeals to gaming enthusiasts while maintaining excellent usability and conversion-optimized flows.',
      technologies: ['Figma', 'Prototyping', 'UI/UX Design', 'User Research', 'Wireframing', 'Design System', 'Motion Design'],
      bgColor: 'bg-gradient-to-r from-indigo-600 to-pink-600',
      liveUrl: 'https://www.figma.com/proto/xJ7gH3E9CkqMRT5LBWYzXd/Gamers Haven',
      figmaUrl: 'https://www.figma.com/file/xJ7gH3E9CkqMRT5LBWYzXd/Gamers Haven',
      images: [
        '/images/projects/gamershaven/main1.webp',
        '/images/projects/gamershaven/main2.webp',
        '/images/projects/gamershaven/Home.webp',
        '/images/projects/gamershaven/Search Results.webp',
        '/images/projects/gamershaven/Product Details.webp',
        '/images/projects/gamershaven/Cart.webp',
        '/images/projects/gamershaven/Payment.webp',
      ],
      design: [
        'Created a cohesive design system with a dark-mode centered aesthetic that resonates with gaming audiences',
        'Developed an extensive component library with over 200 reusable UI elements for consistent implementation',
        'Implemented a color palette inspired by popular gaming hardware and interfaces with neon accents for visual hierarchy',
        'Designed responsive layouts that adapt seamlessly across desktop, tablet, and mobile devices'
      ],
      research: [
        'Conducted user interviews with 15 gamers of varying demographics to understand shopping preferences and pain points',
        'Analyzed 5 competitor platforms to identify industry best practices and opportunities for differentiation',
        'Created user personas representing different segments of the gaming community to guide design decisions',
        'Performed card sorting exercises to develop an intuitive navigation and category system for diverse gaming products'
      ],
      features: [
        {
          title: 'Immersive Product Browsing',
          description: 'Interactive 3D product viewers and game-like category exploration that transforms shopping into an engaging experience'
        },
        {
          title: 'Personalized Recommendations',
          description: 'Custom-designed recommendation components that display products based on gaming preferences, platform ownership, and purchase history'
        },
        {
          title: 'Seamless Multi-platform Shopping',
          description: 'Unified shopping cart across devices with platform-optimized interfaces for mobile, tablet, desktop, and even console browsers'
        },
        {
          title: 'Community Integration',
          description: 'Built-in community features including product reviews, setup showcases, and gaming achievement integration'
        },
        {
          title: 'Streamlined Checkout',
          description: 'One-page checkout optimized for conversion with multiple payment options and gamer-specific delivery preferences'
        }
      ],
      process: [
        {
          phase: 'Research & Discovery',
          description: 'Started with comprehensive market analysis, user interviews, and competitive research to identify opportunities in the gaming ecommerce space'
        },
        {
          phase: 'User Flow Mapping',
          description: 'Created detailed user journeys and flow diagrams to plan optimal navigation paths for different shopping scenarios'
        },
        {
          phase: 'Wireframing',
          description: 'Developed low and medium-fidelity wireframes to establish layout structures and information architecture before visual design'
        },
        {
          phase: 'Visual Design System',
          description: 'Built a comprehensive component-based design system that combines gaming aesthetics with ecommerce best practices'
        },
        {
          phase: 'Interactive Prototyping',
          description: 'Created high-fidelity interactive prototypes with micro-interactions and animations to test and showcase the final experience'
        },
        {
          phase: 'Usability Testing',
          description: 'Conducted testing sessions with target users to validate design decisions and identify areas for improvement'
        }
      ],
      challenges: [
        {
          problem: 'Balancing immersive gaming-themed UI elements with ecommerce usability and conversion optimization',
          solution: 'Developed a hierarchy system where core shopping functions use familiar ecommerce patterns, while category browsing and product discovery incorporate more immersive, game-like elements'
        },
        {
          problem: 'Creating a categorization system that effectively organizes the vast range of gaming products while remaining intuitive',
          solution: 'Implemented a dual navigation system with platform-based and category-based browsing options, validated through card sorting exercises with actual gamers'
        },
        {
          problem: 'Designing an effective product detail page that accommodates vastly different product types from physical hardware to digital games',
          solution: 'Created a modular product detail template with conditional components that adapt based on product type, showcasing relevant information for each category'
        }
      ],
      results: [
        'Completed a comprehensive design system with 8 key user flows, 45+ unique screens, and 200+ reusable components',
        'Usability testing showed a 35% improvement in task completion rates compared to competitor benchmarks',
        'The design received enthusiastic feedback from both stakeholders and target users for its balance of gaming aesthetics with shopping functionality',
        'Created handoff documentation and component specifications ready for development implementation'
      ],
      stats: [
        { value: '45+', label: 'Unique Screens' },
        { value: '200+', label: 'UI Components' },
        { value: '8', label: 'User Flows' },
        { value: '35%', label: 'Improved Usability' }
      ],
      nextSteps: [
        'Development of a clickable prototype for additional user testing',
        'Motion design specifications for key micro-interactions',
        'Expansion of the design system to include additional themes and accessibility options',
        'Adaptation of the design for emerging AR/VR shopping experiences'
      ]
    }
  ];
  
  export default projects;