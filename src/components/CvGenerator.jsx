import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function CvGenerator() {
  const { userData, setUserData } = useContext(UserContext);
  const [cvData, setCvData] = useState(userData.cvData || {
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
  });

  useEffect(() => {
    setUserData((prev) => ({ ...prev
