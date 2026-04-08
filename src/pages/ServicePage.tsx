import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DecorativeShapes from "@/components/DecorativeShapes";
import { getServiceById } from "@/data/services";

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceById(serviceId) : undefined;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="section-padding">
          <div className="container mx-auto text-center">
            <h1 className="mb-6 font-display text-4xl md:text-6xl">Služba nenájdená</h1>
            <p className="mb-8 text-muted-foreground">Táto služba momentálne nie je dostupná.</p>
            <a
              href="/#services"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Späť
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const galleryImages = service.sections?.flatMap((section) => section.images) ?? service.images;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden bg-secondary/50 section-padding">
        <DecorativeShapes />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.08),transparent_24%),radial-gradient(circle_at_65%_45%,rgba(59,130,246,0.06),transparent_22%)]" />
        <div className="container mx-auto relative">
          <a
            href="/#services"
            className="mb-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Späť
          </a>

          <div className="space-y-8">
            <div className={service.flyer ? "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_440px]" : undefined}>
              <div className={service.id === "kids-clubs" ? "space-y-3 text-center" : "space-y-3"}>
                <h1 className="font-display text-4xl text-foreground md:text-5xl">{service.label}</h1>
                <p className={service.id === "kids-clubs" ? "mx-auto max-w-2xl text-lg text-muted-foreground" : "max-w-2xl text-lg text-muted-foreground"}>
                  {service.description}
                </p>
                {service.details.map((detail, index) => (
                  <p
                    key={index}
                    className={
                      service.id === "kids-clubs"
                        ? "mx-auto max-w-2xl text-base leading-8 text-foreground/90"
                        : "max-w-2xl text-base leading-8 text-foreground/90"
                    }
                  >
                    {detail}
                  </p>
                ))}
                {service.secondaryImage && (
                  <div
                    className={
                      service.id === "kids-clubs"
                        ? "flex justify-center pt-10"
                        : "pt-4"
                    }
                  >
                    <img
                      src={service.secondaryImage}
                      alt={`Harmonogram ${service.label}`}
                      className={
                        service.id === "summer-camps"
                          ? "w-full max-w-4xl rounded-3xl border border-border/50 object-contain shadow-lg"
                        : service.id === "kids-clubs"
                            ? "w-full max-w-lg rounded-3xl border border-border/50 object-contain shadow-lg"
                            : "w-full max-w-3xl rounded-3xl border border-border/50 object-contain shadow-lg"
                      }
                    />
                  </div>
                )}

                {service.extraBlockTitle && service.extraBlockImage && (
                  <div className="space-y-5 pt-12">
                    <div className="space-y-3 text-center">
                      <h2 className="font-display text-3xl text-foreground md:text-4xl">{service.extraBlockTitle}</h2>
                      {service.extraBlockDescription && (
                        <p className="mx-auto max-w-2xl text-base leading-8 text-foreground/90">
                          {service.extraBlockDescription}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={service.extraBlockImage}
                        alt={service.extraBlockTitle}
                        className="w-full max-w-xl rounded-3xl border border-border/50 object-contain shadow-lg"
                      />
                    </div>
                  </div>
                )}
              </div>

              {service.flyer && (
                <div className="flex justify-center lg:justify-end">
                  <img
                    src={service.flyer}
                    alt={`Leták ${service.label}`}
                    className="w-full max-w-[440px] rounded-3xl object-cover shadow-lg"
                  />
                </div>
              )}
            </div>

            {service.sections ? (
              <div className="space-y-10">
                {service.sections.map((section, sectionIndex) => {
                  const imageOffset = service.sections
                    ?.slice(0, sectionIndex)
                    .reduce((total, currentSection) => total + currentSection.images.length, 0) ?? 0;

                  return (
                    <section key={section.title} className="space-y-6 pt-4">
                      <div className="space-y-5">
                        <h2 className="font-display text-2xl text-foreground md:text-3xl">{section.title}</h2>
                        {section.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="max-w-3xl text-base leading-8 text-foreground/90">
                            {detail}
                          </p>
                        ))}
                      </div>

                      <div className="grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {section.images.map((src, imageIndex) => (
                          <div key={imageIndex} className="overflow-hidden rounded-3xl">
                            <img
                              src={src}
                              alt={`${section.title} ${imageIndex + 1}`}
                              onClick={() => setSelectedImageIndex(imageOffset + imageIndex)}
                              className="h-52 w-full cursor-pointer rounded-3xl object-cover transition-transform duration-300 hover:scale-[1.01]"
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            ) : (
              <div className="grid items-start gap-4">
                <div className="space-y-8">
                  {service.instagramEmbedUrl && (
                    <div className="mx-auto w-full max-w-[450px]">
                      <h2 className="mb-4 text-xl font-semibold text-foreground">Instagram video</h2>
                      <div className="mx-auto w-full overflow-hidden rounded-3xl border border-border bg-black">
                        <iframe
                          src={service.instagramEmbedUrl}
                          title="Instagram video"
                          className="w-full"
                          style={{ minHeight: 800 }}
                          loading="lazy"
                          scrolling="no"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                        />
                      </div>
                    </div>
                  )}

                  {service.downloads && (
                    <div className="pt-10">
                      <h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">Prihlášky:</h2>
                      <div className="flex flex-wrap gap-3">
                        {service.downloads.map((download) => (
                          <a
                            key={download.href}
                            href={download.href}
                            download
                            className="inline-flex items-center rounded-full border border-border bg-card px-6 py-4 text-base font-semibold text-foreground transition hover:bg-muted md:text-lg"
                          >
                            {download.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    className={
                      service.id === "summer-camps"
                        ? "mx-auto grid max-w-5xl grid-cols-1 gap-4 pt-28 sm:grid-cols-2"
                        : service.id === "kids-clubs"
                          ? "mx-auto grid max-w-4xl grid-cols-1 gap-4 pt-10 sm:grid-cols-2"
                        : service.id === "rock-courses"
                          ? "mx-auto grid max-w-3xl grid-cols-1 gap-4 pt-8 sm:grid-cols-2"
                        : "grid grid-cols-1 gap-x-2 gap-y-1 pt-4 sm:grid-cols-2"
                    }
                  >
                    {service.images.map((src, index) => (
                      <div key={index} className="overflow-hidden rounded-3xl">
                        <img
                          src={src}
                          alt={`${service.label} ${index + 1}`}
                          onClick={() => setSelectedImageIndex(index)}
                          className={
                            service.id === "summer-camps"
                              ? "h-72 w-full cursor-pointer rounded-3xl object-cover transition-transform duration-300 hover:scale-[1.01]"
                              : service.id === "kids-clubs"
                                ? "h-80 w-full cursor-pointer rounded-3xl object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
                                : service.id === "rock-courses"
                                  ? "h-[24rem] w-full cursor-pointer rounded-3xl object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
                              : "h-44 w-full cursor-pointer rounded-3xl object-cover transition-transform duration-300 hover:scale-[1.01]"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <AnimatePresence>
            {selectedImageIndex !== null && galleryImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                onClick={() => setSelectedImageIndex(null)}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImageIndex(null);
                  }}
                  className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImageIndex((currentIndex) =>
                      currentIndex !== null ? (currentIndex - 1 + galleryImages.length) % galleryImages.length : null,
                    );
                  }}
                  className="absolute left-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImageIndex((currentIndex) =>
                      currentIndex !== null ? (currentIndex + 1) % galleryImages.length : null,
                    );
                  }}
                  className="absolute right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <motion.img
                  key={selectedImageIndex}
                  src={galleryImages[selectedImageIndex]}
                  alt={`${service.label} ${selectedImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain"
                  onClick={(event) => event.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
