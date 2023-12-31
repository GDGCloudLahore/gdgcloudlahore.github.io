"use client";

import React, { useState } from "react";

// Components
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Newsletter = ({ className = "" }) => {
  const [email, setEmail] = useState();

  return (
    <div
      className={`${className} w-full flex flex-col sm:flex-row justify-center items-center gap-[8px]`}
    >
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        fieldClassName="bg-[#f7f7f7]"
        className="flex-1 w-full sm:w-auto"
      />
      <Button
        variant="warning"
        size="small"
        className="sm:max-w-[140px] uppercase font-semibold"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default Newsletter;
