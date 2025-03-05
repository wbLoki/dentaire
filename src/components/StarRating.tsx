const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5).fill(0);

  return (
    <div style={{ display: 'flex' }}>
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={index < rating ? '#fb8e28' : '#e4e5e9'} // Conditional coloring
          style={{ marginRight: '5px' }}
        >
          <path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.843 1.485 8.276-7.421-4.02-7.421 4.02 1.485-8.276-6.064-5.843 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
