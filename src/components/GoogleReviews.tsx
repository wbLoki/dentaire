'use client';
import React from 'react';
import Slider from 'react-slick';
import { Avatar, Card, CardBody, CardHeader } from '@nextui-org/react';
import StarRating from './StarRating';

type GoogleReviewsProps = {
  reviews: any[];
  error: string | null;
};

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ reviews, error }) => {
  if (error) return <div>Error fetching reviews: {error}</div>;
  if (reviews.length === 0) return <div>No reviews available.</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{ textAlign: 'center' }}
      className="w-full max-w-xl mx-auto"
    >
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review.author_name}
            className="flex justify-center"
          >
            <Card className="max-w-[340px] max-h-[240px] mx-auto">
              <CardHeader className="gap-4 w-full">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={review.profile_photo_url}
                />
                <div className="flex flex-col gap-1 items-start justify-center flex-1 text-default-500">
                  <h4 className="text-small font-semibold leading-none">
                    {review.author_name}
                  </h4>
                  <div className="flex w-full justify-between">
                    <h5 className="text-small tracking-tight text-default-500">
                      {review.relative_time_description}
                    </h5>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 pt-0 text-small text-default-600 overflow-y-auto">
                <p>{review.text}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GoogleReviews;
