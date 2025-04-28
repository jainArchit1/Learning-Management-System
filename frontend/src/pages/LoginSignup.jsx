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
import { useEffect, useState } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: isRegisterLoading,
      isSuccess: isRegisterSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: isLoginLoading,
      isSuccess: isLoginSuccess,
    },
  ] = useLoginUserMutation();
  const handleInputData = (e, type) => {
    const { name, value } = e.target;
    if (type === "Signup") {
      setSignup({ ...signup, [name]: value });
    } else {
      setLogin({ ...login, [name]: value });
    }
  };
  const navigate = useNavigate();
  const handleRegistration = async (type) => {
    const inputData = type === "Signup" ? signup : login;
    const action = type === "Signup" ? registerUser : loginUser;
    await action(inputData);
  };
  useEffect(() => {
    if (isRegisterSuccess && registerData) {
      toast.success(registerData.message || "Registration Successful");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Registration Failed");
    }
    if (isLoginSuccess && loginData) {
      toast.success(loginData.message || "Login Successful");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.data.message || "Login Failed");
    }
  }, [
    isLoginLoading,
    isRegisterLoading,
    loginError,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);
  return (
    <div className="flex items-center justify-center mt-20">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create your account. Fill in the details and click Signup.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={signup.name}
                  onChange={(e) => handleInputData(e, "Signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={signup.email}
                  onChange={(e) => handleInputData(e, "Signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={(e) => handleInputData(e, "Signup")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={isRegisterLoading}
                onClick={() => handleRegistration("Signup")}
              >
                {isRegisterLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin">
                    please wait
                  </Loader2>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your email and password to log in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={(e) => handleInputData(e, "Login")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={(e) => handleInputData(e, "Login")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={isLoginLoading}
                onClick={() => handleRegistration("Login")}
              >
                {isLoginLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin">
                    please wait
                  </Loader2>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginSignup;
