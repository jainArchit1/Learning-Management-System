import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Course from "./Course";
const courseData = [1, 2, 3, 4, 5, 6, 7, 8];
const Courses = () => {
  const isLoading = false;
  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto p-6 ">
        <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard />)
            : courseData.map((data, index) => <Course key={index}></Course>)}
        </div>
      </div>
    </div>
  );
};

export default Courses;

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
