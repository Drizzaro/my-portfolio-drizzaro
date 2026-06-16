import bgmi1 from "@/assets/thumb-bgmi-1.png";
import bgmi2 from "@/assets/thumb-bgmi-2.png";
import bgmi3 from "@/assets/thumb-bgmi-3.png";
import gta1 from "@/assets/thumb-gta-1.png";
import gta2 from "@/assets/thumb-gta-2.png";
import valo1 from "@/assets/thumb-valo-1.png";
import valo2 from "@/assets/thumb-valo-2.png";
import mc1 from "@/assets/thumb-mc-1.png";
import mc2 from "@/assets/thumb-mc-2.png";

export type Project = {
  id: string;
  title: string;
  category: "BGMI" | "GTA V" | "Valorant" | "Minecraft";
  img: string;
  description: string;
  client: string;
  feedback: string;
  span?: "tall" | "wide" | "normal";
};

export const projects: Project[] = [
  {
    id: "bgmi-1",
    title: "Conqueror Rank Push Live",
    category: "BGMI",
    img: bgmi1,
    description: "Thumbnail for conqueror rank push live",
    client: "@cyraxislive",
    feedback: "CTR jumped from 4% to 11% on the next video. Insane.",
    span: "wide",
  },
  {
    id: "gta-1",
    title: "The Legends Roleplay LIVE",
    category: "GTA V",
    img: gta1,
    description: "Movie-poster composition with three-character lineup, neon skyline, and bold heist typography.",
    client: "@8bit-FlickerHeadPlayz",
    feedback: "Best thumbnail I've ever had. Hit 10K views in 4 days.",
    span: "tall",
  },
  {
    id: "valo-1",
    title: "Setup Tour Video",
    category: "Minecraft",
    img: valo1,
    description: "A mixture of Minecraft and real life together",
    client: "@RealAaquif_",
    feedback: "My Character sitting on gaming chair looks cool !!",
  },
  {
    id: "mc-1",
    title: "Gun Deal TheLegends Roleplay Live",
    category: "GTA V",
    img: mc1,
    description: "Bold composition with weapon and high-stakes atmosphere.",
    client: "@SpAwnyIsLive",
    feedback: "Doubled my CTR and the live got more views than ever before",
  },
  {
    id: "bgmi-2",
    title: "Conqueror Tier Rank Push",
    category: "BGMI",
    img: bgmi2,
    description: "Premium golden-wings portrait with fire accents and trophy iconography.",
    client: "@cyraxislive",
    feedback: "Pure premium. Worth every rupee.",
  },
  {
    id: "gta-2",
    title: "Soulcity by ECHORP Live",
    category: "GTA V",
    img: gta2,
    description: "Thumbnail for soulcity by ECHORP live",
    client: "@informniagaming",
    feedback: "My audience kept asking who made this. Worth it.",
    span: "wide",
  },
  {
    id: "valo-2",
    title: "Grind Live",
    category: "Valorant",
    img: valo2,
    description: "Holding a Valo gun , cinematic texts",
    client: "@Drizzaro",
    feedback: "Best Valo Thumbnail I've ever made !",
  },
  {
    id: "mc-2",
    title: "LostMC Club Mafia TheLegendsRoleplay Live",
    category: "GTA V",
    img: mc2,
    description: "LostMC Mafia chilling on a Sofa",
    client: "@SpAwnyIsLive",
    feedback: "It feels so bossy",
    span: "tall",
  },
  {
    id: "bgmi-3",
    title: "Minecraft Chill Live",
    category: "Minecraft",
    img: bgmi3,
    description: "Just a Minimalist Live Thumbnail",
    client: "@RealAaquif_",
    feedback: "Easily the most Minimalist thumbnail of my channel.",
  },
];

export const categories = [
  { name: "BGMI", subtitle: "Battle Royale Thumbnail Collection", img: bgmi1, count: 30 },
  { name: "GTA V", subtitle: "Cinematic Gaming Artwork", img: gta1, count: 45 },
  { name: "Valorant", subtitle: "Competitive Esports Designs", img: valo2, count: 10 },
  { name: "Minecraft", subtitle: "Challenge & SMP Designs", img: bgmi3, count: 25 },
] as const;

export const reviews = [
  { name: "ItzAdiyan", niche: "Minecraft Creator · 10K+ subs", text: "Shaurya understood my channel's vibe in one call. CTR has been crazy ever since." },
  { name: "StonerGamer", niche: "BGMI Streamer · 14K+ subs", text: "The thumbnails feel like Esports posters. My audience can't scroll past them." },
  { name: "NetherPlayz", niche: "Valorant Pro · 1k+ subs", text: "Easily the most professional designer I've worked with. Fast, clean, premium." },
  { name: "GamingZx3", niche: "Minecraft Creator · 35K+ subs", text: "Every series I launch with Shaurya's thumbnails outperforms by 2-3x." },
  { name: "Jwuggie", niche: "Valo and Minecraft Creator · 3K+ subs", text: "Replies fast, revisions are quick, designs hit. Worth every penny." },
  { name: "Powdy", niche: "Minecraft PVP coach · 10K+ subs", text: "He's not just a designer — he's a CTR strategist. Period." },
  { name: "ITZ ME PAGAL", niche: "Minecraft Creator · 50K+ subs", text: "Booked him for 1 weeks straight. Won't switch. Ever." },
  { name: "Nirbhay Katiyar", niche: "Variety Streamer · 3K+ subs", text: "Premium quality without the agency price tag. Highly recommend." },
];