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
  hideSocialGridPreview?: boolean
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
      "Create a high-performing digital presence while implementing systems to capture, nurture, and convert leads more effectively.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Custom coded website design and development",
      },
      {
        icon: "social",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "email",
        text: "WhatsApp marketing integration",
      },
      {
        icon: "360",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "Our focus was on building more than just a website. We created a connected system. By combining a tailored web experience with direct communication channels, we enabled Agency 8 to engage leads more effectively and streamline their marketing efforts.",
    outcomes: [
      {
        icon: "megaphone",
        text: "A fully custom website aligned with the brand",
      },
      {
        icon: "bars",
        text: "Integrated communication channels for leads",
      },
      {
        icon: "shield",
        text: "Capturing and managing enquiries",
      },
      {
        icon: "star",
        text: "A scalable digital setup for continued growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
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
      "Develop and launch a product that delivers value to her audience, while driving strong engagement and sales from day one.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on turning existing audience demand into a tangible product. We built a launch strategy that combined content, storytelling, and direct engagement, guiding the audience from awareness to purchase through social and email touchpoints.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Thousands of units sold within the first two weeks",
      },
      {
        icon: "bars",
        text: "Strong engagement from current audience",
      },
      {
        icon: "shield",
        text: "Successful transition from content to product",
      },
      {
        icon: "star",
        text: "A scalable model for future product launches",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
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
      "Increase membership, strengthen brand presence, and build a highly engaged community all through organic growth.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on building a strong, community-driven brand. We combined consistent storytelling, value-driven content, and audience engagement to create a sense of connection, turning followers into active members.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Membership base tripled within 15 months",
      },
      {
        icon: "bars",
        text: "Organic Instagram growth from 0K to 22K",
      },
      {
        icon: "shield",
        text: "Engagement without relying on paid ads",
      },
      {
        icon: "star",
        text: "A highly active and connected community",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "building a strong, community driven brand",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Women Who Thrive community campaign",
      position: "50% 44%",
    },
    videoSrcs: [
      "https://emmanuelcolewilliams.com/uss-assets/womenwho/WWT Event recap.mov",
      "https://emmanuelcolewilliams.com/uss-assets/supperclub/WWC.m4v",
      "https://emmanuelcolewilliams.com/uss-assets/supperclub/Gala Recap Chatz.mov",
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
      "Drive membership growth while maintaining a premium brand image and attracting the right audience.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on positioning SupperClub as an exclusive and high-value offering. We combined consistent content, strategic messaging, and targeted communication to attract and convert a premium audience.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased membership growth",
      },
      {
        icon: "bars",
        text: "Stronger brand presence across digital channels",
      },
      {
        icon: "shield",
        text: "Improved engagement with target audiences",
      },
      {
        icon: "star",
        text: "Clear and scalable marketing foundation",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
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
      "Successfully launch Cinnamood in Mall of Emirates, while building local awareness and demand from day one, without losing the essence of the original brand.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on making the brand feel both globally consistent and locally relevant. We adapted content, messaging, and strategy to fit the Dubai market while maintaining Cinnamood's identity.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Strong awareness during launch phase",
      },
      {
        icon: "bars",
        text: "Growth in local audience engagement",
      },
      {
        icon: "shield",
        text: "Consistent brand presence across platforms",
      },
      {
        icon: "star",
        text: "Set new standards for support system activations",
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
      "Ensure a smooth and successful rebrand, while repositioning Yula Lounge to cater to a broader, more contemporary audience.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "To USS, rebranding wasn't just about visuals, it's about perception. Our focus was on delivering a consistent and refined identity across all channels, making sure the new direction felt premium, aligned with Yula's business direction and wider marketing goals.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Smooth transition from Yalseh to Yula Lounge",
      },
      {
        icon: "bars",
        text: "Consistent brand presence across platforms",
      },
      {
        icon: "shield",
        text: "Strong alignment between concept and content",
      },
      {
        icon: "star",
        text: "A clear foundation for post-launch growth",
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
      "Build awareness, generate demand and position Flowork as a go to workspace solution in Dubai ahead of its official launch.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on combining brand awareness with engagement. We used paid and organic channels together to create consistent digital presence, while delivering content that showcased the space, communicated value and built interest before launch.",
    outcomes: [
      {
        icon: "megaphone",
        text: "We sold 50% of total offices before opening",
      },
      {
        icon: "bars",
        text: "Strong awareness leading up to launch",
      },
      {
        icon: "shield",
        text: "Consistent presence across multiple platforms",
      },
      {
        icon: "star",
        text: "A solid foundation for growth post-launch",
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
      "Create and launch a fully operational venue concept, from business setup to generating demand and bookings.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
        text: "Paid media strategy across Google Ads and paid social",
      },
    ],
    approach:
      "This wasn't just a marketing project, it was about building a business from the ground up. We focused on creating a strong brand identity, a clear market position, and a performance-driven strategy to attract the right audience and drive bookings.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Clear positioning within events and venue space",
      },
      {
        icon: "bars",
        text: "Strong foundation across brand and digital presence",
      },
      {
        icon: "shield",
        text: "Targeted strategy for corporate and private events",
      },
      {
        icon: "star",
        text: "Scalable setup ready for ongoing growth",
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
      "Introduce and position reclaim as a trusted, time-saving solution for modern travelers, while building awareness in a new and competitive market.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on clearly communicating the value of the service: convenience, time-saving, and simplicity. We built a cohesive strategy across channels to educate the audience, build trust, and drive adoption.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Clear positioning within the travel space",
      },
      {
        icon: "bars",
        text: "Increased awareness in the US market",
      },
      {
        icon: "shield",
        text: "Consistent messaging across all channels",
      },
      {
        icon: "star",
        text: "Strong foundation for ongoing growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
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
      "Execute a successful product launch event while capturing high-quality content to amplify the campaign across digital platforms.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Event execution and on-ground support",
      },
      {
        icon: "social",
        text: "Content creation during the launch",
      },
      {
        icon: "email",
        text: "Capturing assets for ongoing digital use",
      },
      {
        icon: "360",
        text: "Creative vision and concept",
      },
    ],
    approach:
      "Our focus was on combining experience with content. We ensured the event delivered a strong in-person impact, while producing content that could extend the campaign's reach across social and digital channels.",
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
        text: "Strong alignment between brand and event",
      },
      {
        icon: "star",
        text: "Extended value beyond the launch moment",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "showcase your new product properly",
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
      "Increase brand visibility, generate high quality enquiries, and position Fête Events as a leading luxury event management company in the UAE and internationally.",
    workIntro: "We supported Fête Events with a full-service marketing approach:",
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
      "Our team executed a comprehensive monthly and weekly management of the Fête Events brand, through a combination of paid media, strategic content, email marketing and ongoing social media management. We developed a marketing strategy designed to increase awareness, attract qualified leads and reinforce the brand's position within the luxury event industry.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Expanded awareness across key digital channels",
      },
      {
        icon: "bars",
        text: "Generated targeted leads and high quality search enquiries for luxury event services",
      },
      {
        icon: "shield",
        text: "Created a consistent and seamless brand experience online",
      },
      {
        icon: "star",
        text: "Implemented scalable marketing systems to support future expansion",
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
      "Position Precision Talk as a leading AI voice agent solution while educating businesses on the revenue opportunities lost through missed calls and inefficient customer handling.",
    workIntro: "We supported Precision Talk with a full-service marketing approach:",
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
      "Our focus was on highlighting a real pain point for businesses across hospitality, real estate, automotive, and service industries: missed calls leading to missed revenue. By combining educational content, strategic messaging, and performance-driven campaigns.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Introduced a new brand into the UAE market",
      },
      {
        icon: "bars",
        text: "Built a scalable foundation for expansion",
      },
      {
        icon: "shield",
        text: "Established a professional online presence",
      },
      {
        icon: "star",
        text: "Generated key performance benchmarks",
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
      "Create a modern brand presence that accurately reflects DIG's evolution while providing the tools needed to support future growth and business development.",
    workIntro: "We supported DIG through a complete brand evolution project:",
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
      "Our focus was on creating consistency across every touchpoint. From the website and sales materials to social media and all visual branding, we helped align DIG's visual identity with its position as a forward-thinking, unprecedented innovation company.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Modern identity that reflects the evolution from DMG to DIG",
      },
      {
        icon: "bars",
        text: "Designed and launched a website aligned with the company's new positioning",
      },
      {
        icon: "shield",
        text: "Developed sales materials to support business development and client presentations",
      },
      {
        icon: "star",
        text: "Improved brand consistency across digital, physical, and marketing touchpoints",
      },
    ],
    focusAreas: ["Brand Transformation", "Website Creation", "Social Media Management"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "SEE HOW WE BROUGHT THIS CAMPAIGN TO LIFE.",
    videoPreview: {
      src: "https://emmanuelcolewilliams.com/uss-assets/blurred.png",
      alt: "Blurred video preview of the Disturbed Innovations campaign",
      position: "50% 50%",
    },
    videoSrc: "https://emmanuelcolewilliams.com/uss-assets/USS Main Website Showreel.mp4",
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
      "Build a stronger digital foundation that supports brand growth, customer engagement, and online sales.",
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
      "Our focus was on creating a visual identity and user experience that represents the brand values. From developing the website to producing content and managing ongoing communications, we worked to strengthen Afro Maya's digital presence and generate opportunities for long-term growth.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Launched a modern, responsive website",
      },
      {
        icon: "bars",
        text: "Creating content to showcase new products",
      },
      {
        icon: "shield",
        text: "Established a stronger customer base",
      },
      {
        icon: "star",
        text: "Strengthened the brand's presence across social",
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
      "Increase membership sign-ups, improve the customer experience, and build a stronger digital ecosystem to support long-term growth.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
      "Our focus was on creating a seamless customer journey, while building greater awareness around the Coshe membership offering. Through strategic content, email marketing, and ongoing social media management, we helped position Coshe as a leading wellness brand while supporting customer retention and membership growth.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased membership by 250% in first month",
      },
      {
        icon: "bars",
        text: "Increased visibility across web and search terms",
      },
      {
        icon: "shield",
        text: "Improved brand loyalty and performance",
      },
      {
        icon: "star",
        text: "Generated key performance benchmarks",
      },
    ],
    focusAreas: ["Website Design & Development", "Email Marketing", "Social Media"],
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
    hideSocialGridPreview: true
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
      "Increase visibility, attract new clients, and create a consistent brand presence that reflects the quality of the salon experience.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "360",
        text: "Paid media management",
      },
      {
        icon: "email",
        text: "Content creation",
      },
      {
        icon: "social",
        text: "Campaign and event planning",
      },
    ],
    approach:
      "Our focus was on showcasing the luxury salon experience, positioning M&N Nail Spa as a premium beauty destination. Through engaging content, targeted advertising, and a consistent social media presence, we helped the brand connect with both new and existing customers.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased awareness across key digital platforms",
      },
      {
        icon: "bars",
        text: "Increased footfall to physical locations by 30%",
      },
      {
        icon: "shield",
        text: "Improved local visibility and performance",
      },
      {
        icon: "star",
        text: "Produced content that highlighted the salon's premium services",
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
      "Successfully launch a new digital product while leveraging an existing audience to drive awareness, engagement, and sales during a key Black Friday period.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
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
        text: "Black Friday campaign planning",
      },
      {
        icon: "social",
        text: "Sales funnel optimization",
      },
    ],
    approach:
      "Our focus was on creating a seamless customer journey from discovery to purchase. By combining a dedicated website experience with a strategic launch campaign, we helped position the e-book as a valuable resource for Tish's audience while maximising visibility during one of the busiest shopping periods of the year.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Selling out 100s of e-books in Black Friday weekend",
      },
      {
        icon: "bars",
        text: "Helped transform audience engagement into product sales",
      },
      {
        icon: "shield",
        text: "Improved local visibility and performance",
      },
      {
        icon: "star",
        text: "Exceeded key performance benchmarks",
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
      "Increase high-quality lead generation while improving visibility and performance across search.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Google Ads strategy and campaign setup",
      },
      {
        icon: "360",
        text: "Keyword research and audience segmentation",
      },
      {
        icon: "email",
        text: "Ad copy and performance optimization",
      },
      {
        icon: "social",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "Our focus was on capturing intent demand. By targeting users actively searching for residency and citizenship solutions, we built a campaign designed to attract qualified leads while maximizing ad spend and performance.",
    outcomes: [
      {
        icon: "megaphone",
        text: "150+ high-quality leads generated in two months",
      },
      {
        icon: "bars",
        text: "Increased visibility across web and search terms",
      },
      {
        icon: "shield",
        text: "Improved local visibility and performance",
      },
      {
        icon: "star",
        text: "Exceeded key performance benchmarks",
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
    slug: "oak",
    productName: "Residency Advanced",
    title: "Scaling Residency ddw",
    description:
      "Residency Advanced is a consultancy specializing in second citizenship and residency by investment programs, helping clients gain global mobility and greater freedom through alternative residencies. USS partnered with Residency Advanced to scale their operations and results by targeting qualified audiences actively searching for their services.",
    heroImage: {
      src: "https://emmanuelcolewilliams.com/uss-assets/oak/oak.png",
      alt: "Residency Advanced second citizenship and residency",
      position: "50% 50%",
    },
    overviewSubtitle: "SNEAK PEAK INTO RESIDENCY ADVANCED",
    galleryImages: [
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/oak/1.png",
        alt: "Residency Advanced global mobility passport",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/oak/2.png",
        alt: "Residency Advanced citizenship programs",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/oak/3.png",
        alt: "Residency Advanced global investment",
        position: "50% 50%",
      },
      {
        src: "https://emmanuelcolewilliams.com/uss-assets/oak/4.jpg",
        alt: "Residency Advanced alternative residencies",
        position: "50% 50%",
      },
    ],
    goal:
      "Increase high-quality lead generation while improving visibility and performance across search.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Google Ads strategy and campaign setup",
      },
      {
        icon: "360",
        text: "Keyword research and audience segmentation",
      },
      {
        icon: "email",
        text: "Ad copy and performance optimization",
      },
      {
        icon: "social",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "Our focus was on capturing intent demand. By targeting users actively searching for residency and citizenship solutions, we built a campaign designed to attract qualified leads while maximizing ad spend and performance.",
    outcomes: [
      {
        icon: "megaphone",
        text: "150+ high-quality leads generated in two months",
      },
      {
        icon: "bars",
        text: "Increased visibility across web and search terms",
      },
      {
        icon: "shield",
        text: "Improved local visibility and performance",
      },
      {
        icon: "star",
        text: "Exceeded key performance benchmarks",
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
        text: "Weekly broadcast creation",
      },
      {
        icon: "360",
        text: "Personal brand content",
      },
    ],
    approach:
      "Our focus was on creating content that shows, never tells the business, and the person behind it. From introducing new agents, providing value true to real estate investing and market insights across the website, every piece of content was designed to build credibility and establish a strong local presence even before actual estate was created.",
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
        text: "Consistent new and supporting business growth",
      },
    ],
    focusAreas: ["Marketing Strategy & Website Content", "YouTube Content"],
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
] satisfies ProjectDetail[];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
