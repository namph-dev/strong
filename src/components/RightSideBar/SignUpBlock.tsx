import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const SignUpBlock = () => {
  return (
    <Card className="py-[32px] bg-[#F8F8F8] rounded-[4px] border-0">
      <CardHeader>
        <CardTitle>Sign up for newsletter</CardTitle>
        <CardDescription className="mt-[16px]">
          Subscribe to my newsletter to receive new posts. Stay updated!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 rounded-md border px-3 py-2 text-sm outline-none ring-offset-white focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Sent
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignUpBlock;