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
  type: 1 | 2 | 3;
};
export default function Card({ img, name, desc, type }: Props) {
  if (type === 1) {
    return (
      <Cart
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={300}
          src={img}
          width={300}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{name}</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Read more
          </Button>
        </CardFooter>
      </Cart>
    );
  }
  if (type === 2) {
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
  if (type === 3) {
    return (
      <Cart
        shadow="sm"
        isPressable
        onPress={() => console.log('item pressed')}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={name}
            className="w-full object-cover bg-black/20 h-[240px]"
            src={img}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{name}</b>
        </CardFooter>
      </Cart>
    );
  }
}
