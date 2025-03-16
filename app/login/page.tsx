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
import { auth, signIn } from '../utils/auth';
import SubmitButton from '../components/SubmitButton';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await auth();

  if (session?.user) {
    redirect('/dashboard');
  }

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
          <form
            className="flex flex-col gap-y-4"
            action={async (formData) => {
              'use server';
              await signIn('nodemailer', formData);
            }}
          >
            <div className="flex flex-col gap-y-2 mb-3">
              <Label htmlFor="email">Email</Label>
              <Input
                className=""
                placeholder="hello@hello.com"
                name="email"
                type="email"
                required
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
