import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to  bg-indigo-600 dark:from-gray-800 dark:to-gray-900  py-20 px-4 text-center mt-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find Best Courses
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover , Learn and upskills with our wide range of course
        </p>
        <form className="flex items-center  dark:bg-gray-800 rounded-full shadow-lg overflow-hidden mx-w-xl mx-auto mb-6 bg-white">
          <Input
            type="text "
            placeholder="Search for Courses"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-black  dark:text-gray-100 dark:placeholder:-gray-500"
          ></Input>
          <Button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:bg-b;lue-800">
            Search
          </Button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-600 border border-blue-600 dark:border-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
