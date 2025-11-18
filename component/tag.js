export default ({text})=> {
  return (
    <div className="relative inline-block w-fit mb-2">
      {/* Main text box */}
      <div className="bg-zinc-100 dark:bg-zinc-500 text-primary text-md font-medium px-6 py-2 rounded-md">
        {text}
      </div>

      {/* Four corner dots */}
      <span className="absolute top-0 left-0 w-2 h-2 bg-gray-200 dark:bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute top-0 right-0 w-2 h-2 bg-gray-200 dark:bg-gray-500 rounded-full translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 bg-gray-200 dark:bg-gray-500 rounded-full -translate-x-1/2 translate-y-1/2"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 bg-gray-200 dark:bg-gray-500 rounded-full translate-x-1/2 translate-y-1/2"></span>
    </div>
  );
}
