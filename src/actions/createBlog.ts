"use server";

import { redirect } from "next/navigation";

export const createBlog = async (formData: FormData) => {
  const formDataObj = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObj),
  });
  const resInfo = await res.json();
  if (resInfo) {
    redirect(`/blogs/${resInfo.id}`);
  }
  return resInfo;
};
