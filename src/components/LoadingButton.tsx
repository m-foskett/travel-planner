import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

interface LoadingButtonProps {
    buttonText: string;
}

export function LoadingButton({buttonText,}: LoadingButtonProps) {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {buttonText}
    </Button>
  )
}
