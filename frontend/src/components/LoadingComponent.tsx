export function LoadingComponent({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-sm text-gray-700">{message}</p>
    </div>
  );
}
