import Course from "./Course";
import MyLearningSkeleton from "./MyLearningSkeleton";

const Mylearning = () => {
  const isLoading = false;
  const myLearnningCourses = [1, 2];
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearnningCourses.length == 0 ? (
          <p>You are not enrolled in any course</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2].map((course, index) => (
              <Course key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mylearning;
