import Input from "@/components/input"
import UnderlineButton from "@/components/underlineButton"
import GoogleLogoIcon from "@/components/googleLogo"
import { useCallback, useState } from "react"


const Auth = () => {

  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, []);

  return (
    <div className="flex w-full h-screen bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500">
      <div className='w-full flex items-center justify-center'>
        <div className="bg-purple-50 px-14 py-10 lg:rounded-lg rounded-none border-2 border-gray-200">
          <h2 className="font-bold text-3xl">
            {variant === 'login' ? 'Login' : 'Sign Up'}
          </h2>
          <Input label="Email" placeHolder="Enter your email" />
          <Input label="Password" placeHolder="Enter your password" />
          {
            variant === 'register' && (
              <Input label="Confirm Password" placeHolder="Repeat your password" />
            )
          }
          {
            variant === 'login' && (
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <input type="checkbox" id="remember" />
                  <label className="ml-2 font-medium">Remember me</label>
                </div>
                <UnderlineButton clickAction="" buttonValue="Forgot password" />
              </div>
            )
          }

          <div className="mt-8 flex flex-col gap-y-4">
            <button className="active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-lg bg-violet-500 text-white text-lg font-semibold">
              {
                variant === 'login' ? 'Sign In' : 'Sign Up'
              }
            </button>
            <button className="flex border-2 border-gray-200 items-center justify-center active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-lg">
              <GoogleLogoIcon />
              {
                variant === 'login' ? 'Sign in with Google' : 'Sign up with Google'
              }
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <p className="font-medium text-base mr-2">
              {
                variant === 'login' ? "Don't have an account?" : 'Already have an account?'
              }
            </p>
            <UnderlineButton clickAction={toggleVariant} buttonValue={
              variant === 'login' ? "Sign up" : 'Create new'
            } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth