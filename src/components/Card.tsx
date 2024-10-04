'use client';
import {
  Card as Cart,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from '@nextui-org/react';

type Props = {
  img: string;
  name: string;
  desc?: string;
};
export default function Card({ img, name, desc }: Props) {
  return (
    <Cart className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500">{desc}</small>
        {/* <h4 className="font-bold">{name}</h4> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2 justify-end">
        <Image
          alt="Card background"
          className="object-cover rounded-xl bg-black/20"
          src={img}
          width={270}
          height={270}
        />
      </CardBody>
    </Cart>
  );
}
