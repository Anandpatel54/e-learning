import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateLecture = () => {
  const isLoading = false;
  const navigate = useNavigate()
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

export default CreateLecture;
