"use client";

import { useActionState } from "react";
import { Button, Form, TextField, Label, Input, FieldError, Spinner } from "@heroui/react";
import { login } from "../actions/auth";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(login, { error: "" });

  return (
    <div className="flex flex-col min-h-full items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Save+</h1>
          <p className="text-neutral-500 text-sm">Enter your password to continue</p>
        </div>

        {/* Form */}
        <Form action={action} className="flex flex-col gap-4">
          <TextField name="password" type="password" isRequired className="w-full">
            <Label className="text-sm font-medium text-neutral-300 mb-1.5 block">
              Password
            </Label>
            <Input
              placeholder="••••••••"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
            />
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

          {state?.error && (
            <p className="text-xs text-red-400 -mt-1">{state.error}</p>
          )}

          <Button
            type="submit"
            isPending={isPending}
            fullWidth
            className="bg-white text-black font-semibold rounded-xl py-3 mt-2 hover:bg-neutral-200 transition-colors"
          >
            {({ isPending }) =>
              isPending ? (
                <>
                  <Spinner color="current" size="sm" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )
            }
          </Button>
        </Form>
      </div>
    </div>
  );
}
