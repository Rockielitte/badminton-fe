"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { SignInServer } from "@/utils/serverActions/index";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "sign-in" | "sign-up";
}

const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
    username: z.string().min(0).max(10).optional(),
    passwordConfirm: z.string().min(3).max(20),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });
const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;
type SignInSchemaType = z.infer<typeof SignInSchema>;
export function UserAuthForm({
  className,
  type = "sign-up",
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchemaType | SignInSchemaType>({
    resolver: zodResolver(type === "sign-up" ? SignUpSchema : SignInSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<SignUpSchemaType | SignInSchemaType> = async (
    data
  ) => {
    await SignInServer(data).then(
      (
        res:
          | { error: string; success?: undefined }
          | { success: string; error?: undefined }
      ) => {
        if (res?.error) {
          reset();
          // setError(data?.error);
        }

        if (res?.success) {
          reset();
          // setSuccess(data?.success);
        }
      }
    );
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label
              className={cn(
                "flex items-center justify-start gap-1",
                errors.email && "text-destructive"
              )}
              htmlFor="email"
            >
              <span>Email</span>
              <span className="font-medium text-destructive">*</span>
            </Label>
            <Input
              {...register("email")}
              id="email"
              className={cn(
                errors.email &&
                  "ring-offset-destructive  focus-visible:ring-0 border-destructive  text-destructive"
              )}
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="text-xs capitalize text-destructive">
                {errors.email?.message}
              </span>
            )}
          </div>
          {type === "sign-up" && (
            <div className="grid gap-2">
              <Label
                className={cn(
                  "flex items-center justify-start gap-1",
                  errors?.username && "text-destructive"
                )}
                htmlFor="username"
              >
                <span>Username</span>
                <span className="font-medium ">(Optional)</span>
              </Label>
              <Input
                {...register("username")}
                id="username"
                placeholder="username"
                type="text"
                disabled={isSubmitting}
                className={cn(
                  errors.username &&
                    "ring-offset-destructive  focus-visible:ring-0 border-destructive  text-destructive"
                )}
              />
              {errors.username && (
                <span className="text-xs capitalize text-destructive">
                  {errors.username?.message}
                </span>
              )}
            </div>
          )}
          <div className="grid gap-2">
            <Label
              className={cn(
                "flex items-center justify-start gap-1",
                errors.password && "text-destructive"
              )}
              htmlFor="password"
            >
              <span>Password</span>
              <span className="font-medium text-red-500">*</span>
            </Label>
            <Input
              {...register("password")}
              id="password"
              placeholder="Password"
              className={cn(
                errors.password &&
                  "ring-offset-destructive  focus-visible:ring-0 border-destructive  text-destructive"
              )}
              type="password"
              disabled={isSubmitting}
            />
            {errors.password && (
              <span className="text-xs capitalize text-destructive">
                {errors.password?.message}
              </span>
            )}
          </div>
          {type === "sign-up" && (
            <div className="grid gap-2">
              <Label
                className={cn(
                  "flex items-center justify-start gap-1",
                  errors.passwordConfirm && "text-destructive"
                )}
                htmlFor="passwordConfirm"
              >
                <span>Password Confirmation</span>
                <span className="font-medium text-red-500">*</span>
              </Label>
              <Input
                {...register("passwordConfirm")}
                className={cn(
                  errors.passwordConfirm &&
                    "ring-offset-destructive  focus-visible:ring-0 border-destructive  text-destructive"
                )}
                id="passwordConfirm"
                placeholder="Confirm your password"
                type="password"
              />
              {errors.passwordConfirm && (
                <span className="text-xs capitalize text-destructive">
                  {errors.passwordConfirm?.message}
                </span>
              )}
            </div>
          )}

          <Button
            variant="default"
            className="mt-2 "
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            {type === "sign-up" ? "Create your account" : "Sign in"}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        {isSubmitting ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 size-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  );
}
