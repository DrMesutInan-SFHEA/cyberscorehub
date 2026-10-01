"use client";

import { useRouter } from "next/navigation";

type StartAssessmentButtonProps = {
  label?: string;
  className?: string;
};

export default function StartAssessmentButton({
  label = "Start Free Check",
  className = "",
}: StartAssessmentButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push("/assessment");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {label}
    </button>
  );
}