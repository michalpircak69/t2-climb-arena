import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceById } from "@/data/services";

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="section-padding">
          <div className="container mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl mb-6">Služba nenájdená</h1>
            <p className="text-muted-foreground mb-8">Táto služba momentálne nie je dostupná.</p>
            <a href="/#services" className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted">
              <ArrowLeft className="mr-2 h-4 w-4" /> Späť
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="section-padding">
        <div className="container mx-auto">
          <a href="/#services" className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Späť
          </a>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl text-foreground">{service.label}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{service.description}</p>
              {service.details.map((detail, index) => (
                <p key={index} className="text-base leading-8 text-foreground/90">
                  {detail}
                </p>
              ))}
            </div>
            <div className="grid gap-4">
              {service.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${service.label} ${index + 1}`}
                  className="h-64 w-full rounded-3xl object-cover shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
