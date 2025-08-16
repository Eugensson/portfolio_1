"use client";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <form className="flex flex-col items-start gap-6">
      <div className="w-full flex gap-6">
        <div className="flex-1">
          <Label htmlFor="firstname">
            Firstname <span className="text-accent">*</span>
          </Label>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First name"
            required
            autoComplete="off"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="lastname">
            Lastname <span className="text-accent">*</span>
          </Label>
          <Input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last name"
            required
            autoComplete="off"
          />
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="email">
          Email <span className="text-accent">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          required
          autoComplete="off"
        />
      </div>
      <div className="w-full">
        <Label htmlFor="service">
          I&apos;m interested in
          <span className="text-accent">*</span>
        </Label>
        <Select name="service" required>
          <SelectTrigger
            id="service"
            className="w-full !h-12 bg-white/5 border-white/10 px-4"
          >
            <SelectValue placeholder="Choose here" />
          </SelectTrigger>
          <SelectContent className="bg-black border-white/20">
            <SelectItem value="webdev">Web Development</SelectItem>
            <SelectItem value="uiux">UI & UX Design</SelectItem>
            <SelectItem value="logo">Logo Design</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <Label htmlFor="message">
          Message
          <span className="text-accent">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          required
          autoComplete="off"
          className="min-h-40 bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent resize-none p-4 selection:bg-accent placeholder:text-white/50"
        />
      </div>
      <button
        type="button"
        className="btn btn-lg btn-accent"
        aria-label="Send message"
      >
        <div className="flex items-center gap-3">
          <span className="font-medium">Send message</span>
          <HiOutlineArrowLongRight className="text-xl" />
        </div>
      </button>
    </form>
  );
};
