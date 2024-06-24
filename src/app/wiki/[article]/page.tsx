"use client";
import { useState } from "react";

const WikiArticle: React.FC = (props) => {
  useState(() => {
    console.log("props", props);
  });

  return <div>props</div>;
};

export default WikiArticle;
