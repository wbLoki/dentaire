import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language');
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId: string = 'ChIJIyKDuyuHCw0R0ph-x7QbdSA';

    if (!placeId || !apiKey) {
        return NextResponse.json({ error: 'Missing placeId or API key' }, { status: 400 });
    }

    const allReviews: any[] = []; // Array to collect reviews

    try {
        // Fetch initial reviews
        let response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=review,user_ratings_total&language=${language}`
        );

        // Extract reviews and add to allReviews array
        allReviews.push(...(response.data.result?.reviews || []));

        // Filter reviews to only include those with 4 stars and above
        let filteredReviews = allReviews.filter((review: { rating: number }) => review.rating >= 4);

        // If we have less than 5 reviews, try to fetch more
        while (filteredReviews.length < 5) {
            // Check if there are more reviews to fetch (you might need a mechanism to get more reviews here)
            const moreReviewsResponse = await axios.get(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=review&language=${language}`
            );

            const moreReviews = moreReviewsResponse.data.result?.reviews || [];

            // If no more reviews are available, break the loop
            if (moreReviews.length === 0) {
                break;
            }

            // Add new reviews to allReviews
            allReviews.push(...moreReviews);
            
            // Filter again for 4 stars and above
            filteredReviews = allReviews.filter((review: { rating: number }) => review.rating >= 4);
        }

        // Limit the reviews to exactly 5
        const limitedReviews = filteredReviews.slice(0, 5);

        return NextResponse.json({
            totalReviews: response.data.result?.user_ratings_total || 0,
            reviews: limitedReviews,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching reviews' }, { status: 500 });
    }
}
