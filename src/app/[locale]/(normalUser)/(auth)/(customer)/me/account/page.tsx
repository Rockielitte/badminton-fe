import { AccountAutoForm } from "@/components/Account/AccountForm";
import { Separator } from "@/components/ui/separator";

export default function SettingsAccountPage() {
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <div className="flex-1 ">
        <AccountAutoForm />
      </div>
    </div>
  );
}
