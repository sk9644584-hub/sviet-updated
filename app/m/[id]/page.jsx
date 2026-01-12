"use client";
import React from "react";

const Page = ({ params }) => {
    const id = params.id;
    return (
        <div className="w-full h-screen">
            <iframe
                src={`https://static.shubhampf.cloud/${id}`}
                className="w-full h-full border-none"
            />
        </div>
    );
};

export default Page;

