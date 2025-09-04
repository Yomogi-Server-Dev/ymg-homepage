import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
  variant?: "default" | "minimal";
}

export function ErrorMessage({
  title = "エラーが発生しました",
  message,
  onRetry,
  className,
  variant = "default",
}: ErrorMessageProps) {
  if (variant === "minimal") {
    return (
      <div
        className={cn("flex items-center space-x-2 text-red-600", className)}
      >
        <AlertCircle className="w-4 h-4" />
        <span className="text-sm">{message}</span>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="text-blue-600 hover:text-blue-800 text-sm underline"
          >
            再試行
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-red-200 bg-red-50 p-4",
        className,
      )}
    >
      <div className="flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <p className="mt-1 text-sm text-red-700">{message}</p>
          {onRetry && (
            <div className="mt-3">
              <Button
                onClick={onRetry}
                variant="outline"
                size="sm"
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                再試行
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
