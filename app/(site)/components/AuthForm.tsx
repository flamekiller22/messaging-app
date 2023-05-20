'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN')
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    watch
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // Axios Register
    }

    if (variant === 'LOGIN') {
      // NextAuth Sign In
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  }

  return (
    <div className="mx-2">
      <div
        className="
          mt-8
          sm:mx-auto
          sm:w-full
          sm:max-w-md
        "
      >
        <div
          className="
            bg-white
            dark:bg-gray-900
            px-4
            py-8
            shadow
            rounded-md
            sm:rounded-lg
            sm:px-10
          "
        >
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            { variant === 'REGISTER' && (
              <Input 
                id="name"
                label="Name"
                register={register}
                required={true}
                minLength={4}
                maxLength={40}
                errors={errors}
              />
            )}
            <Input 
              id="email"
              label="Email Address"
              type="email"
              register={register}
              required={true}
              maxLength={40}
              pattern={/^\S+@\S+\.\S+$/i}
              errors={errors}
            />
            <Input 
              id="password"
              label="Password"
              type="password"
              register={register}
              required={true}
              minLength={8}
              maxLength={64}
              errors={errors}
            />
            { variant === 'REGISTER' && (
              <Input 
                id="passwordRepeat"
                label="Re-enter Password"
                type="password"
                register={register}
                required={true}
                validate={(val: string) => {
                  if (watch('password') != val) {
                    return "Your passwords do no match";
                  }
                }}
                errors={errors}
              />
            )}
            <div>
              <Button
                disabled={isLoading}
                fullWidth
                type="submit"
              >
                {variant === 'LOGIN' ? 'Sign In' : 'Register'}
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                "
              >
                <div
                  className="
                    w-full
                    border-t
                    border-gray-300
                  "
                />
              </div>
              <div 
                className="
                  relative
                  flex
                  justify-center
                  text-sm
                "
              >
                <span 
                  className="
                    bg-white
                    dark:bg-gray-900 
                    px-2
                    text-gray-400
                    dark:text-gray-300
                  "
                >
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>

          <div className="
            flex
            gap-2
            justify-center
            text-sm
            mt-6
            px-2
            text-gray-400
          ">
            <div>
              {variant === 'LOGIN' ? 'New to FlameChat?' : 'Already have an account?'}
            </div>
            <div
              onClick={toggleVariant}
              className="underline cursor-pointer"
            >
              {variant === 'LOGIN' ? 'Create an account': 'Log in'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
