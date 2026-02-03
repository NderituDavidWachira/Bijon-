// src/data/servicesData.js
import { 
  FaTshirt, FaTools, FaBuilding, FaPrint, FaLayerGroup, FaPaintBrush 
} from 'react-icons/fa';

export const servicesData = [
  {
    id: "apparel-uniforms", // This is the unique link ID
    category: "Apparel & Uniforms",
    description: "High-quality custom uniforms, branded staff wear, and promotional clothing to unite your team.",
    icon: <FaTshirt />, 
    items: [
      { name: "Customization", desc: "Tailored branding on apparel.", images: ["/images/appll.jpg", "/images/eco.jpg"] },
      { name: "Staff Uniforms", desc: "Professional uniforms for staff.", images: ["/images/appeal.jpg", "/images/uni.jpg","/images/uniform.jpg"] },
      { name: "Promotional Wear", desc: "T-shirts and caps for events.", images: ["/images/cap.jpeg", "/images/appl.jpeg"] },
      { name: "Protective Gear", desc: "Branded safety vests & helmets.", images: ["/images/Protective1.jpeg", "/images/protective.jpg"] },
      { name: "Sports Kits", desc: "Full sports team jerseys.", images: ["/images/sport.jpg", "/images/Sportskits.jpg", "/images/Sportskit.jpg"] }
    ]
  },
  {
    id: "signage-fabrication",
    category: "Signage & Fabrication",
    description: "Make a bold statement with 3D signs, lightboxes, and custom fabrication for your business.",
    icon: <FaTools />,
    items: [
      { name: "3D Signs", desc: "Illuminated 3D channel letters.", images: ["/images/shop-front-signage.jpeg", "/images/3d.jpg","/images/3Dsigb.jpg"] },
      { name: "Light Boxes", desc: "Eye-catching displays.", images: ["/images/light.jpeg", "/images/3Dsign.jpg","/images/3Dsigns.jpg"] },
      { name: "Office Signage", desc: "Door & reception signs.", images: ["/images/Office signage.jpg", "/images/Officesignag.jpg","/images/Officesignage.jpg" , "/images/Officesignage.jpg"] },
      { name: "Roadside Billboards", desc: "Large format structures.", images: ["/images/rd.jpeg", "/images/rd.jpeg"] },
      { name: "Directional Signs", desc: "Wayfinding guides.", images: ["/images/direction.jpeg", "/images/direction.jpeg"] }
    ]
  },
  {
    id: "corporate-branding",
    category: "Promotional items & Corporate Branding",
    description: "Design|Print|Brand",
    icon: <FaBuilding />,
    items: [
      { name: "Office Branding", desc: "Wall wraps & frosted glass.", images: ["/images/office.jpeg", "/images/corp.jpg", "/images/c.jpg"] },
      { name: "Vehicle Branding", desc: "Full or partial vehicle wraps.", images: ["/images/vehicle.jpeg", "/images/vecle.jpg"] },
      { name: "Staff ID Branding", desc: "Custom lanyards & IDs.", images: ["/images/Staff Id.jpg", "/images/Staff Id.jpg"] },
      { name: "Window Graphics", desc: "Vinyl stickers for shop fronts.", images: ["/images/window.jpeg", "/images/window.jpeg"] },
      { name: "Merchandise", desc: "Branded pens & bottles.", images: ["/images/pen.jpg", "/images/pen.jpg"] }
    ]
  },
  {
    id: "digital-printing",
    category: "Digital & Offset Printing",
    description: "Premium printing for business cards, brochures, eulogies, and marketing materials.",
    icon: <FaPrint />,
    items: [
      { name: "Eulogies", desc: "Funeral programs designed with care.", images: ["/images/shop--signage.jpeg", "/images/shop--signage.jpeg"] },
      { name: "Business Cards", desc: "Matte, gloss, or textured cards.", images: ["/images/Business.jpg", "/images/businesss.jpg"] },
      { name: "Wedding Cards", desc: "Custom invitation cards.", images: ["/images/wedding.jpeg", "/images/wedding.jpg"] },
      { name: "Flyers & Brochures", desc: "Vibrant marketing materials.", images: ["/images/shop-frontage.jpeg", "/images/shop-frontage.jpeg"] },
      { name: "Receipt Books", desc: "NCR books for records.", images: ["/images/book.jpg", "/images/Rece.jpg",  "/images/recept.jpg"] }
    ]
  },
  {
    id: "print-technology",
    category: "Print Technology",
    description: "Advanced printing solutions using UV, Sublimation, and Large Format technologies.",
    icon: <FaLayerGroup />,
    items: [
      { name: "UV Printing", desc: "Print on pens, metal, plastic.", images: ["/images/UV.jpeg", "/images/uvv.jpg"] },
      { name: "Direct to Film (DTF)", desc: "Heat transfer prints for fabrics.", images: ["/images/larges.jpeg", "/images/larges.jpeg"] },
      { name: "Large Format", desc: "Banners & stickers.", images: ["/images/large.jpeg", "/images/large.jpeg"] },
      { name: "Laser Engraving", desc: "Etching on metal & wood.", images: ["/images/shop-front-signage.jpeg", "/images/shop-front-signage.jpeg"] },
      { name: "Sublimation", desc: "Mugs, plates & polyester.", images: ["/images/Sublimation.jpeg", "/images/friend.jpg", "/images/sublimation.jpg"] },
      { name: "Promotional Items", desc: "Event giveaways.", images: ["/images/give.jpeg", "/images/away.jpg","/images/Promotional.jpg"] }
    ]
  },
  {
    id: "graphic-design",
    category: "Graphic Design",
    description: "Creative visual identities, logo design, and artwork creation that brings your brand to life.",
    icon: <FaPaintBrush />,
    items: [
      { name: "Logo Design", desc: "Unique logos for your brand.", images: ["/images/lg.png", "/images/lg.png"] },
      { name: "Brand Identity", desc: "Fonts, colors & guidelines.", images: ["/images/brand.jpeg", "/images/brand.jpeg"] },
      { name: "Marketing Services", desc: "Posters & social media banners.", images: ["/images/poster.jpg", "/images/poster.jpg"] },
    ]
  }
];