import Marquee from "./Marquee";
const images = [
  {
    url: "/images/salon1.jpeg",
  },
  {
    url: "/images/salon2.jpeg",
  },
  {
    url: "/images/salon3.jpeg",
  },
  {
    url: "/images/salon4.jpeg",
  },
];

const firstRow = images.slice(0, images.length / 2);
export function SalonImages() {
  return (
    <div className="relative flex h-[500px] max-md:w-screen max-w-lg flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((img, idx) => (
          <img
            src={img.url}
            key={idx}
            alt="photo of salon"
            className="relative w-96 cursor-pointer overflow-hidden rounded-[50px] p-4 pointer-events-none "
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-pink-100 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-pink-100 dark:from-background"></div>
    </div>
  );
}
