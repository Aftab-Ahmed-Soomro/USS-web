export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
  overlay?: boolean;
};

export type WorkIcon = "creator" | "social" | "email" | "360";
export type OutcomeIcon = "megaphone" | "bars" | "shield" | "star";

export type ProjectDetail = {
  slug: string;
  productName: string;
  title: string;
  description: string;
  heroImage: ProjectImage;
  overviewSubtitle: string;
  galleryImages: ProjectImage[];
  goal: string;
  workIntro: string;
  workItems: {
    icon: WorkIcon;
    text: string;
  }[];
  approach: string;
  outcomes: {
    icon: OutcomeIcon;
    text: string;
  }[];
  focusAreas: string[];
  videoTitle: string;
  videoSubtitle: string;
  videoPreview: ProjectImage;
  videoSrc?: string;
  videoSrcs?: string[];
  metadata?: {
    title: string;
    description: string;
  };
  hideVideoSection?: boolean;
  hideSocialGridPreview?: boolean;
  socialGridImage?: string;
  galleryLayout?: "grid" | "centerVideo";
};

export const projectDetails: ProjectDetail[] = [
  {
    "slug": "agency-8",
    "productName": "Agency 8",
    "title": "Real Estate Agency Email & WhatsApp Strategy",
    "description": "Agency 8 is a Dubai real estate agency helping buyers and investors discover property opportunities across the UAE. We introduced Email and WhatsApp Marketing to improve how new enquiries are followed up, keep leads engaged and support the sales journey beyond the initial enquiry.",
    "heroImage": {
      "src": "/assets/agency/agency.png",
      "alt": "Agency 8 luxury apartment interior overlooking the sea",
      "position": "50% 50%"
    },
    "overviewSubtitle": "Sneak peek into Agency 8",
    "galleryImages": [
      {
        "src": "/assets/agency/1.png",
        "alt": "Agency 8 luxury waterfront property terrace",
        "position": "50% 50%"
      },
      {
        "src": "/assets/agency/2.png",
        "alt": "Agency 8 Dubai penthouse terrace with skyline view",
        "position": "50% 48%"
      },
      {
        "src": "/assets/agency/3.png",
        "alt": "Agency 8 premium apartment dining and living room",
        "position": "50% 50%"
      },
      {
        "src": "/assets/agency/4.png",
        "alt": "Agency 8 modern beachfront residence exterior",
        "position": "50% 52%"
      }
    ],
    "goal": "Improve lead follow up and give Agency 8 more ways to communicate with potential buyers and investors after they enquire.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Custom Website Design & Development"
      },
      {
        "icon": "social",
        "text": "Email Marketing"
      },
      {
        "icon": "email",
        "text": "WhatsApp Integration"
      },
      {
        "icon": "360",
        "text": "Lead Generation Strategy"
      }
    ],
    "approach": "Property decisions rarely happen after one enquiry. We introduced Email and WhatsApp communication at key stages of the journey, allowing Agency 8 to follow up with leads, share relevant properties and continue conversations across both channels.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "8+ Automated email journeys introduced"
      },
      {
        "icon": "bars",
        "text": "WhatsApp integrated into lead follow up"
      },
      {
        "icon": "shield",
        "text": "More consistent communication with new enquiries"
      },
      {
        "icon": "star",
        "text": "Leads kept engaged beyond the initial enquiry"
      }
    ],
    "focusAreas": [
      "WhatsApp Marketing",
      "Email Marketing",
      "Website Transformation"],
    "videoTitle": "Explore Real Estate in Dubai",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Agency 8 real estate campaign",
      "position": "50% 44%"
    },
    "videoSrc": "/assets/agency/Elite Residences Penthouse 8101.mp4",
      },
  {
    "slug": "sadia-psychology",
    "productName": "Sadia Psychology",
    "title": "Black Friday Project with Sadia Psychology",
    "description": "Sadia Psychology is a content creator and educator with a global audience of more than 800K followers across Instagram and YouTube. We supported the development and launch of her 2024 planner, taking the product from initial concept through to a Black Friday campaign that sold thousands of planners within two weeks.",
    "heroImage": {
      "src": "/assets/sadia/Sadia.png",
      "alt": "Sadia Psychology holding her planner",
      "position": "20% 20%"
    },
    "overviewSubtitle": "SNEAK PEEK INTO BLACK FRIDAY LAUNCH",
    "galleryImages": [
      {
        "src": "/assets/sadia/1.png",
        "alt": "Sadia Psychology product launch studio portrait",
        "position": "22% 50%"
      },
      {
        "src": "/assets/sadia/2.png",
        "alt": "Sadia Psychology seated portrait for campaign content",
        "position": "50% 43%"
      },
      {
        "src": "/assets/sadia/3.png",
        "alt": "Sadia Psychology planner product close up",
        "position": "74% 50%"
      },
      {
        "src": "/assets/sadia/4.png",
        "alt": "Sadia Psychology Black Friday launch portrait",
        "position": "50% 35%"
      }
    ],
    "goal": "Turn an idea into a physical product that felt relevant to Sadia's audience, with a launch strategy focused on generating demand and driving sales over Black Friday.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Product Concept Development"
      },
      {
        "icon": "social",
        "text": "Planner Design & Production"
      },
      {
        "icon": "email",
        "text": "Marketing Strategy"
      },
      {
        "icon": "360",
        "text": "Digital Launch Execution"
      }
    ],
    "approach": "The campaign started well before Black Friday, with planning across the product, messaging and launch activity. We used Sadia's existing channels, Content and Email Marketing to introduce the planner, build interest ahead of release and drive sales throughout the campaign.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Thousands of planners sold within two weeks"
      },
      {
        "icon": "bars",
        "text": "Strong response from Sadia's existing audience"
      },
      {
        "icon": "shield",
        "text": "Planner sold out during the Black Friday campaign"
      },
      {
        "icon": "star",
        "text": "Successful move from digital content into a physical product"
      }
    ],
    "focusAreas": [
      "Product Launch",
      "Email Marketing",
      "Brand Alignment",
      "Content Creation"],
    "videoTitle": "Black Friday Product Launch",
    "videoSubtitle": "See how we brought this campaign to life.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Sadia Psychology Black Friday launch",
      "position": "50% 44%"
    },
    "metadata": {
      "title": "Sadia Psychology Black Friday Launch | USS Projects",
      "description": "A USS project overview for launching Sadia Psychology's 2024 planner through product concept development, marketing strategy, and digital launch execution."
    },
    "hideVideoSection": true
  },
  {
    "slug": "women-who-thrive",
    "productName": "Women Who Thrive",
    "title": "Increasing Memberships for Women Who Thrive",
    "description": "Women Who Thrive is a Dubai based networking community bringing women together through business, connection and personal growth. We supported the community through Organic Marketing, growing Instagram from 6K to 22K and tripling membership within 15 months, without relying on\u00a0Paid\u00a0Advertising.",
    "heroImage": {
      "src": "/assets/women/Women.jpg",
      "alt": "Women Who Thrive event portrait with three women",
      "position": "50% 45%"
    },
    "overviewSubtitle": "Sneak peek into Women Who Thrive networking",
    "galleryImages": [
      {
        "src": "/assets/women/1.jpg",
        "alt": "Women Who Thrive campaign attendee moment",
        "position": "18% 50%"
      },
      {
        "src": "/assets/women/2.jpg",
        "alt": "Women Who Thrive event branding and activation",
        "position": "38% 50%"
      },
      {
        "src": "/assets/women/3.jpg",
        "alt": "Women Who Thrive networking event guests",
        "position": "56% 50%"
      },
      {
        "src": "/assets/women/4.jpg",
        "alt": "Women Who Thrive community event audience",
        "position": "78% 50%"
      }
    ],
    "goal": "Grow membership and increase the community's reach while building an active and engaged audience organically.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Marketing Strategy"
      },
      {
        "icon": "social",
        "text": "Organic Social Marketing"
      },
      {
        "icon": "email",
        "text": "Content Creation"
      },
      {
        "icon": "360",
        "text": "Email Marketing"
      }
    ],
    "approach": "We made the community itself the focus of the marketing, using member stories, events, conversations and regular content to show what Women Who Thrive offered. Social Media, Content and Email kept the community active between events while encouraging new members to join.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Membership tripled within 15 months"
      },
      {
        "icon": "bars",
        "text": "Organic Instagram growth from 6K to 22K"
      },
      {
        "icon": "shield",
        "text": "High engagement without paid advertising"
      },
      {
        "icon": "star",
        "text": "Active community across social media and events"
      }
    ],
    "focusAreas": [
      "Membership Strategy",
      "Social Media",
      "Email Marketing",
      "Content Creation"],
    "videoTitle": "Building A Strong, Community Driven Brand.",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Women Who Thrive community campaign",
      "position": "50% 44%"
    },
    "videoSrcs": [
      "/assets/womenwho/WWT Event recap.mov",
      "/assets/womenwho/WWC.m4v",
      "/assets/womenwho/Gala Recap Chatz.mov"
    ],
      },
  {
    "slug": "picksperience",
    "productName": "Picksperience",
    "title": "Sampling Agency Launching from UK to UAE",
    "description": "Picksperience is a product sampling platform helping brands get products directly into the hands of targeted audiences, from office workers and students to gym members and more. Following its UK presence, we supported Picksperience with its UAE launch through Content, Social media, Email Marketing and Paid Social.",
    "heroImage": {
      "src": "/assets/picksperience/Pickspereince.png",
      "alt": "Picksperience launch venue and sampling activation space",
      "position": "50% 43%"
    },
    "overviewSubtitle": "SNEAK PEEK INTO PICKSPERIENCE LAUNCH",
    "galleryImages": [
      {
        "src": "/assets/pick1.0.webp",
        "alt": "Picksperience product sampling activation venue",
        "position": "18% 50%"
      },
      {
        "src": "/assets/picksperience/2.jpg",
        "alt": "Picksperience sampling campaign setup",
        "position": "38% 50%"
      },
      {
        "src": "/assets/pick3.0.webp",
        "alt": "Picksperience audience engagement launch content",
        "position": "58% 50%"
      },
      {
        "src": "/assets/picksperience/4.jpg",
        "alt": "Picksperience brand sampling platform launch",
        "position": "78% 50%"
      }
    ],
    "goal": "Introduce Picksperience to the UAE market and build awareness among brands looking for more direct ways to get their products in front of relevant audiences.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Content Creation"
      },
      {
        "icon": "social",
        "text": "Social Media Marketing"
      },
      {
        "icon": "email",
        "text": "Ongoing Email Marketing"
      },
      {
        "icon": "360",
        "text": "Meta Ads Activation"
      }
    ],
    "approach": "The marketing needed to speak to both sides of the platform. For brands, we focused on the reach and value of targeted product sampling. For consumers, the focus was on discovering and trying new products, giving Picksperience a clear message for each audience.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Picksperience introduced to the UAE market"
      },
      {
        "icon": "bars",
        "text": "Increased awareness across digital channels"
      },
      {
        "icon": "shield",
        "text": "Growing interest from brands and consumers"
      },
      {
        "icon": "star",
        "text": "Clear positioning within the UAE sampling market"
      }
    ],
    "focusAreas": [
      "Market Entry Strategy",
      "Meta Ads",
      "Email Marketing",
      "Content Creation"],
    "videoTitle": "UAE Market Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Picksperience launch campaign",
      "position": "50% 44%"
    },
    "videoSrc": "/assets/picksperience/pick-1.mp4",
      },
  {
    "slug": "supperclub",
    "productName": "SupperClub",
    "title": "Scaling SupperClub Membership",
    "description": "SupperClub is a dining and lifestyle membership offering exclusive benefits across 700+ venues, including leading restaurants and five star hotels. Our 360 marketing includes Meta Ads, Content and Email Marketing, with 40+ automated Email flows created to support membership growth and engagement.",
    "heroImage": {
      "src": "/assets/supperclub/Supperclub.png",
      "alt": "SupperClub poolside dining and cocktail experience",
      "position": "50% 53%"
    },
    "overviewSubtitle": "SNEAK PEEK INTO SUPPERCLUB PROJECT",
    "galleryImages": [
      {
        "src": "/assets/supperclub/1.png",
        "alt": "SupperClub dining experience with cocktail by the pool",
        "position": "20% 50%"
      },
      {
        "src": "/assets/supperclub/2.png",
        "alt": "SupperClub premium restaurant dish and table setting",
        "position": "42% 58%"
      },
      {
        "src": "/assets/supperclub/3.png",
        "alt": "SupperClub lifestyle membership poolside moment",
        "position": "58% 30%"
      },
      {
        "src": "/assets/supperclub/4.png",
        "alt": "SupperClub hospitality campaign food and drink detail",
        "position": "72% 56%"
      }
    ],
    "goal": "Increase memberships while building awareness of SupperClub and its member benefits through a 360 marketing strategy that connected all digital touchpoints.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "360 Marketing Strategy"
      },
      {
        "icon": "social",
        "text": "Email Marketing"
      },
      {
        "icon": "email",
        "text": "Content Creation"
      },
      {
        "icon": "360",
        "text": "Paid & Organic Social"
      }
    ],
    "approach": "We put the membership benefits at the centre of the marketing, giving clear reasons to join. Meta Ads introduced SupperClub to new audiences, while Email, Social Content and partner promotions kept the brand visible and supported membership growth.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "120% Increase in Memberships"
      },
      {
        "icon": "bars",
        "text": "40+ Email Flows & Campaigns"
      },
      {
        "icon": "shield",
        "text": "Meta Ads Driving New Memberships"
      },
      {
        "icon": "star",
        "text": "Organic Content Building Brand Awareness"
      }
    ],
    "focusAreas": [
      "360 Marketing",
      "Membership Strategy",
      "Wider Marketing Strategy",
      "Paid Media",
      "Social Media Marketing",
      "Creative Content"],
    "videoTitle": "Supperclub Golden Partners",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the SupperClub membership campaign",
      "position": "50% 53%"
    },
    "videoSrcs": [
      "/assets/supperclub/sup-1.mp4",
      "/assets/supperclub/sup-2.MOV",
      "/assets/supperclub/supper-3.mp4"
    ],
    "socialGridImage": "/assets/supperclub/SupperClub - Projects Grid.png",
      },
  {
    "slug": "cinamood",
    "productName": "Cinnamood",
    "title": "Launching Cinnamood in the UAE",
    "description": "Cinnamood is a German bakery franchise known for its signature cinnamon rolls. As the brand expanded into the UAE, we developed an overall Marketing Strategy for Market Entry, supported by locally relevant content and PR to introduce Cinnamood to a new audience while staying true to the brand.",
    "heroImage": {
      "src": "/assets/cinamood/cinamood.jpg",
      "alt": "Cinnamood cinnamon roll with chocolate topping",
      "position": "50% 48%"
    },
    "overviewSubtitle": "Sneak peek into Cinnamood launch",
    "galleryImages": [
      {
        "src": "/assets/cinamood/1.jpg",
        "alt": "Close up of a Cinnamood cinnamon roll",
        "position": "34% 62%"
      },
      {
        "src": "/assets/cinamood/2.jpg",
        "alt": "Cinnamood drink held on an escalator",
        "position": "49% 34%"
      },
      {
        "src": "/assets/cinamood/3.jpg",
        "alt": "Cinnamood pastries on a studio backdrop",
        "position": "64% 48%"
      },
      {
        "src": "/assets/cinamood/4.png",
        "alt": "Cinnamood launch content in Mall of Emirates",
        "position": "50% 45%"
      }
    ],
    "goal": "Develop a local marketing strategy to launch Cinnamood at Mall of the Emirates and build awareness around its arrival in Dubai.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Content Creation tailored for the UAE audience"
      },
      {
        "icon": "social",
        "text": "Social Media Management"
      },
      {
        "icon": "email",
        "text": "Email Marketing setup and campaigns"
      },
      {
        "icon": "360",
        "text": "Market Entry Strategy"
      }
    ],
    "approach": "We took what already worked for Cinnamood and adapted it for Dubai. From the content and messaging to the wider launch activity, everything was planned to connect with the local audience and build awareness around the opening.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Strong awareness around the opening"
      },
      {
        "icon": "bars",
        "text": "High engagement across social media"
      },
      {
        "icon": "shield",
        "text": "Growing UAE email database"
      },
      {
        "icon": "star",
        "text": "A strong introduction to the Dubai market"
      }
    ],
    "focusAreas": [
      "360 Marketing",
      "Content Creation",
      "PR Marketing",
      "Marketing Strategy",
      "Social Media"],
    "videoTitle": "Mall of Emirates Launch",
    "videoSubtitle": "See how we brought this campaign to life",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Cinnamood Mall of Emirates launch",
      "position": "50% 44%"
    },
    "videoSrcs": [
      "/assets/cinamood/cinamood-1.mov",
      "/assets/cinamood/cinamood-2.mov",
      "/assets/cinamood/cinamood-3.mov"
    ],
    "socialGridImage": "/assets/socialGridPreviews/cinamood.webp",
      },
  {
    "slug": "yula-beach-lounge",
    "productName": "Yula Lounge",
    "title": "Transforming Yalseh into Yula Lounge",
    "description": "Yula Lounge is a Dubai based beach club and restaurant, formerly known as Yalseh Lounge. We supported the move to Yula with a new direction for the brand, alongside Content, Social Media, PR, Email Marketing and launch activity to introduce the new identity.",
    "heroImage": {
      "src": "/assets/yula/yula.jpg",
      "alt": "Yula Lounge beach club terrace with Dubai skyline",
      "position": "50% 44%"
    },
    "overviewSubtitle": "Sneak peek into rebrand",
    "galleryImages": [
      {
        "src": "/assets/yula/1.jpg",
        "alt": "Yula Lounge dessert with chocolate sauce",
        "position": "50% 37%"
      },
      {
        "src": "/assets/yula/2.jpg",
        "alt": "Yula Lounge terrace and skyline at night",
        "position": "50% 48%"
      },
      {
        "src": "/assets/yula/3.jpg",
        "alt": "Yula Lounge terrace with city lights",
        "position": "48% 50%"
      },
      {
        "src": "/assets/yula/4.jpg",
        "alt": "Yula Lounge brunch plate and dessert",
        "position": "50% 38%"
      }
    ],
    "goal": "Introduce Yula Lounge as a more modern beach club and restaurant while moving away from the traditional identity associated with Yalseh.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Content Creation aligned with the new brand direction"
      },
      {
        "icon": "social",
        "text": "Social Media management"
      },
      {
        "icon": "email",
        "text": "Email Marketing setup and campaigns"
      },
      {
        "icon": "360",
        "text": "PR and launch support"
      }
    ],
    "approach": "The change from Yalseh to Yula needed to feel clear across every customer facing channel. We rolled out the new direction across Social Media, Content, Email and launch activity, giving the new identity a consistent presence from day one.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Successful transition from Yalseh to Yula Lounge"
      },
      {
        "icon": "bars",
        "text": "New identity rolled out across key digital channels"
      },
      {
        "icon": "shield",
        "text": "Strong engagement around the launch"
      },
      {
        "icon": "star",
        "text": "Increased awareness of the new Yula concept"
      }
    ],
    "focusAreas": [
      "360 Marketing",
      "Brand Transformation",
      "Email Marketing",
      "PR Marketing",
      "Social Media",
      "Content Creation"
    ],
    "videoTitle": "Beach Lounge in Dubai",
    "videoSubtitle": "From Yalseh to Yula",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Yula Lounge rebrand campaign",
      "position": "50% 42%"
    },
    "videoSrc": "/assets/yula/yula.mov",
    "socialGridImage": "/assets/socialGridPreviews/yula.webp",
      },
  {
    "slug": "flowork",
    "productName": "Flowork",
    "title": "Launching Flowork in Dubai Hills & Business Bay",
    "description": "Flowork is a modern workspace offering private offices, meeting rooms and podcast studios. We supported the launch of its Dubai Hills and Business Bay locations through Google Ads, Content and Organic Social, building awareness and generating demand before opening, with 80% of office space sold ahead of launch.",
    "heroImage": {
      "src": "/assets/projectsPagePics/flowork.webp",
      "alt": "Flowork lounge with warm shelving and tan seating",
      "position": "50% 48%"
    },
    "overviewSubtitle": "Sneak peek into Flowork opening",
    "galleryImages": [
      {
        "src": "/assets/flowork/1.jpg",
        "alt": "Flowork workspace corridor and office interior",
        "position": "20% 52%"
      },
      {
        "src": "/assets/flowork/2.jpg",
        "alt": "Flowork reception lounge and brand wall",
        "position": "45% 48%"
      },
      {
        "src": "/assets/flowork/3.jpg",
        "alt": "Flowork working lounge with contemporary seating",
        "position": "62% 48%"
      },
      {
        "src": "/assets/flowork/4.jpg",
        "alt": "Flowork private office lounge detail",
        "position": "78% 50%"
      }
    ],
    "goal": "Build awareness ahead of both openings, generate qualified enquiries and drive office sales from the start using 360 Marketing.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "360 Marketing"
      },
      {
        "icon": "social",
        "text": "Google Ads & SEO"
      },
      {
        "icon": "email",
        "text": "Email Marketing"
      },
      {
        "icon": "360",
        "text": "Social Media Management"
      },
      {
        "icon": "creator",
        "text": "Content Creation"
      }
    ],
    "approach": "Marketing started ahead of opening, giving us time to build awareness and generate leads early. Google Ads drove enquiries, while Social Media, Content and Email kept Flowork visible and potential customers engaged as both locations moved closer to launch.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "80% Office Space Sold Before Opening"
      },
      {
        "icon": "bars",
        "text": "38% Increase in Google Search Visibility"
      },
      {
        "icon": "shield",
        "text": "2 Locations Launched Across Dubai"
      },
      {
        "icon": "star",
        "text": "Multi Channel Marketing Across Paid, Social & Email"
      }
    ],
    "focusAreas": [
      "360 Marketing",
      "Launch Strategy",
      "Google Ads",
      "SEO",
      "Content Creation",
      "Social Media Marketing"],
    "videoTitle": "From Strategy to Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Flowork launch campaign",
      "position": "50% 48%"
    },
    "videoSrcs": [
      "/assets/flowork/flow-1.m4v",
      "/assets/flowork/flow-2.mp4",
      "/assets/flowork/flow-3.mp4"
    ],
    "socialGridImage": "/assets/socialGridPreviews/flowork.webp",
      },
  {
    "slug": "blank-dxb",
    "productName": "Blank DXB",
    "title": "Building Blank DXB from the ground up",
    "description": "Blank DXB transformed an industrial warehouse into a flexible venue for corporate events, private hire and creative experiences. We supported the launch across Branding, Website and Paid Media, driving awareness, enquiries and bookings.",
    "heroImage": {
      "src": "/assets/blank/blank.jpg",
      "alt": "Blank DXB warehouse venue space",
      "position": "50% 50%"
    },
    "overviewSubtitle": "SNEAK PEEK INTO BLANK DXB LAUNCH",
    "galleryImages": [
      {
        "src": "/assets/blank/1.png",
        "alt": "Blank DXB event venue with dramatic lighting",
        "position": "18% 50%"
      },
      {
        "src": "/assets/blank/2.jpg",
        "alt": "Blank DXB corporate event setup concept",
        "position": "40% 50%"
      },
      {
        "src": "/assets/blank/3.jpg",
        "alt": "Blank DXB warehouse event launch atmosphere",
        "position": "62% 50%"
      },
      {
        "src": "/assets/blank/4.jpg",
        "alt": "Blank DXB empty warehouse venue space",
        "position": "82% 50%"
      }
    ],
    "goal": "Take Blank DXB from an initial concept to a fully launched venue with a clear brand, digital presence and pipeline of bookings.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Business setup and operational support"
      },
      {
        "icon": "social",
        "text": "Branding and creative direction"
      },
      {
        "icon": "email",
        "text": "Website Design and Development"
      },
      {
        "icon": "360",
        "text": "Google Ads and Paid Social campaigns"
      }
    ],
    "approach": "Our involvement started before the marketing. We supported the setup of the business, developed the Brand and Website, then launched paid campaigns to generate awareness, enquiries and bookings for the new venue.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Blank DXB successfully launched in Dubai"
      },
      {
        "icon": "bars",
        "text": "New brand and Website launched"
      },
      {
        "icon": "shield",
        "text": "Early enquiries and bookings generated"
      },
      {
        "icon": "star",
        "text": "Ongoing visibility through Paid and Organic Marketing"
      }
    ],
    "focusAreas": [
      "Business Setup",
      "Meta Ads",
      "Google Ads",
      "Content Creation",
      "Social Media Marketing"],
    "videoTitle": "Bringing A New Concept To Life",
    "videoSubtitle": "See how we brought this campaign to life.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Blank DXB launch campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Blank DXB Launch | USS Projects",
      "description": "A USS project overview for building Blank DXB from the ground up through business setup, branding, website design, and paid media strategy."
    },
    "hideVideoSection": true
  },
  {
    "slug": "reclaim-us",
    "productName": "Reclaim",
    "title": "Launching Reclaim in the US",
    "description": "Reclaim is a US luggage collection service making travel days easier by collecting bags from homes, hotels and Airbnbs and delivering them to the airport. We support Reclaim across its US marketing, using Meta Ads alongside Email, Content and wider campaign activity to build awareness and grow the customer base across key markets.",
    "heroImage": {
      "src": "/assets/reclaimMainPic.webp",
      "alt": "Reclaim van and luggage collection service",
      "position": "50% 50%"
    },
    "overviewSubtitle": "Sneak peek into Reclaim US launch",
    "galleryImages": [
      {
        "src": "/assets/reclaim1.webp",
        "alt": "Reclaim travel luggage in airport terminal",
        "position": "16% 50%"
      },
      {
        "src": "/assets/reclaima.webp",
        "alt": "Travelers with luggage inside an airport terminal",
        "position": "38% 50%"
      },
      {
        "src": "/assets/reclaim3.webp",
        "alt": "Traveler with luggage before boarding",
        "position": "58% 50%"
      },
      {
        "src": "/assets/reclaim4.webp",
        "alt": "US travel destination skyline and airport route",
        "position": "82% 50%"
      }
    ],
    "goal": "Build awareness of a new way to travel, grow Reclaim across the US and reach new customers ahead of major travel periods and the World Cup.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "360",
        "text": "360 Marketing"
      },
      {
        "icon": "creator",
        "text": "Marketing Strategy"
      },
      {
        "icon": "social",
        "text": "Paid Media"
      },
      {
        "icon": "email",
        "text": "Email Marketing"
      },
      {
        "icon": "social",
        "text": "Social Media Marketing"
      },
      {
        "icon": "creator",
        "text": "Content Creation"
      }
    ],
    "approach": "Paid Social has played a key role in introducing a completely new service to the US market. Campaigns focus on different travel needs and customer groups, supported by content, email and retargeting to keep Reclaim visible beyond the first interaction.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Reclaim launched across multiple US markets"
      },
      {
        "icon": "bars",
        "text": "Increased awareness across key locations"
      },
      {
        "icon": "shield",
        "text": "Growing US Email database"
      },
      {
        "icon": "star",
        "text": "Larger retargeting audiences for ongoing paid campaigns"
      }
    ],
    "focusAreas": [
      "360 Marketing",
      "Meta Ads",
      "Google Ads",
      "Social Media Marketing",
      "Content Creation",
      "Lead Generation Strategy"],
    "videoTitle": "The Future of Travel is Hands-Free",
    "videoSubtitle": "See how we brought this campaign to life",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Reclaim US launch campaign",
      "position": "50% 50%"
    },
    "videoSrcs": [
      "/assets/reclaim/Video 1.mp4",
      "/assets/reclaim/Video 2.mp4",
      "/assets/reclaim/Video 3.mp4"
    ],
    "metadata": {
      "title": "Reclaim US Launch | USS Projects",
      "description": "A USS project overview for launching Reclaim in the US travel market through marketing strategy, paid media, email marketing, and content creation."
    },
    "socialGridImage": "/assets/socialGridPreviews/reclaim.webp"
  },
  {
    "slug": "adidas-middle-east",
    "productName": "Adidas Middle East",
    "title": "Adidas Middle East Product Launch",
    "description": "Adidas Middle East partnered with USS to deliver the launch of a new product through a high impact event experience. From event planning and on the day delivery to Content Creation, we managed the launch and produced photo and video assets for continued use across digital channels.",
    "heroImage": {
      "src": "/assets/adidas/Adidas.jpg",
      "alt": "Adidas Middle East launch event crowd",
      "position": "50% 40%"
    },
    "overviewSubtitle": "Sneak peek into Adidas event",
    "galleryImages": [
      {
        "src": "/assets/adidas/1.jpg",
        "alt": "Adidas campaign talent in red track jacket",
        "position": "50% 47%"
      },
      {
        "src": "/assets/adidas/2.jpg",
        "alt": "Adidas Originals event product moment",
        "position": "38% 48%"
      },
      {
        "src": "/assets/adidas/3.jpg",
        "alt": "Adidas Middle East launch DJ and event crowd",
        "position": "52% 38%"
      },
      {
        "src": "/assets/adidas/4.jpg",
        "alt": "Adidas Middle East launch guests",
        "position": "72% 42%"
      }
    ],
    "goal": "Deliver a product launch that brought the brand and product together through an engaging event, with high quality content ready for use after the launch.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Event execution and on site support"
      },
      {
        "icon": "social",
        "text": "Launch Content Creation"
      },
      {
        "icon": "email",
        "text": "Photography and video for digital campaigns"
      },
      {
        "icon": "360",
        "text": "Creative direction"
      }
    ],
    "approach": "We managed the event from planning through to delivery, ensuring the brand was represented consistently throughout the launch. Photo and video content was produced throughout the event, giving Adidas additional assets to use across its digital channels after the event.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Successful product launch event"
      },
      {
        "icon": "bars",
        "text": "High quality photo and video assets"
      },
      {
        "icon": "shield",
        "text": "Consistent brand presence throughout the event"
      },
      {
        "icon": "star",
        "text": "Content available for continued digital use"
      }
    ],
    "focusAreas": [
      "Event Management",
      "Brand Alignment",
      "Content Creation"],
    "videoTitle": "Adidas Middle East launch event",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Adidas Middle East product launch",
      "position": "50% 40%"
    },
    "videoSrc": "/assets/adidas/adidas.mp4",
      },
  {
    "slug": "fete-events",
    "productName": "Fete Events",
    "title": "Elevating Luxury Events Through 360 Marketing",
    "description": "Fête Events is an international event management company delivering weddings, corporate events, private celebrations and brand activations, with events starting from $100K. We supported the brand across a 360 Strategy, Paid Media, Social Media and Email Marketing, reaching clients looking for exceptional events at the highest level.",
    "heroImage": {
      "src": "/assets/fete/Fete.png",
      "alt": "Fete Events passport and globe",
      "position": "50% 50%"
    },
    "overviewSubtitle": "SNEAK PEAK INTO FETE LUXURY EVENTS",
    "galleryImages": [
      {
        "src": "/assets/fete/1.png",
        "alt": "Fete Events globe and map",
        "position": "50% 50%"
      },
      {
        "src": "/assets/fete/2.png",
        "alt": "Fete Events passports",
        "position": "50% 50%"
      },
      {
        "src": "/assets/fete/3.jpg",
        "alt": "Fete Events small globe with flags",
        "position": "50% 50%"
      },
      {
        "src": "/assets/fete/4.jpg",
        "alt": "Fete Events packing suitcase",
        "position": "50% 50%"
      }
    ],
    "goal": "Increase visibility among the right audience, generate more qualified event enquiries and strengthen Fête's position within the global events market.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Marketing Strategy and planning"
      },
      {
        "icon": "social",
        "text": "Google and Meta Ads management"
      },
      {
        "icon": "email",
        "text": "Social Media management"
      },
      {
        "icon": "360",
        "text": "Email Marketing Strategy and Design"
      }
    ],
    "approach": "Fête operates at the higher end of the events market, so the focus was on quality over volume. Paid Media, Social Content and Email Marketing were directed towards audiences most likely to enquire for weddings, private celebrations, corporate events and brand activations.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Increased visibility across key markets"
      },
      {
        "icon": "bars",
        "text": "More qualified event enquiries"
      },
      {
        "icon": "shield",
        "text": "Greater reach among relevant audiences"
      },
      {
        "icon": "star",
        "text": "Consistent Marketing across Paid, Social and Email"
      }
    ],
    "focusAreas": [
      "360 Marketing",
      "Social Media Marketing",
      "Meta Ads",
      "Google Ads",
      "Email Marketing"],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Fete Events campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Fete Events 360 Marketing | USS Projects",
      "description": "A USS project overview for Fête Events, delivering bespoke, extraordinary corporate events through comprehensive marketing strategy and digital presence."
    },
    "hideVideoSection": true,
    "socialGridImage": "/assets/socialGridPreviews/fete.webp"
  },
  {
    "slug": "precision-talk",
    "productName": "Precision Talks",
    "title": "Transforming Customer Calls with AI",
    "description": "Precision Talks is an AI voice agent solution that handles inbound and outbound customer calls 24/7, helping businesses reduce missed opportunities and respond faster. We supported the launch from the ground up, developing the Brand, Website and Marketing needed to introduce Precision Talks to the UAE market.",
    "heroImage": {
      "src": "/assets/precision/precision.png",
      "alt": "Precision Talks AI voice agent dashboard",
      "position": "50% 10%"
    },
    "overviewSubtitle": "Building the future of customer communication",
    "galleryImages": [
      {
        "src": "/assets/precision/1.png",
        "alt": "Precision Talks customer support AI",
        "position": "50% 10%"
      },
      {
        "src": "/assets/precision/2.png",
        "alt": "Precision Talk dashboard interface",
        "position": "50% 50%"
      },
      {
        "src": "/assets/precision/3.png",
        "alt": "Precision Talk missed call recovery",
        "position": "50% 50%"
      },
      {
        "src": "/assets/precision/4.png",
        "alt": "Precision Talk automated booking system",
        "position": "50% 50%"
      }
    ],
    "goal": "Launch Precision Talk in the UAE and show businesses how AI voice agents can improve call handling, response times and customer communication.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Branding & Visual Identity"
      },
      {
        "icon": "social",
        "text": "Website Design & Development"
      },
      {
        "icon": "email",
        "text": "Paid Media"
      },
      {
        "icon": "360",
        "text": "Social Media Marketing"
      }
    ],
    "approach": "We centred the marketing around a simple business problem, every unanswered call can mean a missed opportunity. The Website, Content and Campaigns explained where AI voice agents fit into everyday business operations and how Precision Talks could handle calls around the clock.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Introduced PrecisionTalk to the UAE market"
      },
      {
        "icon": "bars",
        "text": "Built a recognisable brand identity"
      },
      {
        "icon": "shield",
        "text": "Established a strong digital presence"
      },
      {
        "icon": "star",
        "text": "Created a foundation for future growth"
      }
    ],
    "focusAreas": [
      "New Market Entry",
      "Website Design & Development",
      "Content Creation",
      "Paid Media"],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Precision Talk campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Precision Talk AI Voice Agent | USS Projects",
      "description": "A USS project overview for Precision Talk, an AI voice agent solution designed to help businesses handle customer calls instantly, 24/7."
    },
    "hideVideoSection": true
  },
  {
    "slug": "disturbed-innovations",
    "productName": "Disturbed Innovations Group",
    "title": "Disturbed Innovations Group Rebrand",
    "description": "Disturbed Innovations Group (DIG) creates immersive brand experiences, technology activations and large scale events globally. As the business evolved from Disturbed Media Group to DIG, we delivered the rebrand across its Website, Social Media, messaging and sales materials, giving the business a stronger identity for its next chapter.",
    "heroImage": {
      "src": "/assets/disturbed-innovations/disturbed.png",
      "alt": "Disturbed Innovations Group event production and brand experience",
      "position": "50% 50%"
    },
    "overviewSubtitle": "DIG Digital Transformation",
    "galleryImages": [
      {
        "src": "/assets/disturbed-innovations/1.png",
        "alt": "Disturbed Innovations immersive brand experience",
        "position": "50% 50%"
      },
      {
        "src": "/assets/disturbed-innovations/2.jpg",
        "alt": "Disturbed Innovations technology activation",
        "position": "50% 50%"
      },
      {
        "src": "/assets/disturbed-innovations/3.jpg",
        "alt": "Disturbed Innovations event production",
        "position": "50% 50%"
      },
      {
        "src": "/assets/disturbed-innovations/4.jpg",
        "alt": "Disturbed Innovations large scale event",
        "position": "50% 50%"
      }
    ],
    "goal": "Move Disturbed Media Group into its new identity as Disturbed Innovations Group, reflecting the wider technology and innovation services now offered by the business.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Website Design and Development"
      },
      {
        "icon": "social",
        "text": "Brand positioning and messaging"
      },
      {
        "icon": "email",
        "text": "Sales deck creation"
      },
      {
        "icon": "360",
        "text": "Social Media Marketing"
      }
    ],
    "approach": "The rebrand needed to go beyond a name change. We introduced DIG consistently across the Website, Social channels and sales materials, with updated messaging that better represented the technology, experiences and activations behind the business.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Disturbed Media Group successfully transitioned to DIG"
      },
      {
        "icon": "bars",
        "text": "New responsive website designed and developed"
      },
      {
        "icon": "shield",
        "text": "New sales materials for pitches and presentations"
      },
      {
        "icon": "star",
        "text": "New identity rolled out across key digital channels"
      }
    ],
    "focusAreas": [
      "Brand Transformation",
      "Website Transformation",
      "Social Media Marketing"],
    "videoTitle": "Immersive 3D Technology",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Disturbed Innovations campaign",
      "position": "50% 50%"
    },
    "videoSrc": "/assets/disturbed-innovations/dig.mp4",
    "socialGridImage": "/assets/socialGridPreviews/disturbed.webp",
      },
  {
    "slug": "afro-maya",
    "productName": "Afro Maya",
    "title": "Driving Growth for an E-Commerce Fashion Brand",
    "description": "Afro Maya is a fashion brand inspired by culture and individuality. We supported the brand across its Website, Content, Social Media and Email Marketing, with a focus on growing its online presence, supporting new collection launches and driving online sales.",
    "heroImage": {
      "src": "/assets/afro/afro.jpg",
      "alt": "Afro Maya fashion and lifestyle e-commerce brand",
      "position": "50% 50%"
    },
    "overviewSubtitle": "SNEAK PEAK INTO AFRO MAYA FASHION WORLD",
    "galleryImages": [
      {
        "src": "/assets/afro/1.jpg",
        "alt": "Afro Maya contemporary fashion piece",
        "position": "50% 50%"
      },
      {
        "src": "/assets/afro/2.jpg",
        "alt": "Afro Maya lifestyle apparel",
        "position": "50% 50%"
      },
      {
        "src": "/assets/afro/3.jpg",
        "alt": "Afro Maya e-commerce collection",
        "position": "50% 50%"
      },
      {
        "src": "/assets/afro/4.jpg",
        "alt": "Afro Maya fashion brand shoot",
        "position": "50% 50%"
      }
    ],
    "goal": "Grow the brand online, increase customer engagement and support sales around new collections and product launches.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Website Design and Development"
      },
      {
        "icon": "social",
        "text": "Content Creation"
      },
      {
        "icon": "email",
        "text": "Social Media Marketing"
      },
      {
        "icon": "360",
        "text": "Email Marketing"
      }
    ],
    "approach": "We focused on giving each collection a strong digital presence from launch onwards. The Website made products easier to browse and shop, while Social Media, Content and Email campaigns supported new releases and kept customers engaged between launches.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "New e-commerce website launched"
      },
      {
        "icon": "bars",
        "text": "Regular support for new collection launches"
      },
      {
        "icon": "shield",
        "text": "Increased visibility across digital channels"
      },
      {
        "icon": "star",
        "text": "Stronger customer engagement online"
      }
    ],
    "focusAreas": [
      "Website Design & Development",
      "Organic Social Marketing",
      "Content Creation",
      "Email Marketing"],
    "videoTitle": "Afro Maya Fashion World",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Afro Maya campaign",
      "position": "50% 50%"
    },
    "videoSrc": "/assets/afro/Horizontal.mov",
    "socialGridImage": "/assets/afroz.webp",
      },
  {
    "slug": "coshe-juices",
    "productName": "Coshe Juices",
    "title": "Growing a Wellness Membership Brand",
    "description": "Coshe Juices is a wellness brand offering fresh juices, cleanses and membership based wellness plans. We supported Coshe with a new Website and wider Marketing Strategy focused on growing memberships and improving the online customer experience.",
    "heroImage": {
      "src": "/assets/coshe/coshe.jpg",
      "alt": "Coshe Juices wellness brand lifestyle",
      "position": "50% 50%"
    },
    "overviewSubtitle": "COSHE JUICES TAKING OVER WELLNESS INDUSTRY",
    "galleryImages": [
      {
        "src": "/assets/coshe/1.jpg",
        "alt": "Coshe Juices healthy lifestyle product",
        "position": "50% 50%"
      },
      {
        "src": "/assets/coshe/2.png",
        "alt": "Coshe Juices membership growth campaign",
        "position": "50% 38%"
      },
      {
        "src": "/assets/coshe/3.jpg",
        "alt": "Coshe Juices wellness juice cleanse",
        "position": "50% 38%"
      },
      {
        "src": "/assets/coshe/4.png",
        "alt": "Coshe Juices digital ecosystem",
        "position": "50% 50%"
      }
    ],
    "goal": "Grow Coshe’s membership base, improve the online customer experience and give customers more reasons to engage with the brand.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Website Design & Development"
      },
      {
        "icon": "social",
        "text": "Membership Growth Strategy"
      },
      {
        "icon": "email",
        "text": "Paid Social Activation"
      },
      {
        "icon": "360",
        "text": "Email Marketing"
      }
    ],
    "approach": "We focused on making Coshe's membership offering clearer, more accessible and easier to engage with. From the website experience to ongoing Email and Marketing activity, every touchpoint was designed to support membership growth and encourage repeat engagement.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "250% increase in memberships in the first month"
      },
      {
        "icon": "bars",
        "text": "Increased visibility across search and social"
      },
      {
        "icon": "shield",
        "text": "Stronger engagement with the brand online"
      },
      {
        "icon": "star",
        "text": "Improved experience for new and existing members"
      }
    ],
    "focusAreas": [
      "Website Design",
      "Website Development",
      "Membership Strategy",
      "Paid Social",
      "Email Marketing"],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Coshe Juices campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Coshe Juices Wellness Brand | USS Projects",
      "description": "A USS project overview for Coshe Juices, growing a wellness membership brand through website development, marketing strategy, and Social Media management."
    },
    "hideVideoSection": true,
    "socialGridImage": "https://res.cloudinary.com/wda6rtn3/image/upload/v1787352143/uss-website/Coshe%20Email.png"
  },
  {
    "slug": "mn-nail-spa",
    "productName": "M&N Nail Spa",
    "title": "Creating a Beauty Brand That Stands Out",
    "description": "M&N Nail Spa is a beauty and wellness salon in Dubai offering nail, beauty and wellness treatments in a modern setting. We supported the brand across Paid Media, Content, Social Media and Marketing Strategy, helping increase visibility and drive more visits to the salon.",
    "heroImage": {
      "src": "/assets/m&n/m&n.jpg",
      "alt": "M&N Nail Spa luxury salon experience",
      "position": "65% 65%"
    },
    "overviewSubtitle": "M&N NAIL SPA CONTENT CREATION",
    "galleryImages": [
      {
        "src": "/assets/m7m.webp",
        "alt": "M&N Nail Spa beauty treatment",
        "position": "50% 50%"
      },
      {
        "src": "/assets/m&n/4.jpg",
        "alt": "M&N Nail Spa premium client experience",
        "position": "50% 50%"
      },
      {
        "src": "/assets/m&n/2.jpg",
        "alt": "M&N Nail Spa luxury interior",
        "position": "50% 50%"
      },
      {
        "src": "/assets/m&n/3.jpg",
        "alt": "M&N Nail Spa wellness service",
        "position": "50% 50%"
      }
    ],
    "goal": "Increase awareness across Dubai, attract new clients and give the brand a stronger presence across Social Media and Digital Advertising.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Marketing Strategy"
      },
      {
        "icon": "social",
        "text": "Meta Ads Management"
      },
      {
        "icon": "email",
        "text": "Content Creation"
      },
      {
        "icon": "360",
        "text": "Campaign & Social Planning"
      }
    ],
    "approach": "We built the marketing around the treatments, salon environment and reasons to visit. Regular content kept the brand active across Organic Social Media, while Meta campaigns reached new audiences across Dubai and supported bookings and salon visits.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "30% increase in salon visits"
      },
      {
        "icon": "bars",
        "text": "Increased awareness across digital channels"
      },
      {
        "icon": "shield",
        "text": "Greater visibility among local audiences"
      },
      {
        "icon": "star",
        "text": "More consistent content across social media"
      }
    ],
    "focusAreas": [
      "Marketing Strategy",
      "Social Media Marketing",
      "Meta Ads",
      "Content Creation"],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the M&N Nail Spa campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "M&N Nail Spa Brand Marketing | USS Projects",
      "description": "A USS project overview for M&N Nail Spa, a luxury London salon, focused on content creation, Social Media management, and increasing physical footfall."
    },
    "hideVideoSection": true
  },
  {
    "slug": "tish-wonders",
    "productName": "Tish Wonders",
    "title": "Launching a Digital Product to a Global Audience",
    "description": "Tish Wonders is a food and wellness creator sharing healthy recipes and lifestyle content with a global audience. We supported the launch of her healthy cooking ebook with a dedicated website, email marketing and Black Friday strategy, helping turn an established audience into paying customers.",
    "heroImage": {
      "src": "/assets/tish/tish.png",
      "alt": "Tish Wonders healthy cooking e-book launch",
      "position": "50% 50%"
    },
    "overviewSubtitle": "LAUNCHING E-BOOK DURING BLACK FRIDAY",
    "galleryImages": [
      {
        "src": "/assets/tish/1.jpg",
        "alt": "Tish Wonders recipe content",
        "position": "50% 50%"
      },
      {
        "src": "/assets/tish/2.jpg",
        "alt": "Tish Wonders wellness lifestyle",
        "position": "50% 50%"
      },
      {
        "src": "/assets/tish/3.png",
        "alt": "Tish Wonders e-book product",
        "position": "50% 50%"
      },
      {
        "src": "/assets/tish/4.png",
        "alt": "Tish Wonders campaign creative",
        "position": "50% 50%"
      }
    ],
    "goal": "Launch Tish's new digital product and drive sales during the Black Friday period, with a simple journey from discovering the ebook to completing a purchase.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Website Design & Development"
      },
      {
        "icon": "social",
        "text": "Product Launch Strategy"
      },
      {
        "icon": "email",
        "text": "Black Friday Campaign Planning"
      },
      {
        "icon": "360",
        "text": "Sales Funnel Optimisation"
      }
    ],
    "approach": "We planned the launch around Black Friday, with the Website, Email activity and campaign messaging all supporting the ebook release. The buying journey was kept simple, making it easy for Tish's audience to learn more about the product and purchase directly online.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Hundreds of ebooks sold over Black Friday weekend"
      },
      {
        "icon": "bars",
        "text": "Strong sales from Tish's existing audience"
      },
      {
        "icon": "shield",
        "text": "Increased website conversions during the campaign"
      },
      {
        "icon": "star",
        "text": "Proven demand for future digital products"
      }
    ],
    "focusAreas": [
      "Product Launch Strategy",
      "Website Design & Development",
      "Marketing Strategy",
      "Email Marketing"],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Tish Wonders campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Tish Wonders E-Book Launch | USS Projects",
      "description": "A USS project overview for Tish Wonders, launching a digital e-book to a global audience through website development, email strategy, and targeted marketing."
    },
    "hideVideoSection": true
  },
  {
    "slug": "residency-advanced",
    "productName": "Residency Advanced",
    "title": "Scaling Residency Advanced with Google Ads",
    "description": "Residency Advanced helps individuals and families secure second residency and citizenship through investment programmes. We supported the brand with a focused Google Ads strategy, generating 125 qualified leads in one month through targeted search campaigns.",
    "heroImage": {
      "src": "/assets/residency-advanced/Residency.jpg",
      "alt": "Residency Advanced second citizenship and residency",
      "position": "50% 50%"
    },
    "overviewSubtitle": "GLOBAL CITIZENSHIP",
    "galleryImages": [
      {
        "src": "/assets/residency-advanced/1.jpg",
        "alt": "Residency Advanced global mobility passport",
        "position": "50% 50%"
      },
      {
        "src": "/assets/residency-advanced/2.jpg",
        "alt": "Residency Advanced citizenship programs",
        "position": "50% 50%"
      },
      {
        "src": "/assets/residency-advanced/3.jpg",
        "alt": "Residency Advanced global investment",
        "position": "50% 50%"
      },
      {
        "src": "/assets/residency-advanced/4.jpg",
        "alt": "Residency Advanced alternative residencies",
        "position": "50% 50%"
      }
    ],
    "goal": "Increase qualified enquiries and improve visibility for key residency and citizenship programmes across Google Search.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Google Ads strategy and campaign setup"
      },
      {
        "icon": "social",
        "text": "Keyword targeting and audience segmentation"
      },
      {
        "icon": "email",
        "text": "Ad copy and performance optimisation"
      },
      {
        "icon": "360",
        "text": "Overall marketing strategy for market entry"
      }
    ],
    "approach": "We built campaigns around specific residency and citizenship programmes, with dedicated keywords and ad copy for each service. Performance was reviewed regularly, allowing us to focus budget on the searches and campaigns generating the strongest leads.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "125 qualified leads generated in one month"
      },
      {
        "icon": "bars",
        "text": "Increased visibility across key Google searches"
      },
      {
        "icon": "shield",
        "text": "More relevant enquiries"
      },
      {
        "icon": "star",
        "text": "Improved performance through ongoing optimisation"
      }
    ],
    "focusAreas": [
      "Google Ads",
      "Marketing Strategy"],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Residency Advanced campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Residency Advanced Campaign | USS Projects",
      "description": "A USS project overview for Residency Advanced, scaling a second citizenship consultancy through targeted Google Ads and performance marketing."
    },
    "hideVideoSection": true
  },
  {
    "slug": "oak",
    "productName": "Oak Restaurant",
    "title": "Creating Content for Oak Restaurant",
    "description": "Oak Restaurant is a contemporary dining destination in Dubai, bringing together modern Asian cuisine, stylish interiors and a vibrant atmosphere. We created Photo and Video Content across the food, venue and dining experience for use across Social Media and wider Marketing.",
    "heroImage": {
      "src": "/assets/oakrestaurant/Hero.jpg",
      "alt": "Residency Advanced second citizenship and residency",
      "position": "50% 50%"
    },
    "overviewSubtitle": "Oak Restaurant",
    "galleryLayout": "centerVideo",
    "galleryImages": [
      {
        "src": "/assets/Sushi.jpeg",
        "alt": "Oak Restaurant interior ambience",
        "position": "50% 50%"
      },
      {
        "src": "/assets/oak/oakVideo.mov",
        "alt": "Oak Restaurant video showcase",
        "position": "50% 50%"
      },
      {
        "src": "/assets/Susha.jpeg",
        "alt": "Oak Restaurant dish presentation",
        "position": "50% 50%"
      }
    ],
    "goal": "Create high quality content that captured the food, atmosphere and dining experience while giving Oak a stronger bank of content for its digital channels.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Food & beverage photography"
      },
      {
        "icon": "social",
        "text": "Videography"
      },
      {
        "icon": "email",
        "text": "Social media content"
      },
      {
        "icon": "360",
        "text": "Creative direction"
      }
    ],
    "approach": "We combined food photography, venue shots and lifestyle content to create a varied bank of visuals for Oak to use across its social channels and wider marketing.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "A new library of photo and video content"
      },
      {
        "icon": "bars",
        "text": "Consistent visuals across social media"
      },
      {
        "icon": "shield",
        "text": "More content to support ongoing marketing"
      },
      {
        "icon": "star",
        "text": "Creative assets ready for campaigns and promotions"
      }
    ],
    "focusAreas": [
      "Social Media",
      "Marketing",
      "Photo and Video Content"
    ],
    "videoTitle": "Mall Of Emirates Launch",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Residency Advanced campaign",
      "position": "50% 50%"
    },
    "metadata": {
      "title": "Oak Restaurant | USS Projects",
      "description": "A USS project overview for Oak Restaurant, creating photo and video content for social media and wider marketing."
    },
    "hideVideoSection": true
  },
  {
    "slug": "fabri-elite",
    "productName": "FABRI ELITE",
    "title": "Building a Personal Brand in Real Estate",
    "description": "Fabri Elite is a real estate entrepreneur who moved from content creator to agency owner in Dubai. We supported this transition with a content strategy that introduced the agency while continuing to build her presence and credibility within the property market.",
    "heroImage": {
      "src": "/assets/fabri/fabri.jpg",
      "alt": "Fabri Elite personal brand hero image",
      "position": "50% 40%"
    },
    "overviewSubtitle": "Sneak peek into Fabri Elite Agency",
    "galleryImages": [
      {
        "src": "/assets/fabri/1.jpg",
        "alt": "Fabri Elite ribbon cutting",
        "position": "50% 50%"
      },
      {
        "src": "/assets/fabra.webp",
        "alt": "Fabri Elite presenting",
        "position": "50% 50%"
      },
      {
        "src": "/assets/fabri/3.jpg",
        "alt": "Fabri Elite meeting",
        "position": "50% 50%"
      },
      {
        "src": "/assets/fabri/4.jpg",
        "alt": "Fabri Elite man presenting",
        "position": "50% 50%"
      }
    ],
    "goal": "Build Fabri's personal brand alongside the launch of her real estate agency, using Content Creation to grow her presence within the Dubai property market.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "YouTube Content Production"
      },
      {
        "icon": "social",
        "text": "Website Content Creation"
      },
      {
        "icon": "email",
        "text": "Personal Brand Content"
      },
      {
        "icon": "360",
        "text": "Wider Marketing Strategy"
      }
    ],
    "approach": "We developed different content formats around Fabri, her agency and the wider property market. YouTube gave her space for longer conversations, agent interviews introduced the team and regular content kept both Fabri and the agency visible across digital channels.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Increased visibility for Fabri and her agency"
      },
      {
        "icon": "bars",
        "text": "Regular content across multiple platforms"
      },
      {
        "icon": "shield",
        "text": "Dedicated content for the agency website"
      },
      {
        "icon": "star",
        "text": "Stronger presence within Dubai real estate"
      }
    ],
    "focusAreas": [
      "Marketing Strategy",
      "YouTube Content Production",
      "Website Content Creation",
      "Personal Brand Content"],
    "videoTitle": "Fabri Elite Agency",
    "videoSubtitle": "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the Fabri Elite campaign",
      "position": "50% 50%"
    },
    "videoSrcs": [
      "/assets/fabri/FAB OFFICE-4K.mov",
      "/assets/fabri/FAB DECA-4K.MOV",
      "/assets/fabri/FAB 2ND VIEWING.mov"
    ],
      },
  {
    "slug": "st-georges",
    "productName": "ST GEORGE'S",
    "title": "Building a Standout Real Estate Brand",
    "description": "St George's is a Dubai real estate agency specialising in high end residential properties. We produced professional photo and video content across its property portfolio, giving the agency a consistent stream of Content for Social Media, its Website and wider Marketing.",
    "heroImage": {
      "src": "/assets/puma.webp",
      "alt": "St George's passport and globe",
      "position": "50% 50%"
    },
    "overviewSubtitle": "CONTENT STRATEGY",
    "galleryImages": [
      {
        "src": "/assets/st/1.png",
        "alt": "St George's globe",
        "position": "50% 50%"
      },
      {
        "src": "/assets/st/2.png",
        "alt": "St George's passports",
        "position": "50% 50%"
      },
      {
        "src": "/assets/st/3.jpg",
        "alt": "St George's flags",
        "position": "50% 50%"
      },
      {
        "src": "/assets/st/4.jpg",
        "alt": "St George's airport",
        "position": "50% 50%"
      }
    ],
    "goal": "Create high quality property content that presents each listing at its best while building a stronger presence for St George's across digital channels.",
    "workIntro": "To support the launch, we delivered:",
    "workItems": [
      {
        "icon": "creator",
        "text": "Property Photography"
      },
      {
        "icon": "social",
        "text": "Property Videography"
      },
      {
        "icon": "email",
        "text": "Lifestyle Content"
      },
      {
        "icon": "360",
        "text": "Social Media Assets"
      }
    ],
    "approach": "Each shoot was planned around the individual property, with a mix of photography, video and lifestyle content for different digital formats. This gave St George's fresh content for listings, social media and wider campaigns while keeping the overall look consistent across the brand.",
    "outcomes": [
      {
        "icon": "megaphone",
        "text": "Regular photo and video content across the property portfolio"
      },
      {
        "icon": "bars",
        "text": "Stronger presence across social media"
      },
      {
        "icon": "shield",
        "text": "More content available for property marketing"
      },
      {
        "icon": "star",
        "text": "Consistent visuals across listings and digital channels"
      }
    ],
    "focusAreas": [
      "Content Strategy",
      "Property Photography",
      "Property Videography",
      "Lifestyle Content",
      "Social Media Assets",
      "Content",
      "Social Media",
      "Website",
      "Marketing"],
    "videoTitle": "Content Strategy",
    "videoSubtitle": "See how we brought this campaign to life",
    "videoPreview": {
      "src": "/assets/blurred.webp",
      "alt": "Blurred video preview of the St George's campaign",
      "position": "50% 50%"
    },
    "videoSrc": "/assets/st_george/Garden landscape no branding.mov",
    "metadata": {
      "title": "Property Content for St George's | USS Projects",
      "description": "A USS project overview for St George's, creating premium visual content to highlight properties and strengthen the agency's brand presence."
    },
    "hideSocialGridPreview": true
  }
];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}
