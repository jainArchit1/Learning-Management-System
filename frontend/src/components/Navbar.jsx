import { Menu, School } from "lucide-react";
import React from "react";
import { CreditCard, LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "../DarkMode";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;

  return (
    <div className="h-16 dark:bg-[rgb(10,10,10)] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex  justify-between items-center gap-3">
        <div className="flex items-center gap-2 p-3 ">
          <Link to="/">
            <School size={"30"}></School>
          </Link>

          <h1 className="hidden md:block font-extrabold text-2xl ">
            E-Learning
          </h1>
        </div>
        {/* 2nd part */}
        <div className="flex items-center gap-8 ">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {/*  */}
                  <DropdownMenuItem>
                    <span>
                      <Link to="/mylearning">My learning</Link>
                    </span>

                    {/*  */}
                    {/*  */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile">
                      <span>Edit Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  {/*  */}
                  {/*  */}
                  <DropdownMenuItem>
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex  justify-center items-center gap-2">
              <Button variant={"outline"}>Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode></DarkMode>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4  h-full ">
        <h1 className="font-extrabold text-2xl ">E-Learning</h1>
        <MobileDevice></MobileDevice>
      </div>
    </div>
  );
};

export default Navbar;

const MobileDevice = () => {
  const roll = "admin";
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="rounded-full bg-gray-200 hover-bg-gray-200"
            variant="outline"
          >
            <Menu></Menu>
          </Button>
        </SheetTrigger>
        <SheetContent className=" flex flex-col">
          <SheetHeader className="flex flex-row  items-center justify-between mt-2 ">
            <SheetTitle>E-Learning</SheetTitle>
            {/* <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription> */}
            {/* <DropdownMenuTrigger asChild>
              <Button></Button>
            </DropdownMenuTrigger> */}
            <DarkMode></DarkMode>
          </SheetHeader>
          {/* <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div> */}
          <Separator className="mr-2"></Separator>
          <nav className="flex flex-col space-y-4">
            <span>My Learning </span>
            <span>Edit Profile </span>
            <span>Log Out </span>
          </nav>
          {roll === "admin" && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="mt-4">
                  Dashboard
                </Button>
              </SheetClose>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};
