"use client";

import { useState } from "react";
import { Download, Loader2, AlertCircle } from "lucide-react";

interface SecureDownloadButtonProps {
  productSlug: string;
  productName: string;
  className?: string;
}

export default function SecureDownloadButton({
  productSlug,
  productName,
  className = "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",
}: SecureDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      // Call secure API endpoint
      const response = await fetch("/api/secure-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productSlug }),
      });

      const data = await response.json();

      // Check if request was successful
      if (!response.ok) {
        // Handle different error types
        if (response.status === 401) {
          window.location.href = "/login";
          return;
        }
        setError(data.error || "Download failed");
        setLoading(false);
        return;
      }

      // Redirect to Google Drive link
      if (data.downloadLink) {
        window.location.href = data.downloadLink;
      } else {
        setError("Download link not found");
      }

      setLoading(false);
    } catch (err) {
      console.error("[Download Button] Error:", err);
      setError("Network error - please try again");
      setLoading(false);
    }
  };

  // Error state
  if (error) {
    return (
      <button
        disabled
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 cursor-not-allowed"
        title={error}
      >
        <AlertCircle className="h-4 w-4" />
        {error}
      </button>
    );
  }

  // Loading state
  if (loading) {
    return (
      <button
        disabled
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white opacity-75 cursor-wait"
      >
        <Loader2 className="h-4 w-4 animate-spin" />
        Preparing...
      </button>
    );
  }

  // Normal state
  return (
    <button
      onClick={handleDownload}
      className={className}
      title={`Download ${productName}`}
    >
      <Download className="h-4 w-4" />
      Download
    </button>
  );
}