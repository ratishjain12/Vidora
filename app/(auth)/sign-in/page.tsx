"use client";
import { authClient } from "@/lib/auth/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Vidora</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              Vidora makes sharing my creative journey a breeze. The
              platform&apos;s intuitive interface and powerful features have
              transformed how I showcase my work and connect with my audience.
            </p>

            <article>
              <Image
                src="/assets/images/jason.png"
                alt="emily"
                width={64}
                height={64}
                className="rounded-full aspect-square"
              />
              <div>
                <h2>Jason Rivera</h2>
                <p>Product Designer</p>
              </div>
            </article>
          </section>
        </div>
        <p> Vidora {new Date().getFullYear()} | All rights reserved</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>Vidora</h1>
          </Link>
          <p>
            Create and share your very first <span>Vidora</span> in no time
          </p>
          <button onClick={() => handleSignIn()}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
    </main>
  );
};

export default page;
