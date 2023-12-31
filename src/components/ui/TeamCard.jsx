import React from "react";
import Image from "next/image";

// Components
import Button from "./Button";
import Link from "next/link";

const TeamCard = ({ className = "", image, name, bio, skill, socials }) => {
  return (
    <div
      className={`${className} bg-[#EBEBEB] p-[12px] rounded-[20px] flex flex-col`}
    >
      <div className="relative w-full h-[86vw] sm:h-[38vw] md:h-[41vw] lg:h-[27vw] xl:h-[20vw] 2xl:h-[16.5vw] 3xl:h-[34s0px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="mt-[24px] flex-1 flex flex-col">
        <div className="flex-1 flex flex-col gap-[20px] sm:gap-2">
          <h3 className="text-[18px] font-semibold">{name}</h3>
          <div className="flex flex-wrap gap-2">
            <p className="w-fit text-black text-[16px] sm:text-[14px]">
              {skill}
            </p>
          </div>
          {bio && (
            <p className="sm:mt-[12px] text-[16px] sm:text-[14px] text-black leading-[140%]">
              {bio}
            </p>
          )}
        </div>
        <div className="mt-[28px] grid grid-cols-2 gap-[12px]">
          {socials.map((s, i) => (
            <Link key={i} href={s.url} target="_blank">
              <Button variant={s.theme} size="small">
                {s.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
