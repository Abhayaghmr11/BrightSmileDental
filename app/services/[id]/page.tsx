import React from "react";

import { ServiceData } from "@/app/constants/config";

const ServiceDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const service = ServiceData.flatMap((category) =>
    category.section.map((service) => service)
  ).find((service) => service.id === id);
  console.log(id);
  console.log(service);
  return (
    <div>
      ServiceDetailPage{id}
      {service?.service}
    </div>
  );
};

export default ServiceDetailPage;
