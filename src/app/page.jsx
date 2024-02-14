import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGES CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src='/hero.png' alt="Sylvain manga" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Building Some Next.JS Experiences can be a serious pain in the A**</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">Welcome to my portfolio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus optio ad ratione saepe enim voluptates dolor facilis earum nesciunt omnis ipsum ex doloribus nemo tempore, sapiente, voluptate corrupti qui corporis dolores est dolore, illum quibusdam! Sunt explicabo molestiae quia doloremque! Quod eveniet expedita quos doloribus cumque necessitatibus corrupti quibusdam! </p>
        {/* BUTTONS */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Showcase</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
