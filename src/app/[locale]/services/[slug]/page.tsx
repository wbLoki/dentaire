import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

async function getService(slug: string, locale: string = 'en') {
  const messages = await getMessages({ locale: locale });
  if (typeof messages.Services === 'object' && messages.Services !== null) {
    const services = Object.values(messages.Services.servicesList);
    return services
      .map((service) => {
        if (
          typeof service === 'object' &&
          service !== null &&
          'name' in service &&
          'title' in service &&
          'desc' in service &&
          'img' in service &&
          'slug' in service
        ) {
          return {
            name: service.name,
            title: service.title,
            desc: service.desc,
            img: service.img,
            slug: service.slug,
          } as Service;
        } else {
          return null;
        }
      })
      .filter((service) => service?.slug === slug)[0];
  }
}

export default async function ServicePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  const service = await getService(slug, locale);
  console.log('service: ', service);
  console.log('params: ', params);

  if (!service) {
    notFound();
  }

  console.log('service: ', service);

  return (
    <main className="m-auto text-sm flex flex-col gap-16 lg:gap-24 items-center p-2 xl:p-16 overflow-hidden min-h-screen bg-primary">
      <h1 className="text-4xl pb-2 pt-28 lg:text-6xl lg:pt-36 max-w-lg text-center">
        {service.name}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 max-w-5xl m-auto bg-card p-8 rounded-lg">
        <div>
          <Image
            src={service.img}
            alt="doctor"
            width={1400}
            height={300}
            className="rounded-xl object-contain"
          />
        </div>
        <div>
          <h2 className="font-bold text-3xl py-8">{service.title}</h2>
          <p>{service.desc}</p>
        </div>
      </div>
    </main>
  );
}
