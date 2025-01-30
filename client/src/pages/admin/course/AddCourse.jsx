import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");

  const [createCourse, { data, error, isLoading, isSuccess }] =
    useCreateCourseMutation();

  const navigete = useNavigate();

  const getSelectedCategory = (value) => {
    setCategory(value);
  };

  const createCourseHandlar = async () => {
    await createCourse({ courseTitle, category });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course Created");
      navigete("/admin/course")
    }
  }, [isSuccess, error]);

  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <h1 className="font-bold text-lg">
          Let's add course, add some basic course details for your new course
        </h1>
        <p className="text-gray-600 text-xs mt-2">
          Fill out the fields below to get started. Be sure to provide accurate
          information to help learners understand what your course offers.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Your Course Name"
          />
        </div>
        <div>
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Java" className="cursor-pointer">
                  Java
                </SelectItem>
                <SelectItem value="Next JS" className="cursor-pointer">
                  Next JS
                </SelectItem>
                <SelectItem value="Data Science" className="cursor-pointer">
                  Data Science
                </SelectItem>
                <SelectItem
                  value="Frontend Development"
                  className="cursor-pointer"
                >
                  Frontend Development
                </SelectItem>
                <SelectItem
                  value="FullStack Development"
                  className="cursor-pointer"
                >
                  FullStack Development
                </SelectItem>
                <SelectItem
                  value="MERN Stack Development"
                  className="cursor-pointer"
                >
                  MERN Stack Development
                </SelectItem>
                <SelectItem value="JavaScript" className="cursor-pointer">
                  JavaScript
                </SelectItem>
                <SelectItem value="HTML" className="cursor-pointer">
                  HTML
                </SelectItem>
                <SelectItem value="CSS" className="cursor-pointer">
                  CSS
                </SelectItem>
                <SelectItem value="React JS" className="cursor-pointer">
                  React JS
                </SelectItem>
                <SelectItem value="grapes" className="cursor-pointer">
                  Python
                </SelectItem>
                <SelectItem value="Python" className="cursor-pointer">
                  Doker
                </SelectItem>
                <SelectItem value="Mongo DB" className="cursor-pointer">
                  Mongo DB
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => navigete("/admin/course")}
            className="cursor-pointer"
          >
            Back
          </Button>
          <Button
            disabled={isLoading}
            onClick={createCourseHandlar}
            className="cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Plesae Wait...
              </>
            ) : (
              "Create"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
