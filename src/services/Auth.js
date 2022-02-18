import React from "react";
import { httpPostRequest } from "@helper";

export  const login = (data) =>  {
    return httpPostRequest('login', data);
}