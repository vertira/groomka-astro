import { Card, CardContent } from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
const dogs = [
  {
    url: "/images/dog1-1.jpeg",
  },
  {
    url: "/images/dog1-2.jpeg",
  },
  {
    url: "/images/dog2-1.jpeg",
  },
  {
    url: "/images/dog2-2.jpeg",
  },
  {
    url: "/images/dog3-1.jpeg",
  },
  {
    url: "/images/dog3-2.jpeg",
  },
  {
    url: "/images/dog4-1.jpeg",
  },
  {
    url: "/images/dog4-2.jpeg",
  },
  {
    url: "/images/dog5-1.jpeg",
  },
  {
    url: "/images/dog5-2.jpeg",
  },
  {
    url: "/images/dog6.jpeg",
  },
  {
    url: "/images/dog7.jpeg",
  },
  {
    url: "/images/dog8.jpeg",
  },
  {
    url: "/images/dog9.jpeg",
  },
];
export function CarouselDogs() {
  return (
    <Carousel
      className="w-full lg:w-1/2 "
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        {dogs.map((dog, index) => (
          <CarouselItem key={index} className="max-md:basis-full basis-1/2">
            <div className="p-1">
              <Card className="border-pink-600">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <img
                    src={dog.url}
                    alt="photo of dog"
                    className="rounded-lg select-none"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
