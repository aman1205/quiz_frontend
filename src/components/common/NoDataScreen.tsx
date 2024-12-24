import { Button } from "../ui/button";

const NoDataScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]  bg-gray-100">
      <div
        className="flex flex-col items-center"
      >
        <img
          src="/nodata.svg"
          alt="No Data Illustration"
          className="w-64 h-64 mb-6"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No Data Available
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          It looks like there's nothing to display here. You can try again later or explore other options.
        </p>

        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NoDataScreen;
