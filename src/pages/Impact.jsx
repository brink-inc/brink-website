import { motion } from "framer-motion";
import {
  Users,
  Target,
  TrendingUp,
  Heart,
  Award,
  Lightbulb,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import ImageCarousel from "../components/ImageCarousel";

// PUBLIC image paths — no imports needed
const impactImages = [
  "/assets/IMG-20251125-WA0009.jpg",
  "/assets/IMG-20251125-WA0010.jpg",
  "/assets/IMG-20251125-WA0011.jpg",
  "/assets/IMG-20251125-WA0012.jpg",
  "/assets/IMG-20251125-WA0013.jpg",
  "/assets/IMG-20251125-WA0014.jpg",
  "/assets/IMG-20251125-WA0015.jpg",
  "/assets/IMG-20251125-WA0016.jpg",
  "/assets/IMG-20251125-WA0017.jpg",
  "/assets/IMG-20251125-WA0018.jpg",
  "/assets/IMG-20251125-WA0019.jpg",
  "/assets/IMG-20251125-WA0020.jpg",
  "/assets/IMG-20251125-WA0021.jpg",
  "/assets/IMG-20251125-WA0022.jpg",
  "/assets/IMG-20251125-WA0023.jpg",
];

export default function Impact() {
  const { theme } = useTheme();

  const stats = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      number: "250+",
      label: "Students Impacted",
      description:
        "Reached through mentoring, workshops, and community programs.",
    },
    {
      icon: <Target className="w-10 h-10 text-green-500" />,
      number: "40+",
      label: "Projects Completed",
      description: "Delivering solutions that drive progress and innovation.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-purple-500" />,
      number: "300%",
      label: "Growth Rate",
      description:
        "Our reach and influence have expanded significantly over time.",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      number: "500+",
      label: "Volunteering Hours",
      description:
        "Giving back to support educational and community development.",
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      number: "12",
      label: "Awards & Recognitions",
      description: "Celebrated for impactful contributions and leadership.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
      number: "15+",
      label: "Innovation Challenges",
      description:
        "Participated in events focused on creativity and real-world solutions.",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } pb-20`}
    >
      {/* Hero Section */}
      <section
        className={`py-24 text-center ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Impact
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empowering communities through education, innovation, and
          collaboration — one meaningful action at a time.
        </motion.p>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl shadow-lg text-center ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              variants={itemVariants}
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
              <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
              <p className="opacity-70">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Moments of Impact
        </motion.h2>
        <div className="max-w-4xl mx-auto px-6">
          <ImageCarousel images={impactImages} />
        </div>
      </section>
    </div>
  );
}
