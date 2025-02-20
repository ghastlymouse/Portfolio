"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return alert("다시 시도해주세요!");
    if (!email.trim()) return alert("E-mail을 입력해주세요!");
    if (!title.trim()) return alert("제목을 입력해주세요!");
    if (!message.trim()) return alert("내용을 입력해주세요!");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("성공!");
          alert("메시지를 성공적으로 보냈습니다!");
        },
        (error) => {
          console.log("실패", error.text);
          alert("에러가 발생했습니다 다시 시도해주세요.");
        }
      );
  };

  return (
    <section className="flex flex-col items-center mb-40 text-lg">
      <h1 className="text-7xl lg:text-9xl mt-20">CONTACT</h1>
      <div className="flex flex-col lg:flex-row bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-3/4 p-4">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <p className="sm:text-base md:text-xl lg:text-3xl">
            gusdnr0839@gmail.com
          </p>
          <Image
            src={"/ghastly_mouse_2D.svg"}
            alt="ghastly_mouse"
            width={400}
            height={300}
          />
        </div>
        <form
          ref={form}
          onSubmit={handleSubmitEmail}
          className="w-full lg:w-1/2 flex flex-col items-start gap-4 bg-gray-300 rounded-lg p-4"
        >
          <input
            id="email"
            name="from_name"
            type="text"
            placeholder="Your E-mail Address.."
            className="w-full px-2 py-4 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title.."
            className="w-full px-2 py-4 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Feel free to leave a message.."
            className="w-full p-2 rounded-lg h-[200px] resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Send!"
            className="cursor-pointer w-full rounded-lg p-2 bg-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
