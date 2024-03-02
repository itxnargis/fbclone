import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<Props> = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-4 "
        src={profile}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
        alt={`${name}'s profile picture`}
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
        alt=""
      />
      {/* Name */}
      <p className="absolute bottom-4 left-4 text-white font-bold text-sm">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
