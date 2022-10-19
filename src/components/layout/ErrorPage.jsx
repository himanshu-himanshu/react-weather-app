import React from "react";

function ErrorPage() {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center font-Raleway space-y-6">
      <h1 className="text-9xl">404</h1>
      <h1 className="text-3xl">Something went wrong</h1>
      <h1 className="text-2xl font-bold">Try again later</h1>
    </div>
  );
}

export default ErrorPage;
