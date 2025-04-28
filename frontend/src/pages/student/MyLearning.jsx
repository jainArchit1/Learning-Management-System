import React from "react";
import Course from "./Course";

const MyLearning = () => {
  const isLoading = false;
  const myLearning = [1, 2, 3];
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="text-2xl font-bold text-center">My Learning</h1>
      <div className="m-5">
        {isLoading ? (
          "Loading....."
        ) : myLearning.length === 0 ? (
          "No Course Found"
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((data, index) => (
              <Course key={index}></Course>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;
