import Image from "next/image";

export default function Home() {
  const communities = [
    { name: "GitHub", url: "https://github.com/" },
    { name: "Frontend Mentor", url: "https://www.frontendmentor.io/challenges" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "Twitter", url: "https://www.twitter.com" },
    { name: "Instagram", url: "https://www.instagram.com" },
  ];

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="h-min w-min rounded-xl grid justify-center items-center text-center p-6 space-y-7 font-bold bg-custgrey800  text-white">
        <div className="flex justify-center">
          <Image
            src="/assets/images/avatar-jessica.jpeg"
            alt="avatar-jessica"
            height={85} width={85}
            className="rounded-full"
          ></Image>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-normal">Jessica Randall</h1>
          <p className="text-custlime">London, United Kingdom</p>
        </div>

        <p className="font-thin">&quot;Front-end developer and avid reader.&quot;</p>

        <div className="grid w-72 space-y-4">
          {
            communities.map((community, index) => (
              <a
                key={index}
                href={community.url}
                target="_blank"
                className="rounded-xl py-3 bg-custgrey700 hover:bg-custlime hover:text-custgrey800 transition-colors duration-200">
                {community.name}
              </a>
            ))
          }
        </div>
      </div>

      <footer className="text-center font-thin text-gray-300">
        Challenge by &nbsp;
        <a
          href="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ"
          target="_blank"
          className="font-bold">
          Frontend Mentor
        </a>.
        Coded by Joan.
      </footer>
    </div>
  );
}
