import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const LoginSignup = () => {
  const [signup, SetSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, SetLogin] = useState({
    email: "",
    password: "",
  });
  const handleInputData = (e, type) => {
    e.preventDefault();
    console.log(login);
    if (type === "Signup") {
      SetSignup({ ...signup, [e.target.name]: e.target.value });
    } else {
      SetLogin({ ...login, [e.target.name]: e.target.value });
    }
  };
  const ButtonSubmit = (type) => {
    let data = type === "Signup" ? "Signup" : "Login";
    console.log(data);
  };
  return (
    <div className="flex  items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="username"
                  value={signup.username}
                  onChange={(e) => {
                    handleInputData(e, "Signup");
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="username"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    handleInputData(e, "Signup");
                  }}
                  value={signup.email}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  id="username"
                  type="password"
                  value={signup.password}
                  name="password"
                  onChange={(e) => {
                    handleInputData(e, "Signup");
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  ButtonSubmit("Signup");
                }}
              >
                Signup
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  id="current"
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={(e) => {
                    handleInputData(e, "Login");
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input
                  id="new"
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={(e) => {
                    handleInputData(e, "Login");
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  ButtonSubmit("Login");
                }}
              >
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default LoginSignup;
