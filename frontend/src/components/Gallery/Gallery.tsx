import { useState } from "react";
import ImageModal from "./ImageModal";

interface GalleryItem {
  image: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: "/images/pic1.jpeg",
    title: "Fire Extinguisher Training",
  },
  {
    image: "/images/pic2.jpeg",
    title: "Emergency Mock Drill",
  },
  {
    image: "/images/pic3.jpeg",
    title: "Safety Awareness Session",
  },
  {
    image: "/images/pic4.jpeg",
    title: "Fire Warden Training",
  },
  {
    image: "/images/pic5.jpeg",
    title: "Emergency Preparedness",
  },
  {
    image: "/images/pic6.jpeg",
    title: "Risk Assessment Training",
  },
  {
    image: "/images/pic7.jpeg",
    title: "Fire Safety Workshop",
  },
  {
    image: "/images/pic8.jpeg",
    title: "Team Coordination Exercise",
  },
  {
    image: "/images/pic9.jpeg",
    title: "Live Demonstration",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <section className="bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-widest text-red-500">
            Field Operations
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Training & Mock Drills
          </h2>

          <p className="mt-4 text-slate-400">
            Real-world fire safety training,
            emergency preparedness and
            mock drill operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              onClick={() =>
                setSelectedImage(item.image)
              }
              className="
              cursor-pointer
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              transition-all
              duration-300
              hover:border-red-500
              hover:-translate-y-2
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                h-[220px] md:h-[280px]
                w-full
                object-cover
                transition-all
                duration-500
                hover:scale-105
                "
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() =>
              setSelectedImage(null)
            }
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;