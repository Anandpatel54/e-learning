import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateLectureMutation, useGetCourseLectureQuery } from "@/features/api/lectureApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CreateLecture = () => {
  const [lectureTitle, setLectureTitle] = useState("");
  const params = useParams();
  const courseId = params.courseId;
  const navigate = useNavigate();

  const [createLecture, { data, isLoading, error, isSuccess }] =
    useCreateLectureMutation();

    const {data:lectureData, isLoading:lectureLoading, } = useGetCourseLectureQuery(courseId)

  const createLectureHandlar = async () => {
    await createLecture({ lectureTitle, courseId });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }
    if (error) {
      toast.error(error.data.message);
    }
  }, [isSuccess, error]);
  console.log(lectureData)

  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <h1 className="font-bold text-lg">
          Let's add lecture, add some basic details for your new lecture
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
            value={lectureTitle}
            onChange={(e) => 
            placeholder="Your Title Name"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => navigate(`/admin/course/${courseId}`)}
            className="cursor-pointer"
          >
            Back to Course
          </Button>
          <Button
            disabled={isLoading}
            onClick={createLectureHandlar}
            className="cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Plesae Wait...
              </>
            ) : (
              "Create Lecture"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLecture;
