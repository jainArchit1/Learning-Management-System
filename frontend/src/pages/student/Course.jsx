import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg"
          alt="logo"
          className="w-full h-36 object-cover  rounded-t-lg"
        />
      </div>

      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="font-bold hover:underline text-lg truncate">
          Next js Complete Course in Hindi 2025
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="logo"
              ></AvatarImage>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm ">Mern Stack</h1>
            {/* <Button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-600 border border-blue-600 dark:border-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white">
              Beginer
            </Button> */}
          </div>
          <Badge
            className={`bg-blue-600 text-white px-2 py-1 text-xs rounded-full`}
          >
            Beginer
          </Badge>
        </div>
        <div className="text-lg font-bold">
          <span className=""> ₹ 499</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
