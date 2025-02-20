import { Details } from "@/components/Details";
import FloatingNav from "@/components/FloatingNav";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Advanced Encryption",
      description:
        "We use cutting-edge encryption to protect your identity and data.",
      image: "/logo1.png",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Track reports securely with instant updates and AI-driven insights.",
      image: "/logo2.svg",
    },
    {
      title: "24/7 Support",
      description:
        "Our cybersecurity experts are available anytime to assist you.",
      image: "/logo4.png",
    },
  ];
  
  return (
    <>
      <main className="relative overflow-hidden px-8 pt-32 bg-gradient-to-r from-zinc-900 via-zinc-950 to-[#03a340] min-h-screen text-gray-300">
        <Spotlight
          gradientFirst="radial-gradient(70% 70% at 30% 30%, hsla(50, 100%, 80%, .12) 0, hsla(50, 100%, 50%, .06) 50%, hsla(50, 100%, 30%, 0) 100%)"
          gradientSecond="radial-gradient(60% 60% at 70% 70%, hsla(120, 90%, 75%, .1) 0, hsla(120, 90%, 50%, .04) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(200, 100%, 85%, .08) 0, hsla(200, 100%, 50%, .03) 90%, transparent 100%)"
          translateY={-150}
          width={800}
          height={1200}
          smallWidth={300}
          duration={8}
          xOffset={120}
        />

        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm text-gray-100">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v2a3 3 0 11-6 0v-2m6 0H9"
                />
              </svg>
              Privacy First, Always
            </div>
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-200 sm:text-6xl lg:text-7xl">
              Stay Safe in the Digital World.
              <br />
              <span className="flex leading-[7rem] bg-gradient-to-r gap-5 from-green-400 to-blue-500 bg-clip-text text-transparent">
                <Cover className="bg-green-400">
                  Report Fearlessly, Stay Secure.
                </Cover>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Join thousands in making the internet safer. Report concerns
              securely and anonymously.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={"/submit-report"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-500"
              >
                Submit a Report
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href={"/learn-more"}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-500 px-6 py-3 text-sm font-medium text-gray-100 shadow-lg transition-transform hover:scale-105 hover:bg-gray-800"
              >
                Learn More
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="mt-20 grid gap-8 lg:grid-cols-3 justify-center items-center">
            {features.map((feature, i) => (
              <CardContainer key={i} className="inter-var">
                <CardBody className="bg-gradient-to-br from-cyan-500 via-[#009245] to-[#009245]  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-[25rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                  >
                    {feature.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {feature.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={feature.image}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-contain bg-[#ddfd] rounded-xl group-hover/card:shadow-xl"
                      alt={feature.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/submit-report"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      target="__blank"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      href="/learn-more"
                      target="__blank"
                    >
                      Learn More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </section>
        </div>
        <Details />
        <br />
        <FloatingNav />
      </main>
    </>
  );
}
