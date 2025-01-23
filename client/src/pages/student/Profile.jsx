import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Course from "./Course";

const Profile = () => {
  const isLoading = false; // Set to `true` for demonstration, in a real scenario, fetch user data here
  const enrolledCourses = [1,2,3]; // Example enrolled courses, you can fetch dynamically

  return (
    <div className="max-w-4xl mx-auto my-24 px-4">
      <h1 className="font-bold text-center text-2xl md:text-left">PROFILE</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          {isLoading ? (
            <div className="h-32 w-32 bg-gray-300 rounded-full animate-pulse"></div>
          ) : (
            <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </div>

        <div>
          <div className="mb-2">
            <h2 className="font-semibold text-gray-900 dark:text-gray-200 ml-2">
              Name:
              {isLoading ? (
                <div className="w-32 h-4 bg-gray-300 rounded animate-pulse ml-2"></div>
              ) : (
                <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                  Anand patel
                </span>
              )}
            </h2>
          </div>

          <div className="mb-2">
            <h2 className="font-semibold text-gray-900 dark:text-gray-200 ml-2">
              Email:
              {isLoading ? (
                <div className="w-40 h-4 bg-gray-300 rounded animate-pulse ml-2"></div>
              ) : (
                <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                  Anand@gmail.com
                </span>
              )}
            </h2>
          </div>

          <div className="mb-2">
            <h2 className="font-semibold text-gray-900 dark:text-gray-200 ml-2">
              Role:
              {isLoading ? (
                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse ml-2"></div>
              ) : (
                <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                  Instructor
                </span>
              )}
            </h2>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="col-span-3"
                    disabled={isLoading} // Disable input if loading
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Profile Photo
                  </Label>
                  <Input
                    type="file"
                    accept="image/*"
                    className="col-span-3"
                    disabled={isLoading} // Disable input if loading
                  />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please
                      wait
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div>
        <h1 className="font-medium text-lg">Courses you're enrolled in</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {isLoading ? (
            // Skeleton for courses
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-32 bg-gray-300 rounded-lg animate-pulse"
              ></div>
            ))
          ) : enrolledCourses.length === 0 ? (
            <h1>You Haven't enrolled yet</h1>
          ) : (
            enrolledCourses.map((course, index) => <Course key={index} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
