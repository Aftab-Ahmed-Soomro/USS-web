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
  metadata: {
    title: string;
    description: string;
  };
  hideVideoSection?: boolean;
  hideSocialGridPreview?: boolean;
  socialGridImage?: string;
};

export const projectDetails = [
  {
    slug: "agency-8",
    productName: "Agency 8",
    title: "Real Estate Agency Email & WhatsApp Strategy",
    description:
      "Agency 8 is a real estate agency focused on helping buyers and investors discover premium property opportunities. USS partnered with Agency 8 to build a custom website and implement email and WhatsApp marketing systems that made it easier to capture, manage and convert enquiries.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/agency/agency.png",
      alt: "Agency 8 luxury apartment interior overlooking the sea",
      position: "50% 50%",
    },
    overviewSubtitle: "Sneak peak into Agency 8",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/agency/1.png",
        alt: "Agency 8 luxury waterfront property terrace",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/agency/2.png",
        alt: "Agency 8 Dubai penthouse terrace with skyline view",
        position: "50% 48%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/agency/3.png",
        alt: "Agency 8 premium apartment dining and living room",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/agency/4.png",
        alt: "Agency 8 modern beachfront residence exterior",
        position: "50% 52%",
      },
    ],
    goal:
      "Build a digital platform that captures and converts more enquiries.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Custom-coded website design and development",
      },
      {
        icon: "social",
        text: "Email marketing setup",
      },
      {
        icon: "email",
        text: "WhatsApp integration",
      },
      {
        icon: "360",
        text: "Lead generation strategy",
      },
    ],
    approach:
      "Rather than building a website alone, we created a connected lead generation system. By combining a custom website with email marketing and WhatsApp automation, every enquiry could be captured, followed up and managed more efficiently.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Custom website built around the brand",
      },
      {
        icon: "bars",
        text: "Integrated email and WhatsApp journeys",
      },
      {
        icon: "shield",
        text: "Better enquiry management",
      },
      {
        icon: "star",
        text: "Scalable system ready for growth",
      },
    ],
    focusAreas: ["WhatsApp Marketing", "Email Marketing", "Website Transformation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Agency 8 real estate campaign",
      position: "50% 44%",
    },
    metadata: {
      title: "Agency 8 Email & WhatsApp Strategy | USS Projects",
      description:
        "A USS project overview for Agency 8, covering custom website development, email marketing, WhatsApp marketing integration, and digital strategy.",
    },
    hideVideoSection: true,
  },
  {
    slug: "sadia-psychology",
    productName: "Sadia Psychology",
    title: "Black Friday project with Sadia Psychology",
    description:
      "Sadia Psychology is a content creator and educator with a global audience of more than 800K+ Instagram & YouTube followers. USS partnered with Sadia to develop, launch and market her 2024 planner, turning her content into a physical product that resonated with her audience and sold out during the Black Friday campaign.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/sadia/Sadia.png",
      alt: "Sadia Psychology holding her planner",
      position: "50% 45%",
    },
    overviewSubtitle: "Sneak peak into Black Friday launch",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/sadia/1.png",
        alt: "Sadia Psychology product launch studio portrait",
        position: "22% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/sadia/2.png",
        alt: "Sadia Psychology seated portrait for campaign content",
        position: "50% 43%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/sadia/3.png",
        alt: "Sadia Psychology planner product close up",
        position: "74% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/sadia/4.png",
        alt: "Sadia Psychology Black Friday launch portrait",
        position: "50% 35%",
      },
    ],
    goal:
      "Launch a product that delivers real value to her audience while driving strong engagement and sales.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Product concept development",
      },
      {
        icon: "social",
        text: "Planner design and production",
      },
      {
        icon: "email",
        text: "Marketing strategy",
      },
      {
        icon: "360",
        text: "Launch execution across digital channels",
      },
    ],
    approach:
      "We worked closely with Sadia to bring her planner from concept to launch. From product design and launch planning to content creation and email marketing, every stage was built to generate excitement, drive sales and give the product the strongest possible start.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Thousands of planners sold within two weeks",
      },
      {
        icon: "bars",
        text: "Strong engagement from an existing audience",
      },
      {
        icon: "shield",
        text: "Successful product launch",
      },
      {
        icon: "star",
        text: "Repeatable launch strategy for future products",
      },
    ],
    focusAreas: ["360 Marketing", "Brand Alignment", "Content Creation"],
    videoTitle: "Black Friday product launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Sadia Psychology Black Friday launch",
      position: "50% 44%",
    },
    metadata: {
      title: "Sadia Psychology Black Friday Launch | USS Projects",
      description:
        "A USS project overview for launching Sadia Psychology's 2024 planner through product concept development, marketing strategy, and digital launch execution.",
    },
    hideVideoSection: true,
  },
  {
    slug: "women-who-thrive",
    productName: "Women Who Thrive",
    title: "Increasing memberships for Women Who Thrive",
    description:
      "Women Who Thrive is a Dubai based networking community bringing women together through business, connection and personal growth. USS were responsible for helping grow its membership, strengthen its presence and build an engaged community through organic marketing.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/women/Women.jpg",
      alt: "Women Who Thrive event portrait with three women",
      position: "50% 45%",
    },
    overviewSubtitle: "Sneak peak into Women Who Thrive networking",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/women/1.jpg",
        alt: "Women Who Thrive campaign attendee moment",
        position: "18% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/women/2.jpg",
        alt: "Women Who Thrive event branding and activation",
        position: "38% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/women/3.jpg",
        alt: "Women Who Thrive networking event guests",
        position: "56% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/women/4.jpg",
        alt: "Women Who Thrive community event audience",
        position: "78% 50%",
      },
    ],
    goal:
      "Grow membership, strengthen the brand and build an engaged community through organic marketing.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Content creation",
      },
      {
        icon: "360",
        text: "Email marketing",
      },
    ],
    approach:
      "We focused on creating content that people wanted to engage with. By showing the value of the community, celebrating members and staying consistent across every channel, we helped turn interest into memberships and followers into members.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Membership tripled within 15 months",
      },
      {
        icon: "bars",
        text: "Organic Instagram growth from 6K to 22K",
      },
      {
        icon: "shield",
        text: "High engagement without paid advertising",
      },
      {
        icon: "star",
        text: "Built a loyal and active community",
      },
    ],
    focusAreas: ["Social Media", "Email Marketing", "Content Creation"],
    videoTitle: "building a strong, community driven brand.",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Women Who Thrive community campaign",
      position: "50% 44%",
    },
    videoSrcs: [
      "https://emmanuelcolewilliams.com/uss-assets/womenwho/WWT Event recap.mov",
      "https://emmanuelcolewilliams.com/uss-assets/womenwho/WWC.m4v",
      "https://emmanuelcolewilliams.com/uss-assets/womenwho/Gala Recap Chatz.mov",
    ],
    metadata: {
      title: "Women Who Thrive Membership Growth | USS Projects",
      description:
        "A USS project overview for growing Women Who Thrive through community-led marketing strategy, social media management, content creation, and email marketing.",
    },
  },
  {
    slug: "picksperience",
    productName: "Picksperience",
    title: "Sampling Agency Launching from UK to UAE",
    description:
      "Picksperience is a startup focused on product sampling, helping brands deliver samples directly to targeted audiences, from office workers and students to gym members and beyond. The goal is to drive real engagement, build brand loyalty, and influence future purchasing decisions. USS partnered with Picksperience to support their growth and build awareness for the platform.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/picksperience/Pickspereince.png",
      alt: "Picksperience launch venue and sampling activation space",
      position: "50% 43%",
    },
    overviewSubtitle: "Sneak peak into Picksperience launch",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/picksperience/1.png",
        alt: "Picksperience product sampling activation venue",
        position: "18% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/picksperience/2.jpg",
        alt: "Picksperience sampling campaign setup",
        position: "38% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/picksperience/3.png",
        alt: "Picksperience audience engagement launch content",
        position: "58% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/picksperience/4.jpg",
        alt: "Picksperience brand sampling platform launch",
        position: "78% 50%",
      },
    ],
    goal:
      "Position Picksperience as a go-to solution for brands looking to connect with their audience in a more direct and engaging way.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Content creation",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "360",
        text: "Paid social campaigns",
      },
    ],
    approach:
      "Our focus was on showcasing the value of real-world engagement. We created content and campaigns that highlighted how product sampling can build stronger connections between brands and their audiences, while driving interest from both businesses and consumers.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased awareness of the platform",
      },
      {
        icon: "bars",
        text: "Engagement across digital channels",
      },
      {
        icon: "shield",
        text: "Clear positioning within the product sampling space",
      },
      {
        icon: "star",
        text: "A solid foundation for ongoing growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Picksperience launch campaign",
      position: "50% 44%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/picksperience/pick-1.mp4",
    metadata: {
      title: "Picksperience Sampling Agency Launch | USS Projects",
      description:
        "A USS project overview for launching Picksperience from the UK to UAE through content creation, social media management, email marketing, and paid social campaigns.",
    },
  },
  {
    slug: "supperclub",
    productName: "SupperClub",
    title: "Scaling SupperClub Membership",
    description:
      "SupperClub is a premium dining and lifestyle membership offering access to exclusive benefits across 700+ venues, including top restaurants and 5-star hotels. USS partnered with SupperClub to support their growth and increase membership through a full-scale marketing approach.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/supperclub/Supperclub.png",
      alt: "SupperClub poolside dining and cocktail experience",
      position: "50% 53%",
    },
    overviewSubtitle: "Sneak peak into SupperClub project",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/supperclub/1.png",
        alt: "SupperClub dining experience with cocktail by the pool",
        position: "20% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/supperclub/2.png",
        alt: "SupperClub premium restaurant dish and table setting",
        position: "42% 58%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/supperclub/3.png",
        alt: "SupperClub lifestyle membership poolside moment",
        position: "58% 30%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/supperclub/4.png",
        alt: "SupperClub hospitality campaign food and drink detail",
        position: "72% 56%",
      },
    ],
    goal:
      "Grow memberships while strengthening the brand and attracting the right audience.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "social",
        text: "Content creation",
      },
      {
        icon: "email",
        text: "Social media management",
      },
      {
        icon: "360",
        text: "Email marketing",
      },
    ],
    approach:
      "We focused on showing the value of a SupperClub membership through consistent content, social media and email marketing, helping the brand connect with the right audience and encourage more sign ups.",
    outcomes: [
      {
        icon: "megaphone",
        text: "120% increase in memberships",
      },
      {
        icon: "bars",
        text: "Stronger brand presence across digital channels",
      },
      {
        icon: "shield",
        text: "Improved engagement with target audience",
      },
      {
        icon: "star",
        text: "Clear and scalable marketing foundation",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "supperclub golden partners",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the SupperClub membership campaign",
      position: "50% 53%",
    },
    videoSrcs: [
      "https://emmanuelcolewilliams.com/uss-assets/supperclub/sup-1.mp4",
      "https://emmanuelcolewilliams.com/uss-assets/supperclub/sup-2.MOV",
      "https://emmanuelcolewilliams.com/uss-assets/supperclub/supper-3.mp4",
    ],
    metadata: {
      title: "SupperClub Membership Growth | USS Projects",
      description:
        "A USS project overview for scaling SupperClub membership through marketing strategy, content creation, social media management, and email marketing.",
    },
  },
  {
    slug: "cinamood",
    productName: "Cinnamood",
    title: "Launching Cinnamood in the UAE",
    description:
      "Cinnamood is a German bakery franchise famous for its signature cinnamon rolls. As the brand expanded into the UAE, we worked alongside their team to bring Cinnamood to a new audience while staying true to what made the brand so recognisable.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/cinamood/cinamood.jpg",
      alt: "Cinnamood cinnamon roll with chocolate topping",
      position: "50% 48%",
    },
    overviewSubtitle: "Sneak peak into Cinnamood launch",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/cinamood/1.jpg",
        alt: "Close up of a Cinnamood cinnamon roll",
        position: "34% 62%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/cinamood/2.jpg",
        alt: "Cinnamood drink held on an escalator",
        position: "49% 34%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/cinamood/3.jpg",
        alt: "Cinnamood pastries on a studio backdrop",
        position: "64% 48%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/cinamood/4.png",
        alt: "Cinnamood launch content in Mall of Emirates",
        position: "50% 45%",
      },
    ],
    goal:
      "Launch Cinnamood in Mall of the Emirates, introducing the brand to the UAE market while staying true to what made it so successful across Europe.",
    workIntro: "To support the launch, we delivered:",
    workItems: [
      {
        icon: "creator",
        text: "Content creation tailored for the UAE audience",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "360",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "Launching in a new market meant more than simply translating content. We adapted the messaging, creative and strategy for a UAE audience while keeping the brand instantly recognisable.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Strong awareness from launch",
      },
      {
        icon: "bars",
        text: "High engagement across social media",
      },
      {
        icon: "shield",
        text: "Consistent brand experience across every channel",
      },
      {
        icon: "star",
        text: "A successful launch into the UAE market",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Cinnamood Mall of Emirates launch",
      position: "50% 44%",
    },
    videoSrcs: [
      "https://emmanuelcolewilliams.com/uss-assets/cinamood/cinamood-1.mov",
      "https://emmanuelcolewilliams.com/uss-assets/cinamood/cinamood-2.mov",
      "https://emmanuelcolewilliams.com/uss-assets/cinamood/cinamood-3.mov",
    ],
    socialGridImage: "/assets/socialGridPreviews/cinamood.png",
    metadata: {
      title: "Cinnamood UAE Launch | USS Projects",
      description:
        "A USS project overview for launching Cinnamood in the UAE through content, social media, and 360 marketing.",
    },
  },
  {
    slug: "yula-beach-lounge",
    productName: "Yula Lounge",
    title: "Transforming Yalseh into Yula Lounge",
    description:
      "Yula Lounge is a Dubai based beach club and restaurant, rebranded from its original identity as Yalseh Lounge. USS led this transition, helping transform the brand from a traditional Arabic style beach lounge into a more modern, elevated concept creating strong content, supporting social media management and email marketing.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/yula/yula.jpg",
      alt: "Yula Lounge beach club terrace with Dubai skyline",
      position: "50% 44%",
    },
    overviewSubtitle: "Sneak peak into rebrand project",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/yula/1.jpg",
        alt: "Yula Lounge dessert with chocolate sauce",
        position: "50% 37%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/yula/2.jpg",
        alt: "Yula Lounge terrace and skyline at night",
        position: "50% 48%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/yula/3.jpg",
        alt: "Yula Lounge terrace with city lights",
        position: "48% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/yula/4.jpg",
        alt: "Yula Lounge brunch plate and dessert",
        position: "50% 38%",
      },
    ],
    goal:
      "Launch the new Yula Lounge identity and introduce a fresh, contemporary brand to a wider audience.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Content creation aligned with the new brand direction",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "360",
        text: "PR and launch support",
      },
    ],
    approach:
      "The rebrand was about more than a new look. Every piece of content, campaign and customer touch point was designed to introduce Yula Lounge with a clear and consistent identity across every channel.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Successful transition from Yalseh to Yula Lounge",
      },
      {
        icon: "bars",
        text: "Consistent branding across every channel",
      },
      {
        icon: "shield",
        text: "Strong launch engagement",
      },
      {
        icon: "star",
        text: "A clear foundation for post launch growth.",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "beach lounge in Dubai",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Yula Lounge rebrand campaign",
      position: "50% 42%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/yula/yula.mov",
    socialGridImage: "/assets/socialGridPreviews/yula.png",
    metadata: {
      title: "Yula Beach Lounge Rebrand | USS Projects",
      description:
        "A USS project overview for transforming Yalseh into Yula Lounge through rebrand support, content, social media, and email marketing.",
    },
  },
  {
    slug: "flowork",
    productName: "Flowork",
    title: "Launching Flowork in Dubai Hills & Business Bay",
    description:
      "Flowork is a modern workspace offering private offices, meeting rooms and podcast studios. USS partnered with Flowork to launch its Dubai Hills and Business Bay locations, building awareness and generating demand selling out 50% of office space ahead of opening.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/flowork/flowork.jpg",
      alt: "Flowork lounge with warm shelving and tan seating",
      position: "50% 48%",
    },
    overviewSubtitle: "Sneak peak into Flowork opening",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/flowork/1.jpg",
        alt: "Flowork workspace corridor and office interior",
        position: "20% 52%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/flowork/2.jpg",
        alt: "Flowork reception lounge and brand wall",
        position: "45% 48%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/flowork/3.jpg",
        alt: "Flowork working lounge with contemporary seating",
        position: "62% 48%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/flowork/4.jpg",
        alt: "Flowork private office lounge detail",
        position: "78% 50%",
      },
    ],
    goal:
      "Build awareness, generate demand and position Flowork as a go to workspace before opening its Dubai Hills and Business Bay locations.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Paid media campaigns to drive visibility and leads",
      },
      {
        icon: "social",
        text: "SEO to improve search presence and organic traffic",
      },
      {
        icon: "email",
        text: "Targeted email marketing",
      },
      {
        icon: "360",
        text: "Social media management across key platforms",
      },
    ],
    approach:
      "The focus was on building excitement before launch. We combined paid media, organic content and SEO to introduce Flowork, showcase the spaces and keep the brand visible before the doors opened.",
    outcomes: [
      {
        icon: "megaphone",
        text: "50% of offices sold before opening",
      },
      {
        icon: "bars",
        text: "Strong awareness before launch",
      },
      {
        icon: "shield",
        text: "Consistent presence across key channels",
      },
      {
        icon: "star",
        text: "Solid foundation for continued growth",
      },
    ],
    focusAreas: ["Social Media", "Paid Media", "Content Creation"],
    videoTitle: "Dubai Hills & Business Bay launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Flowork launch campaign",
      position: "50% 48%",
    },
    videoSrcs: [
      "https://emmanuelcolewilliams.com/uss-assets/flowork/flow-1.m4v",
      "https://emmanuelcolewilliams.com/uss-assets/flowork/flow-2.mp4",
      "https://emmanuelcolewilliams.com/uss-assets/flowork/flow-3.mp4",
    ],
    socialGridImage: "/assets/socialGridPreviews/flowork.png",
    metadata: {
      title: "Flowork Dubai Launch | USS Projects",
      description:
        "A USS project overview for launching Flowork in Dubai Hills and Business Bay through paid media, social media, SEO, and content creation.",
    },
  },
  {
    slug: "blank-dxb",
    productName: "Blank DXB",
    title: "Building Blank DXB from the ground up",
    description:
      "Blank DXB transformed an industrial warehouse into a flexible venue for corporate events, private hire and creative experiences. USS worked alongside the team from day one, build the business and create a launch strategy that generated awareness and bookings.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blank/blank.jpg",
      alt: "Blank DXB warehouse venue space",
      position: "50% 50%",
    },
    overviewSubtitle: "Sneak peak into Blank DXB launch",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/blank/1.png",
        alt: "Blank DXB event venue with dramatic lighting",
        position: "18% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/blank/2.jpg",
        alt: "Blank DXB corporate event setup concept",
        position: "40% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/blank/3.jpg",
        alt: "Blank DXB warehouse event launch atmosphere",
        position: "62% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/blank/4.jpg",
        alt: "Blank DXB empty warehouse venue space",
        position: "82% 50%",
      },
    ],
    goal:
      "Launch a new venue with a strong brand, clear positioning and a steady pipeline of bookings from day one.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Business setup and operational support",
      },
      {
        icon: "social",
        text: "Branding and creative direction",
      },
      {
        icon: "email",
        text: "Website design and build",
      },
      {
        icon: "360",
        text: "Google Ads and paid social campaigns",
      },
    ],
    approach:
      "This project went beyond marketing. We helped turn an idea into a launch ready business, creating the brand, digital presence and marketing strategy needed to attract the right audience and generate bookings from the outset.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Successfully launched a new venue brand",
      },
      {
        icon: "bars",
        text: "Strong brand presence across digital channels",
      },
      {
        icon: "shield",
        text: "Generated early interest and bookings",
      },
      {
        icon: "star",
        text: "Built a foundation for long term growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "bringing a new concept to life",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Blank DXB launch campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Blank DXB Launch | USS Projects",
      description:
        "A USS project overview for building Blank DXB from the ground up through business setup, branding, website design, and paid media strategy.",
    },
    hideVideoSection: true,
  },
  {
    slug: "reclaim-us",
    productName: "Reclaim",
    title: "Launching reclaim in the US",
    description:
      "Reclaim is a US travel service designed to simplify the airport experience by allowing passengers to skip check-in entirely. By collecting luggage directly from a customer's home, hotel, or Airbnb and checking it in with the airline, reclaim offers a more seamless and convenient way to travel.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/reclaim/reclaim.png",
      alt: "Travelers with luggage inside an airport terminal",
      position: "50% 50%",
    },
    overviewSubtitle: "Sneak peak into reclaim launch in US",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/reclaim/1.png",
        alt: "Reclaim travel luggage in airport terminal",
        position: "16% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/reclaim/2.jpg",
        alt: "Reclaim branded luggage service concept",
        position: "38% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/reclaim/3.png",
        alt: "Traveler with luggage before boarding",
        position: "58% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/reclaim/4.png",
        alt: "US travel destination skyline and airport route",
        position: "82% 50%",
      },
    ],
    goal:
      "Launch reclaim in the US and introduce a smarter, hands-free way to travel while building awareness across key markets leading up to the worldcup. ",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "social",
        text: "Paid media",
      },
      {
        icon: "email",
        text: "Email marketing",
      },
      {
        icon: "360",
        text: "Content creation",
      },
    ],
    approach:
      "We focused on showing how reclaim makes travelling easier. Through clear messaging, creative content and paid campaigns, we introduced the service to a new audience and built awareness across every channel.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Successful US brand launch opening new locations",
      },
      {
        icon: "bars",
        text: "Increased awareness across key markets",
      },
      {
        icon: "shield",
        text: "Consistent messaging across every channel",
      },
      {
        icon: "star",
        text: "Build email database across US and retargeting users",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Paid Media"],
    videoTitle: "reclaim is expanding across the US",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Reclaim US launch campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Reclaim US Launch | USS Projects",
      description:
        "A USS project overview for launching Reclaim in the US travel market through marketing strategy, paid media, email marketing, and content creation.",
    },
    hideVideoSection: true,
    socialGridImage: "/assets/socialGridPreviews/reclaim.png",
  },
  {
    slug: "adidas-middle-east",
    productName: "Adidas Middle East",
    title: "Adidas Middle East Product Launch",
    description:
      "Adidas Middle East partnered with USS to deliver the launch of a new product through a high impact event experience. From event planning and on the day delivery to content creation, we helped bring the launch to life while producing assets that continued driving engagement long after the event.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/adidas/Adidas.jpg",
      alt: "Adidas Middle East launch event crowd",
      position: "50% 40%",
    },
    overviewSubtitle: "Sneak peak into Adidas event",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/adidas/1.jpg",
        alt: "Adidas campaign talent in red track jacket",
        position: "50% 47%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/adidas/2.jpg",
        alt: "Adidas Originals event product moment",
        position: "38% 48%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/adidas/3.jpg",
        alt: "Adidas Middle East launch DJ and event crowd",
        position: "52% 38%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/adidas/4.jpg",
        alt: "Adidas Middle East launch guests",
        position: "72% 42%",
      },
    ],
    goal:
      "Deliver a product launch that created a memorable brand experience while capturing high quality content for use across digital channels.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Event execution and on-site support",
      },
      {
        icon: "social",
        text: "Launch content creation",
      },
      {
        icon: "email",
        text: "Photography and video for digital campaigns",
      },
      {
        icon: "360",
        text: "Creative direction",
      },
    ],
    approach:
      "Our focus was on creating an event that left a lasting impression. We managed the launch from the ground up while capturing every key moment, producing content that kept the campaign going long after the event ended.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Successful product launch event",
      },
      {
        icon: "bars",
        text: "High-quality content captured for digital use",
      },
      {
        icon: "shield",
        text: "Strong alignment between brand, & event",
      },
      {
        icon: "star",
        text: "Extended value beyond the launch moment",
      },
    ],
    focusAreas: ["Event Management ", "Brand Alignment", "Content Creation"],
    videoTitle: "adidas middle east launch event",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Adidas Middle East product launch",
      position: "50% 40%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/adidas/adidas.mp4",
    metadata: {
      title: "Adidas Middle East Product Launch | USS Projects",
      description:
        "A USS project overview for supporting Adidas Middle East with product launch event activation, content creation, and digital campaign assets.",
    },
  },
  {
    slug: "fete-events",
    productName: "Fete Events",
    title: "Elevating Luxury Events Through 360 Marketing",
    description:
      "Fête Events is a luxury event management company delivering bespoke weddings, corporate events, private celebrations and brand activations globally. USS partnered with the team to strengthen its digital presence through strategy, paid media, social media management and email marketing, helping the brand reach more of the right audience.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/fete/Fete.png",
      alt: "Fete Events passport and globe",
      position: "50% 50%",
    },
    overviewSubtitle: "SNEAK PEAK INTO FETE LUXURY EVENTS",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fete/1.png",
        alt: "Fete Events globe and map",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fete/2.png",
        alt: "Fete Events passports",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fete/3.jpg",
        alt: "Fete Events small globe with flags",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fete/4.jpg",
        alt: "Fete Events packing suitcase",
        position: "50% 50%",
      },
    ],
    goal:
      "Increase brand visibility, attract high quality enquiries and strengthen Fête Events' position within the luxury events market.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy and planning",
      },
      {
        icon: "360",
        text: "Google and Meta Ads management",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing strategy and design",
      },
    ],
    approach:
      "Our focus was on keeping the brand visible to the right audience. By combining paid media, social media, email marketing and strategic planning, we built a consistent online presence that supported enquiries and long term growth.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased visibility across digital channels",
      },
      {
        icon: "bars",
        text: "More high quality event enquiries",
      },
      {
        icon: "shield",
        text: "Stronger brand presence online",
      },
      {
        icon: "star",
        text: "Marketing built to support long term growth",
      },
    ],
    focusAreas: ["Luxury Events", "360 Marketing", "Social Media Management"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Fete Events campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Fete Events 360 Marketing | USS Projects",
      description:
        "A USS project overview for Fête Events, delivering bespoke, extraordinary corporate events through comprehensive marketing strategy and digital presence.",
    },
    hideVideoSection: true,
    socialGridImage: "/assets/socialGridPreviews/fete.png",
  },
  {
    slug: "precision-talk",
    productName: "Precision Talk",
    title: "Transforming Customer Calls with AI",
    description:
      "Precision Talk is an AI voice agent solution designed to help businesses capture more opportunities by handling customer calls instantly, 24/7. Built for businesses that rely on inbound and outbound enquiries and bookings, Precision Talk eliminates missed calls, improves response times, and delivers a consistent customer experience at scale. USS partnered with Precision Talk to launch the brand, establish its market position and drive awareness.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/precision/precision.png",
      alt: "Precision Talk AI voice agent dashboard",
      position: "50% 50%",
    },
    overviewSubtitle: "BUILDING THE FUTURE OF CUSTOMER COMMUNICATION",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/precision/1.png",
        alt: "Precision Talk customer support AI",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/precision/2.png",
        alt: "Precision Talk dashboard interface",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/precision/3.png",
        alt: "Precision Talk missed call recovery",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/precision/4.png",
        alt: "Precision Talk automated booking system",
        position: "50% 50%",
      },
    ],
    goal:
      "Position PrecisionTalk as a leading AI voice agent platform while helping businesses understand the revenue lost through missed calls and slow customer response times.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Branding and visual identity",
      },
      {
        icon: "360",
        text: "Website design and development",
      },
      {
        icon: "email",
        text: "Paid media campaigns",
      },
      {
        icon: "social",
        text: "Social media management",
      },
    ],
    approach:
      "Our focus was on a problem every business understands, missed calls mean missed revenue. We built a clear message around that pain point, supported by educational content, strong branding and targeted campaigns across multiple channels.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Introduced PrecisionTalk to the UAE market.",
      },
      {
        icon: "bars",
        text: "Built a recognisable brand identity",
      },
      {
        icon: "shield",
        text: "Established a strong digital presence",
      },
      {
        icon: "star",
        text: "Created a foundation for future growth",
      },
    ],
    focusAreas: ["New Product Launch", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Precision Talk campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Precision Talk AI Voice Agent | USS Projects",
      description:
        "A USS project overview for Precision Talk, an AI voice agent solution designed to help businesses handle customer calls instantly, 24/7.",
    },
    hideVideoSection: true,
  },
  {
    slug: "disturbed-innovations",
    productName: "Disturbed Innovations Group",
    title: "Disturbed Innovations Group Rebrand",
    description:
      "Disturbed Innovations Group (DIG) creates immersive brand experiences, technology activations and large scale events globally. As the business evolved from Disturbed Media Group into DIG, USS led the rebrand with a new website, fresh social presence, sales materials and a stronger brand presence across every touchpoint.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/disturbed-innovations/disturbed.png",
      alt: "Disturbed Innovations Group event production and brand experience",
      position: "50% 50%",
    },
    overviewSubtitle: "DIG DIGITAL TRANSFORMATION",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/disturbed-innovations/1.png",
        alt: "Disturbed Innovations immersive brand experience",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/disturbed-innovations/2.jpg",
        alt: "Disturbed Innovations technology activation",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/disturbed-innovations/3.jpg",
        alt: "Disturbed Innovations event production",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/disturbed-innovations/4.jpg",
        alt: "Disturbed Innovations large scale event",
        position: "50% 50%",
      },
    ],
    goal:
      "Create a brand that matched DIG's evolution and positioned the business for its next stage of growth.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "360",
        text: "Website design and development",
      },
      {
        icon: "creator",
        text: "Brand positioning and messaging",
      },
      {
        icon: "email",
        text: "Sales deck creation",
      },
      {
        icon: "social",
        text: "Social media management",
      },
    ],
    approach:
      "Every part of the brand needed to tell the same story. From the website and sales materials to social media, we created a consistent identity that reflected DIG's position as an innovation led company.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Modern identity that reflects the evolution from DMG to DIG",
      },
      {
        icon: "bars",
        text: "Designed and developed new responsive website",
      },
      {
        icon: "shield",
        text: "Created sales materials for pitches and client presentations",
      },
      {
        icon: "star",
        text: "Consistent branding across every customer touchpoint",
      },
    ],
    focusAreas: ["Brand Transformation", "Website Creation", "Social Media Management"],
    videoTitle: "immersive 3D technology ",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Disturbed Innovations campaign",
      position: "50% 50%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/disturbed-innovations/dig.mp4",
    socialGridImage: "/assets/socialGridPreviews/disturbed.png",
    metadata: {
      title: "Disturbed Innovations Group Rebrand | USS Projects",
      description:
        "A USS project overview for the Disturbed Innovations Group rebrand, covering website design, brand positioning, and sales material creation.",
    },
    // hideVideoSection: true,
  },
  {
    slug: "afro-maya",
    productName: "Afro Maya",
    title: "Driving Growth for an E-Commerce Fashion Brand",
    description:
      "Afro Maya is a fashion and lifestyle brand creating pieces inspired by culture and individuality. USS partnered with the brand to build a stronger digital presence through a new website, content creation, social media management  and email marketing, helping more people discover and shop the brand online.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/afro/afro.jpg",
      alt: "Afro Maya fashion and lifestyle e-commerce brand",
      position: "50% 50%",
    },
    overviewSubtitle: "SNEAK PEAK INTO AFRO MAYA FASHION WORLD",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/afro/1.jpg",
        alt: "Afro Maya contemporary fashion piece",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/afro/2.jpg",
        alt: "Afro Maya lifestyle apparel",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/afro/3.jpg",
        alt: "Afro Maya e-commerce collection",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/afro/4.jpg",
        alt: "Afro Maya fashion brand shoot",
        position: "50% 50%",
      },
    ],
    goal:
      "Build a stronger online presence that supports brand growth, customer engagement and online sales and new product launches,",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "360",
        text: "Website design and development",
      },
      {
        icon: "creator",
        text: "Content creation",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing",
      },
    ],
    approach:
      "Every touchpoint needed to reflect the brand. From the website and product content to social media and email campaigns, we created a consistent digital experience that made it easier for customers to discover, connect with, and shop the collection.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Launched a modern e-commerce website",
      },
      {
        icon: "bars",
        text: "Created content to showcase new collections",
      },
      {
        icon: "shield",
        text: "Built a stronger online presence",
      },
      {
        icon: "star",
        text: "Improved customer engagement",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "afro maya fashion world",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Afro Maya campaign",
      position: "50% 50%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/afro/Horizontal.mov",
    metadata: {
      title: "Afro Maya E-Commerce Fashion | USS Projects",
      description:
        "A USS project overview for Afro Maya, driving growth for an e-commerce fashion brand through website development, content creation, and digital marketing.",
    },
  },
  {
    slug: "coshe-juices",
    productName: "Coshe Juices",
    title: "Growing a Wellness Membership Brand",
    description:
      "Coshe Juices is a wellness brand offering fresh juices, cleanses and membership-based wellness plans. We partnered with Coshe to strengthen their digital presence, helping grow memberships through a combination of website design, content, social media and email marketing.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/coshe/coshe.jpg",
      alt: "Coshe Juices wellness brand lifestyle",
      position: "50% 50%",
    },
    overviewSubtitle: "COSHE JUICES TAKING OVER WELLNESS INDUSTRY",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/coshe/1.jpg",
        alt: "Coshe Juices healthy lifestyle product",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/coshe/2.png",
        alt: "Coshe Juices membership growth campaign",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/coshe/3.jpg",
        alt: "Coshe Juices wellness juice cleanse",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/coshe/4.png",
        alt: "Coshe Juices digital ecosystem",
        position: "50% 50%",
      },
    ],
    goal:
      "Increase memberships, improve the online customer experience and create a stronger digital presence for the brand.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "360",
        text: "Website design and development",
      },
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "email",
        text: "Membership growth strategy",
      },
      {
        icon: "social",
        text: "Social media management",
      },
    ],
    approach:
      "We focused on making it easier for customers to discover Coshe, learn about their membership offering and keep coming back. From the website through to social media and email marketing, every touchpoint worked together to create a better customer experience.",
    outcomes: [
      {
        icon: "megaphone",
        text: "250% increase in memberships during the first month",
      },
      {
        icon: "bars",
        text: "Greater visibility across search and social",
      },
      {
        icon: "shield",
        text: "Stronger customer engagement",
      },
      {
        icon: "star",
        text: "A better online experience for new and existing members",
      },
    ],
    focusAreas: ["Website Development", "360 Marketing", "Email Marketing"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Coshe Juices campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Coshe Juices Wellness Brand | USS Projects",
      description:
        "A USS project overview for Coshe Juices, growing a wellness membership brand through website development, marketing strategy, and social media management.",
    },
    hideVideoSection: true,
    // hideSocialGridPreview: true
  },
  {
    slug: "mn-nail-spa",
    productName: "M&N Nail Spa",
    title: "Creating a Beauty Brand That Stands Out",
    description:
      "M&N Nail Spa is a luxury salon in Dubai offering nail, beauty and wellness treatments in a modern, premium setting. USS partnered with M&N Nail Spa to grow brand awareness, attract new customers and strengthen its presence through paid media, content creation, social media management and marketing strategy.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/m&n/m&n.jpg",
      alt: "M&N Nail Spa luxury salon experience",
      position: "65% 65%",
    },
    overviewSubtitle: "M&N NAIL SPA CONTENT CREATION",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/m&n/1.jpg",
        alt: "M&N Nail Spa beauty treatment",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/m&n/2.jpg",
        alt: "M&N Nail Spa luxury interior",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/m&n/3.jpg",
        alt: "M&N Nail Spa wellness service",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/m&n/4.jpg",
        alt: "M&N Nail Spa premium client experience",
        position: "50% 50%",
      },
    ],
    goal:
      "Increase brand visibility, attract new clients and build a stronger digital presence that reflects the quality of the salon experience.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "360",
        text: "Meta Ads management",
      },
      {
        icon: "email",
        text: "Content creation",
      },
      {
        icon: "social",
        text: "Campaign & social planning",
      },
    ],
    approach:
      "We focused on showcasing the salon experience through premium visuals, targeted advertising and consistent content. By combining paid campaigns with ongoing social media activity, we helped the brand reach new audiences while keeping existing customers engaged.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased awareness across digital channels",
      },
      {
        icon: "bars",
        text: "30% increase in salon visits",
      },
      {
        icon: "shield",
        text: "Improved local visibility",
      },
      {
        icon: "star",
        text: "Premium content that showcased the salon experience",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the M&N Nail Spa campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "M&N Nail Spa Brand Marketing | USS Projects",
      description:
        "A USS project overview for M&N Nail Spa, a luxury London salon, focused on content creation, social media management, and increasing physical footfall.",
    },
    hideVideoSection: true,
  },
  {
    slug: "tish-wonders",
    productName: "Tish Wonders",
    title: "Launching a Digital Product to a Global Audience",
    description:
      "Tish Wonders is a food and wellness creator sharing healthy recipes and lifestyle content with a global audience. USS partnered with Tish to launch her healthy cooking e-book, supporting the campaign with a dedicated website, email marketing and a Black Friday launch strategy that turned audience engagement into sales.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/tish/tish.png",
      alt: "Tish Wonders healthy cooking e-book launch",
      position: "50% 50%",
    },
    overviewSubtitle: "LAUNCHING E-BOOK DURING BLACK FRIDAY",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/tish/1.jpg",
        alt: "Tish Wonders recipe content",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/tish/2.jpg",
        alt: "Tish Wonders wellness lifestyle",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/tish/3.png",
        alt: "Tish Wonders e-book product",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/tish/4.png",
        alt: "Tish Wonders campaign creative",
        position: "50% 50%",
      },
    ],
    goal:
      "Launch a new digital product and maximise sales during the Black Friday campaign.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "360",
        text: "Website design and development",
      },
      {
        icon: "creator",
        text: "Product launch strategy",
      },
      {
        icon: "email",
        text: "Black Friday campaign planning",
      },
      {
        icon: "social",
        text: "Sales funnel optimization",
      },
    ],
    approach:
      "We built the launch around Black Friday, creating a dedicated website, clear customer journey and a campaign designed to convert Tish's audience into customers. Every stage was focused on making it easy to discover, purchase and download the e-book.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Hundreds of e-books sold over Black Friday weekend",
      },
      {
        icon: "bars",
        text: "Turned audience engagement into product sales",
      },
      {
        icon: "shield",
        text: "Improved website performance and conversions",
      },
      {
        icon: "star",
        text: "A repeatable launch model for future digital products",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Tish Wonders campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Tish Wonders E-Book Launch | USS Projects",
      description:
        "A USS project overview for Tish Wonders, launching a digital e-book to a global audience through website development, email strategy, and targeted marketing.",
    },
    hideVideoSection: true,
  },
  {
    slug: "residency-advanced",
    productName: "Residency Advanced",
    title: "Scaling Residency ddw",
    description:
      "Residency Advanced is a consultancy specializing in second citizenship and residency by investment programs, helping clients gain global mobility and greater freedom through alternative residencies. USS partnered with Residency Advanced to scale their operations and results by targeting qualified audiences actively searching for their services.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/st/st.png",
      alt: "Residency Advanced second citizenship and residency",
      position: "50% 50%",
    },
    overviewSubtitle: "SNEAK PEAK INTO RESIDENCY ADVANCED",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/1.png",
        alt: "Residency Advanced global mobility passport",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/2.png",
        alt: "Residency Advanced citizenship programs",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/3.jpg",
        alt: "Residency Advanced global investment",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/4.jpg",
        alt: "Residency Advanced alternative residencies",
        position: "50% 50%",
      },
    ],
    goal:
      "Increase high quality enquiries while improving visibility across Google Search.",
    workIntro: "Our work included:",
    workItems: [
      {
        icon: "creator",
        text: "Google Ads strategy and campaign setup",
      },
      {
        icon: "360",
        text: "Keyword targeting and audience segmentation",
      },
      {
        icon: "email",
        text: "Ad copy and performance optimisation",
      },
      {
        icon: "social",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "We focused on reaching people already searching for residency and citizenship solutions. By targeting relevant keywords, creating ad copy and monitoring campaign performance, we improved lead quality while increasing visibility across Google.",
    outcomes: [
      {
        icon: "megaphone",
        text: "125 high quality leads generated in one month",
      },
      {
        icon: "bars",
        text: "Increased visibility across relevant search terms",
      },
      {
        icon: "shield",
        text: "Higher quality enquiries",
      },
      {
        icon: "star",
        text: "Better campaign performance",
      },
    ],
    focusAreas: ["Paid Search", "Marketing Strategy", "Lead Generation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Residency Advanced campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Residency Advanced Campaign | USS Projects",
      description:
        "A USS project overview for Residency Advanced, scaling a second citizenship consultancy through targeted Google Ads and performance marketing.",
    },
    hideVideoSection: true,
  },
  {
    slug: "oak",
    productName: "Oak Restaurant",
    title: "Creating Content for Oak Restaurant",
    description:
      "Oak Restaurant us a contemporary dining destination in Dubai, bringing together modern Asian cuisine, premium interiors and a vibrant atmosphere. USS partnered with Oak to create high quality photo and video content that captured the food, the venue and the overall dining experience.",
    heroImage: {
      src: "/assets/oakrestaurant/Hero.jpg",
      alt: "Residency Advanced second citizenship and residency",
      position: "50% 50%",
    },
    overviewSubtitle: "SNEAK PEAK INTO OAK RESTAURANT",
    galleryImages: [
      {
        src: "/assets/oakrestaurant/1.jpg",
        alt: "Residency Advanced global mobility passport",
        position: "50% 50%",
      },
      {
        src: "/assets/oakrestaurant/2.jpg",
        alt: "Residency Advanced citizenship programs",
        position: "50% 50%",
      },
      {
        src: "/assets/oakrestaurant/3.jpg",
        alt: "Residency Advanced global investment",
        position: "50% 50%",
      },
      {
        src: "/assets/oakrestaurant/4.jpg",
        alt: "Residency Advanced alternative residencies",
        position: "50% 50%",
      },
    ],
    goal:
      "Create premium content that showcased the food, atmosphere and overall experience while strengthening Oak’s digital presence.",
    workIntro: "Our Work Included:",
    workItems: [
      {
        icon: "creator",
        text: "Food & beverage photography",
      },
      {
        icon: "360",
        text: "Videography",
      },
      {
        icon: "email",
        text: "Social media content",
      },
      {
        icon: "social",
        text: "Creative direction",
      },
    ],
    approach:
      "The focus was on capturing what made Oak different, from the presentation of each dish to the atmosphere throughout the venue. Every photo and video was created to reflect the restaurant's premium experience in a natural and authentic way.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Premium content library",
      },
      {
        icon: "bars",
        text: "Consistent content across social media",
      },
      {
        icon: "shield",
        text: "Stronger online brand presence",
      },
      {
        icon: "star",
        text: "Creative assets for ongoing campaigns",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Residency Advanced campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Residency Advanced Campaign | USS Projects",
      description:
        "A USS project overview for Residency Advanced, scaling a second citizenship consultancy through targeted Google Ads and performance marketing.",
    },
    hideVideoSection: true,
  },
  {
    slug: "fabri-elite",
    productName: "FABRI ELITE",
    title: "Building a Personal Brand in Real Estate",
    description:
      "Fabir Elite is a real estate entrepreneur who successfully transitioned from content creator to agency owner. USS partnered with her to produce high quality content that introduced her new agency, strengthened her personal brand and positioned her as a trusted voice within the Dubai property market.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/fabri/fabri.jpg",
      alt: "Fabri Elite personal brand hero image",
      position: "50% 50%",
    },
    overviewSubtitle: "FABRI ELITE AGENCY",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fabri/1.jpg",
        alt: "Fabri Elite ribbon cutting",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fabri/2.jpg",
        alt: "Fabri Elite presenting",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fabri/3.jpg",
        alt: "Fabri Elite meeting",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/fabri/4.jpg",
        alt: "Fabri Elite man presenting",
        position: "50% 50%",
      },
    ],
    goal:
      "Build a strong personal brand that supports the launch and growth of a new real estate agency.",
    workIntro: "Our Work Included:",
    workItems: [
      {
        icon: "creator",
        text: "YouTube content production",
      },
      {
        icon: "social",
        text: "Agent interview series",
      },
      {
        icon: "email",
        text: "Website content creation",
      },
      {
        icon: "360",
        text: "Personal brand content",
      },
    ],
    approach:
      "Our focus was on creating content that showcased both the business and the person behind it. From interviewing agents to producing long form YouTube content and creating assets for the website, every piece of content was designed to build credibility and establish a recognisable presence within the real estate market.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Strong personal brand presence",
      },
      {
        icon: "bars",
        text: "Professional content across multiple platforms",
      },
      {
        icon: "shield",
        text: "High quality assets for the agency website",
      },
      {
        icon: "star",
        text: "Consistent content supporting business growth",
      },
    ],
    focusAreas: ["Marketing Strategy", "Website Content", "YouTube Content"],
    videoTitle: "fabri elite agency",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Fabri Elite campaign",
      position: "50% 50%",
    },
    videoSrcs: [
      "https://emmanuelcolewilliams.com/uss-assets/fabri/FAB OFFICE-4K.mov",
      "https://emmanuelcolewilliams.com/uss-assets/fabri/FAB DECA-4K.MOV",
      "https://emmanuelcolewilliams.com/uss-assets/fabri/FAB 2ND VIEWING .mov",
    ],
    metadata: {
      title: "Fabri Elite Personal Brand | USS Projects",
      description:
        "A USS project overview for Fabri Elite, building a personal brand in real estate through YouTube content, agent interviews, and high-quality assets.",
    },
  },
  {
    slug: "st-georges",
    productName: "ST GEORGE'S",
    title: "Property Content for St George's",
    description:
      "St George's is a real estate agency specialising in premium residential properties across Dubai. USS partnered with the team to produce professional photo and video content that showcased listings, strengthened the brand's visual identity and provided high quality marketing assets across digital channels.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/fete/Fete.png",
      alt: "St George's passport and globe",
      position: "50% 50%",
    },
    overviewSubtitle: "SNEAK PEAK INTO ST. GEORGES",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/1.png",
        alt: "St George's globe",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/2.png",
        alt: "St George's passports",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/3.jpg",
        alt: "St George's flags",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/st/4.jpg",
        alt: "St George's airport",
        position: "50% 50%",
      },
    ],
    goal:
      "Create premium visual content that highlights properties and strengthens the agency's brand presence.",
    workIntro: "Our Work Included:",
    workItems: [
      {
        icon: "creator",
        text: "Property photography",
      },
      {
        icon: "social",
        text: "Property videography",
      },
      {
        icon: "email",
        text: "Lifestyle content creation",
      },
      {
        icon: "360",
        text: "Social media assets",
      },
    ],
    approach:
      "Our focus was on creating content that reflected the quality of each property while reinforcing the St George's brand. By capturing both the spaces and the lifestyle they offer, we delivered a library of assets that could be used consistently across social media, websites and marketing campaigns.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Professional property content library",
      },
      {
        icon: "bars",
        text: "Stronger visual brand presence",
      },
      {
        icon: "shield",
        text: "Marketing assets across digital channels",
      },
      {
        icon: "star",
        text: "Consistent content for ongoing campaigns",
      },
    ],
    focusAreas: ["Social Media", "Creative Direction", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the St George's campaign",
      position: "50% 50%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/st_george/Garden landscape no branding.mov",
    metadata: {
      title: "Property Content for St George's | USS Projects",
      description:
        "A USS project overview for St George's, creating premium visual content to highlight properties and strengthen the agency's brand presence.",
    },
    hideSocialGridPreview: true
  },
] satisfies ProjectDetail[];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
