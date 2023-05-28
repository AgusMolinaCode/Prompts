'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";


const Nav = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 px-2 md:px-20 pt-3">

      <div className="flex gap-2 items-center">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
        src="/assets/images/logo.png" 
        width={50} 
        height={50} 
        alt="logo"
        className="object-contain hidden md:block"
        />
        <p className="logo_text text-primary">Propmt-Arg</p>
      </Link>
      <ThemeToggle />
      </div>

      

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn bg-button">
              Crear Prompt
            </Link>
            <button
              type="button"
              className="black_btn bg-button"
              onClick={signOut}
            >
              Log Out
            </button>

            <Link href='/profile'>
              <Image 
              src={session?.user.image}
              width={30}
              height={30}
              alt="profile"
              className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && 
            Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  className="black_btn bg-button"
                  onClick={() => signIn(provider.id)}
                >
                  Iniciar con {provider.name}
                </button>
   
            ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
          <Image
            src={session?.user.image}
              width={30}
              height={30}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
          />  

          {toggleDropDown && (
            <div className="dropdown">
              <Link 
                href="/profile" 
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}
                >
                My Profile
              </Link>
              <Link 
                href="/create-prompt" 
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}
                >
                Create Prompt
              </Link>
              <button
                type="button"
                className="mt-5 w-full black_btn bg-primary"
                onClick={() => {
                  setToggleDropDown(false); 
                  signOut();}}
              >
                Sign Out
              </button>

            </div>
          )}
          </div>
        ) : (
          <>
            {providers && 
            Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  className="black_btn bg-button"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
   
            ))}
          </>
        )}

      </div>

    </nav>
  );
};

export default Nav;
