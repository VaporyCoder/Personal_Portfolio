const projects = [
    {
      id: 1,
      slug: 'animenexus',
      title: 'AnimeNexus',
      shortDescription: 'A modern anime and manga tracking platform with social features and AI-enhanced content',
      overview: 'AnimeNexus is a comprehensive anime and manga tracking platform designed to provide users with a clean, modern interface for discovering, tracking, and engaging with their favorite anime and manga content. The project includes features like personal libraries, detailed information pages, community discussions, and friend connections.',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Mistral LLM'],
      bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      liveUrl: 'https://animenexusdb.up.railway.app/',
      githubUrl: 'https://github.com/yourusername/animenexus',
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
    // Add more projects here as needed
    {
      id: 2,
      slug: 'project-example',
      title: 'Project Example',
      shortDescription: 'Brief description of another project',
      overview: 'This is a placeholder for another project. You can add more projects to this array to showcase in your portfolio.',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      bgColor: 'bg-gradient-to-r from-blue-600 to-teal-600',
      // Add other fields as needed
    }
  ];
  
  export default projects;