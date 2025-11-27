import React from 'react';

const Gallery: React.FC = () => {
  // Using high quality Unsplash images
  const images = [
    { 
        src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop", 
        title: "Cultural Festivals", 
        category: "Tradition",
        desc: "Celebrating the coronation anniversary" 
    },
    { 
        src: "https://images.unsplash.com/photo-1489396160835-779cbf40087f?q=80&w=2000&auto=format&fit=crop", 
        title: "Sunset Over Kyoga", 
        category: "Nature",
        desc: "The serene waters of Lake Kyoga" 
    },
    { 
        src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop", 
        title: "The Royal Drum", 
        category: "Heritage",
        desc: "Symbol of authority and unity" 
    },
    {
        src: "https://images.unsplash.com/photo-1535581652167-3d6b98636053?q=80&w=2000&auto=format&fit=crop",
        title: "Wildlife Conservation",
        category: "Tourism",
        desc: "Rhinos at Ziwa Sanctuary"
    },
    {
        src: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?q=80&w=2000&auto=format&fit=crop",
        title: "Community Dance",
        category: "Community",
        desc: "Youth keeping traditions alive"
    },
    {
        src: "https://images.unsplash.com/photo-1544209559-006d64998d30?q=80&w=1936&auto=format&fit=crop",
        title: "Cattle Heritage",
        category: "Livelihood",
        desc: "The pride of the Baruuli"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-gray-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-buruli-gold font-bold tracking-widest uppercase text-sm mb-2 block">Gallery</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">Life in Buruli</h2>
            </div>
            <button className="mt-4 md:mt-0 px-8 py-3 border border-buruli-gold/30 text-buruli-gold rounded-full hover:bg-buruli-gold hover:text-buruli-blue transition-all duration-300">
                Follow on Instagram
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
             {/* Large Feature Item */}
             <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                <img src={images[0].src} alt={images[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-buruli-gold text-xs font-bold uppercase tracking-wider mb-2">{images[0].category}</span>
                    <h3 className="text-3xl font-serif font-bold">{images[0].title}</h3>
                    <p className="text-gray-300 mt-2">{images[0].desc}</p>
                </div>
             </div>
             
             {/* Standard Grid Items */}
             {images.slice(1).map((img, idx) => (
                <div key={idx} className={`relative group overflow-hidden rounded-2xl ${idx === 3 ? 'md:col-span-2' : ''}`}>
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-buruli-gold text-[10px] font-bold uppercase tracking-wider">{img.category}</span>
                        <h3 className="text-lg font-bold">{img.title}</h3>
                    </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Gallery;