import ContainerWrapper from "@/components/Layout/ContainerWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import Rating from "@/components/molecule/Rating";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      review:
        "Probably the best dental clinic ,Very clean, courteous staff and of course the best team of doctors. I would highly recommend this clinic to anyone looking for a good dental clinic.",
      name: "Tanmay Agrawal",
      rating: 5,
    },
    {
      review:
        "Best dental clinic in the city. The doctors are very professional and the staff is very courteous. The clinic is very clean and hygienic. I would highly recommend this clinic to anyone looking for a good dental clinic.",
      name: "Ashin Shakya ",
      rating: 5,
    },
    {
      review:
        "Bright Smile Dental Clinic is the best dental clinic in the city. I had a great experience with the doctors and the staff. The clinic is very clean and hygienic. I would highly recommend this clinic to anyone looking for a good dental clinic.",
      name: "Gopal Tandukar",
      rating: 5,
    },
    {
      review:
        "I had a great experience with Bright Smile Dental Clinic. The doctors are very professional and the staff is very courteous. The clinic is very clean and hygienic. I would highly recommend this clinic to anyone looking for a good dental clinic.",
      name: "Pankaj Kedia",
      rating: 4,
    },
    {
      review:
        "Nice Clinic with professional doctors and staff. I would recommend this clinic to anyone looking for a good dental clinic.",
      name: "Piyush Agrawal",
      rating: 4.5,
    },
  ];
  return (
    <div className=" bg-secondary">
      <MaxWidthWrapper>
        <ContainerWrapper
          heading="Clients"
          headingSpan="Testimonials"
          subheading="Our patients love the professionalism and quality care they receive at our dental clinic."
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </ContainerWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
