import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Mail, AlertCircle, ArrowBigLeft, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
export default function Verify() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <Card className="max-w-sm px-4 w-full ">
        <div className=" mx-auto flex items-center justify-center rounded-full bg-blue-100 p-4">
          <Mail className="text-blue-500 size-12" />
        </div>
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-center capitalize ">
            Check your email
          </CardTitle>
          <CardDescription className=" text-center text-gray-400 font-normal ">
            We have sent a verification link to your{' '}
            <br className="hidden md:block" /> email address
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" bg-yellow-50 rounded-md border-yelow-300 p-4 mt-4 w-full">
            <div className="flex items-center justify-center gap-2">
              {' '}
              <AlertCircle className="text-yellow-500 size-5" />
              <p className="text-sm font-medium text-yellow-700">
                {' '}
                Be sure to check your spam folder!
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href="/"
            className={buttonVariants({
              className: 'w-full',
              variant: 'outline',
            })}
          >
            <ArrowLeft className="mr-2 size-4" />
            <p>Back to Homepage</p>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
