import React from "react";
import Head from "next/head";

function Header() {
  return (
    <>
      <Head>
        <title>Community Feed</title>+{" "}
        <meta
          name="description"
          content="This is a
 Community Feed project build with React"
        />
      </Head>
      <div className=" bg-gray-800">
        <h1 className="text-center p-4 font-bold text-4xl antialiased md:subpixel-antialiased ">
          Community Feeds
        </h1>
      </div>
    </>
  );
}

export default Header;
