export type PortfolioImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type GalleryImage = PortfolioImage & {
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  detailTitle: string;
  linkLabel?: string;
  linkHref?: string;
  description: string;
  highlights: string[];
  image: PortfolioImage;
  detailImage?: PortfolioImage;
  gallery?: GalleryImage[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "cold-summit",
    title: "The Cold Summit Website",
    detailTitle: "The Cold Summit - The Retreat Booking Reimagined",
    linkLabel: "Website link: thecoldsummit.com",
    linkHref: "https://thecoldsummit.com",
    summary:
      "Created a website for Yes Toronto's biggest 2025 cold retreat, helping visitors learn more, access the schedule, and book their stay through clear room options.",
    description:
      "As a visual and UX designer for The Cold Summit, jointly organized by Yes Toronto and Awaken the Rhythm Within, I built the entire digital booking experience. From icy palettes to 3D lodge maps, the interface mirrored the retreat's essence: calm, clarity, connection.",
    highlights: [
      "Developed a seamless e-commerce flow for booking, room selection, and payment.",
      "Integrated a custom 3D cottage map for spatial orientation and excitement.",
      "Created a consistent brand feel through logo, colors, and motion-led navigation."
    ],
    image: {
      src: "/assets/cold-summit.png",
      alt: "The Cold Summit website preview",
      objectPosition: "center"
    },
    gallery: [
      {
        src: "/assets/cold-booking-page.png",
        alt: "Cold Summit booking page room selection interface",
        caption: "Booking Page"
      },
      {
        src: "/assets/cold-3d-property.png",
        alt: "Cold Summit three dimensional property view",
        caption: "Three dimensional view of the property"
      },
      {
        src: "/assets/cold-vision-objective.png",
        alt: "Cold Summit vision and objective content cards",
        caption: "Vision and Objective of The Cold Summit"
      }
    ],
    href: "/works/cold-summit"
  },
  {
    id: "yes-toronto",
    title: "Yes Toronto Merch",
    detailTitle: "Yes Toronto - Merch for Connection",
    linkLabel: "Website link: yesto.ca",
    linkHref: "https://yesto.ca",
    summary:
      "Designed merchandise communicating the brand message of saying YES to new experiences, turning apparel into a warm invitation for strangers to connect.",
    description:
      "Yes Toronto is an event company run of, for, and by strangers, with a vision of making meaningful connections through experiences. I designed type-led apparel and mockups that made the motto \"talk to strangers\" feel minimal, warm, and wearable.",
    highlights: [
      "Conceptualized and designed flagship merch to embody the brand ethos.",
      "Delivered high-fidelity mockups used for production and launch showcase.",
      "Created pieces featured at launch and made available through the online storefront."
    ],
    image: {
      src: "/assets/yes-toronto-merch.png",
      alt: "Yes Toronto merchandise preview",
      objectPosition: "center 61%"
    },
    detailImage: {
      src: "/assets/yes-main-shirt.png",
      alt: "Yes Toronto conversation starter t-shirt design",
      objectPosition: "center"
    },
    gallery: [
      {
        src: "/assets/yes-model-photoshoot.png",
        alt: "Yes Toronto merchandise model photoshoot",
        caption: "Model Photoshoot for the merchandise"
      },
      {
        src: "/assets/yes-front-back-design.png",
        alt: "Yes Toronto front and back merchandise design",
        caption: "Front and back design"
      },
      {
        src: "/assets/yes-featured-tee.png",
        alt: "Yes Toronto signature tee product listing",
        caption: "Yes Toronto signature tee"
      },
      {
        src: "/assets/yes-featured-products.png",
        alt: "Yes Toronto t-shirt and tote bag product listing",
        caption: "Featured on Yes Toronto's website"
      }
    ],
    href: "/works/yes-toronto"
  },
  {
    id: "hide-seek",
    title: "Hide & Seek",
    detailTitle: "Hide & Seek - A Vertical Film Experience",
    linkLabel: "Video link: https://www.youtube.com/watch?v=HP15TSNLIbI",
    linkHref: "https://www.youtube.com/watch?v=HP15TSNLIbI",
    summary:
      "Crafted an immersive vertical film from fragmented community footage, using narrative beats, ambient action, and motion text to make the story feel alive.",
    description:
      "Created Yes Toronto's first long-form event content, reverse-engineering a story arc from scattered clips, participant voices, and group messages.",
    highlights: [
      "Built a vertical narrative structure from community footage and event moments.",
      "Used bold thumbnail-style visual language to make the story instantly recognizable.",
      "Edited the piece around action, anticipation, and quick emotional payoffs."
    ],
    image: {
      src: "/assets/hide-seek.png",
      alt: "Hide and Seek vertical film preview",
      objectPosition: "center"
    },
    href: "/works/hide-seek"
  },
  {
    id: "certified-pessimist",
    title: "The Certified Pessimist",
    detailTitle: "The Certified Pessimist",
    linkLabel: "Video link: https://youtu.be/Te9MFyZo0HA",
    linkHref: "https://youtu.be/Te9MFyZo0HA",
    summary:
      "Wrote, shot, edited, and designed a two-minute emotional piece on adulthood, pairing a monologue with carefully composed cinematic visuals.",
    description:
      "Built a full-cycle independent short around mood, tone, light, symmetry, and the rhythm of thought.",
    highlights: [
      "Wrote and shaped the monologue to carry the emotional arc.",
      "Composed minimal cinematic visuals around stillness, contrast, and pacing.",
      "Edited sound and image together to make the short feel intimate and reflective."
    ],
    image: {
      src: "/assets/certified-pessimist.png",
      alt: "The Certified Pessimist short film preview",
      objectPosition: "center"
    },
    href: "/works/certified-pessimist"
  },
  {
    id: "ontario-make",
    title: "Ontario Make Awards Interviews",
    detailTitle: "Ontario Make Awards Interviews",
    summary:
      "Led cinematography for a cinematic interview series with Shot One Studio and Ontario Make Awards, elevating local businesses through visual stories.",
    description:
      "Shot and delivered a multi-video interview series under tight timelines, translating business values into human-centered visual content.",
    highlights: [
      "Led camera work for a polished interview series with a premium documentary feel.",
      "Used close-up detail and lens-led imagery to frame craft, care, and business identity.",
      "Balanced fast production timelines with consistent visual quality across the series."
    ],
    image: {
      src: "/assets/ontario-make.png",
      alt: "Ontario Make Awards interview preview",
      objectPosition: "center"
    },
    href: "/works/ontario-make"
  },
  {
    id: "christmas",
    title: "A Christmas to Remember",
    detailTitle: "A Christmas to Remember",
    summary:
      "Turned a near-cancelled Christmas event into a warm 40-person community experience through crisis management, storytelling, and connection-led design.",
    description:
      "Secured a last-minute venue and transformed a fragile event plan into one of the community's most emotionally resonant celebrations.",
    highlights: [
      "Managed a high-pressure event pivot without losing the warmth of the original concept.",
      "Created a cozy visual and social atmosphere for a 40-person community gathering.",
      "Captured the event through group moments, candid energy, and shared rituals."
    ],
    image: {
      src: "/assets/christmas.png",
      alt: "Christmas event community photo collage",
      objectPosition: "center"
    },
    gallery: [
      {
        src: "/assets/christmas-conversation.png",
        alt: "Christmas event group conversation moment",
        caption: "Community conversation during the Christmas gathering"
      },
      {
        src: "/assets/christmas-table-activity.png",
        alt: "Christmas event table activity and shared food moment",
        caption: "Food, activities, and connection-led moments"
      },
      {
        src: "/assets/christmas-group-activity.png",
        alt: "Christmas event group activity in the studio space",
        caption: "Themed group activity inside the Christmas studio"
      }
    ],
    href: "/works/christmas"
  },
  {
    id: "meetup",
    title: "The Biggest Meetup of 2025",
    detailTitle: "The Biggest Meetup of 2025",
    summary:
      "Led a 100+ person anniversary meetup with curated activities, volunteer teams, and a home-like environment where strangers could connect at scale.",
    description:
      "Directed a 100+ attendee anniversary meetup with layered activities, volunteer support, and a rhythm designed to help strangers feel at home.",
    highlights: [
      "Designed a large-scale gathering that still felt warm, personal, and approachable.",
      "Coordinated activities, volunteers, and social flow for 100+ participants.",
      "Documented the event through group photography and activity-led storytelling."
    ],
    image: {
      src: "/assets/meetup.png",
      alt: "The Biggest Meetup of 2025 group event preview",
      objectPosition: "center"
    },
    detailImage: {
      src: "/assets/meetup-primary-wide.png",
      alt: "The Biggest Meetup of 2025 wide group photo",
      objectPosition: "center"
    },
    gallery: [
      {
        src: "/assets/meetup-game-hd.png",
        alt: "Meetup attendees playing an outdoor activity",
        caption: "Icebreaker and team activity"
      },
      {
        src: "/assets/meetup-picnic-hd.png",
        alt: "Meetup attendees gathered on picnic blankets in a park",
        caption: "Picnic-style community gathering"
      },
      {
        src: "/assets/meetup-hosts-hd.png",
        alt: "Meetup hosts speaking to the group outdoors",
        caption: "Hosts guiding the event flow"
      }
    ],
    href: "/works/meetup"
  }
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
