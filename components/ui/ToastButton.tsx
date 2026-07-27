import { useToast } from "@/components/ui/ToastProvider";

export function ToastButton({
  label,
  message,
  className = "btn-gold",
}: {
  label: string;
  message: string;
  className?: string;
}) {
  const { showToast } = useToast();
  return (
    <button className={className} onClick={() => showToast(message)}>
      {label}
    </button>
  );
}
