import { LoadingSvg } from "@/public/assets/icons";

const Loading = () => {
  return (
    <div className="h-screen w-full gap-10 flex flex-col justify-center items-center">
      {/* Change the loading Spinner here with something more simple */}
      <div>
        <LoadingSvg />
      </div>{" "}
      {/* Design the font as per UI */}
      <p className="lg:text-3xl text-lg font-light text-center">
        Your page is loading...
      </p>
    </div>
  );
};

export default Loading;
