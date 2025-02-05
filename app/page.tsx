import Text from "@/components/atom/Text";
import Container from "@/components/Layout/ContainerWrapper";

export default function Home() {
  return (
    <main className="h-screen ">

      {/* <div className="w-full"> */}
      <div className=" max-w-[1440p]">
        <Text variant="title">
          Welcome to <span className=" text-primary">Bright Smile </span>Dental
          Clinic{" "}
        </Text>
        
          <Container className="bg-secondary" heading="Our Client" headingSpan="Testimonials" subheading="Our patients love the professionalism and quality care they receive at our dental clinic. Here are some of their feedbacks">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum adipisci dolorem eos quas inventore vel, ullam unde placeat necessitatibus veritatis ducimus ea vitae nostrum excepturi non cumque consequatur corrupti harum odio deleniti tenetur commodi quod fugiat. Culpa consequuntur sequi illo tempora, esse nisi laboriosam? Maxime impedit placeat cumque sequi et.
            </div>
          </Container>
          <Container heading="Our Client" headingSpan="Testimonials" subheading="We are a dental clinic">
            <div>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempora pariatur dolores illo quas adipisci velit veritatis aliquam maxime at, libero quisquam! Hic cumque ad ratione non unde illum, quisquam earum facilis placeat neque quam, quibusdam obcaecati, magni laboriosam. Consequatur vitae magni quibusdam eum ea. Quae ut vero repellat ad!
            </div>
          </Container>
      </div>
    </main>
  );
}
