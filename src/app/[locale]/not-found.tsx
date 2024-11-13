export default function NotFound() {
  console.log('Not Found page');
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-12 bg-red-600 rounded-lg text-white place-items-center">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
