import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          className="w-full h-36 object-cover rounded-t-lg cursor-pointer"
          src="https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg"
          alt="course"
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="hover:underline font-bold text-lg truncate cursor-pointer">
          Nextjs complete course in hindi 2024
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm truncate cursor-pointer">
              Anand patel
            </h1>
          </div>
          <Badge
            className={
              "bg-blue-600 text-white px-2 py-1 text-[10px] rounded-full ml-4 cursor-pointer"
            }
          >
            Advance
          </Badge>
        </div>
        <div className="text-lg font-bold cursor-pointer">
          <span>₹499</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
