import Link from "next/link";

const page = () => {
  return (
    <main className="main relative w-full h-screen ">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-image bg-[url(/images/BG.png)] bg-cover">
        <header className="relative">
          <div className="floating-navbar absolute left-1/2 transform -translate-x-1/2 flex items-center justify-between w-200 bg-[#ffffff40] backdrop-blur-xl rounded-full py-3 pl-2 pr-7 mt-4">
            <img src="/images/logo.png" alt="logo" className="h-10" />
            {/* <span className="fancy-text">Wizentia</span> */}
            <nav>
              <ul className="flex gap-10 text-white" legacyBehavior>
                <Link href="/quiz">
                  <li>Quiz</li>
                </Link>
                <Link href="/sign-in" legacyBehaviour>
                  <li>Sign in</li>
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </main>
  );
};

export default page;
