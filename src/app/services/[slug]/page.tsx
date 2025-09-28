import { ServiceDetailsContent } from "@/components/Sections/Services/ServiceDetails/ServiceDetailsClient";
import { services } from "@/constants/content";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ & /g, "-and-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

function getServiceBySlug(slug: string) {
  return services.find((s) => slugify(s.title) === slug);
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: slugify(service.title),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The service you are looking for does not exist.",
    };
  }

  return {
    title: `${service.title}`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title}`,
      description: service.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title}`,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentServiceIndex = services.findIndex(
    (s) => slugify(s.title) === slug
  );

  const nextServiceIndex = (currentServiceIndex + 1) % services.length;

  const nextServiceHref = services[nextServiceIndex].href;
  console.log("🚀 ~ ServicePage ~ nextServiceHref:", nextServiceHref);

  return (
    <ServiceDetailsContent
      service={service}
      nextServiceHref={nextServiceHref}
    />
  );
}
