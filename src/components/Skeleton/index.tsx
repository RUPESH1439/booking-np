interface ISkeleton {
  type?: 'rectangle' | 'circle';
  width?: number | string;
  height?: number | string;
}

export const Skeleton = ({
  type = 'rectangle',
  width = 50,
  height = 50,
}: ISkeleton) => {
  return (
    <div className="animate-pulse">
      <div
        className={`bg-gray-500 dark:bg-gray-800]`}
        style={{ height, width }}
      ></div>
    </div>
  );
};
