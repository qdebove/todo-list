type BottomSnackbarWrapperProps = {
  children: any;
};

export default function BottomSnackbarWrapper({
  children,
}: BottomSnackbarWrapperProps) {
  return (
    <div className="transition transform fixed left-1/2 -translate-x-1/2 z-50 bottom-0 pb-4 opacity-100 scale-100 translate-y-0 ease-out duration-500 mx-4">
      {children}
    </div>
  );
}
