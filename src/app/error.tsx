"use client";
import Box from "@/components/atoms/box";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box className="flex flex-col gap-5 mt-10 items-center">
      <Box variant="h2">Something went wrong!</Box>
      <Button
        className="w-fit"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
