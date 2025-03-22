import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <Image
        src={"/maintanace.webp"}
        alt="maintanace image"
        height={1080}
        width={720}
        className="size-full object-cover object-center"
      />
    </>
  );
};

export default Home;
