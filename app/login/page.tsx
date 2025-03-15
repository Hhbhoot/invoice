import { Button } from '@/components/ui/button';
import {
  CardHeader,
  CardContent,
  CardDescription,
  Card,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export default function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <Card className="max-w-sm gap-4 w-full  ">
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Login</CardTitle>
          <CardDescription className="  text-gray-400 font-normal ">
            Enter your email below to login into your account
          </CardDescription>
        </CardHeader>

        <CardContent className="">
          <form className="flex flex-col gap-y-4" action="">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="" placeholder="hello@hello.com" type="email" />
            </div>
            <Button className=" cursor-pointer">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
