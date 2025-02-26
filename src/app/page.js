import NavLink from "@/components/NavLink";
import ReviewCard from "@/components/ReviewCard";
import Header from "@/components/header";

export default function Home() {
  return(
    <main className="flex flex-col min-h-screen">
      <Header/>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4 fraiche text-7xl font-bold">Study Smarter, Plan Better</p>
        <NavLink text="Get Started!" isButton={true} extra="mt-4 px-12 py-4 text-2xl"/>
      </div>

      {/* Review Section */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-4 fraiche text-7xl font-bold">What others say...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"> {/* TODO: backend part */}
          <ReviewCard user={"User-10232344"} comment={"Ang ganda mo palagi"} star={5}/>
          <ReviewCard user={"User-20339423"} comment={"Ang laki ng deck"} star={4}/>
          <ReviewCard user={"User-10129232"} comment={"I like this app!"} star={5}/>
          <ReviewCard user={"User-22032322"} comment={"Miss ko na siya"} star={2}/>
          <ReviewCard user={"User-19816542"} comment={"Galing naman, pero di ko bet hahaha"} star={3}/>
        </div>
      </div>

      {/* Other Feature Section */}
      <div className="min-h-screen w-full flex flex-col items-center justify-evenly px-20">
        <p className="fraiche text-7xl font-bold text-center">Deck comes with AI!</p>
        <div className="my-12 w-full flex flex-col justify-start items-start">
          <p className="text-[#494949] text-3xl font-semibold">Make a Deck, with just one click!</p>
          <p className="text-[#494949] text-lg ">Deck can make your ideas into knowledge, with just one click of a button.</p>
          <NavLink text="Generate AI Flashcards" isButton={true} extra="px-8 py-3 mt-6 text-2xl rounded-full bg-[#113A3A] text-white"/>
        </div>
      </div>
      <div className="min-h-screen w-full flex flex-col items-center justify-evenly px-20">
        <p className="fraiche text-7xl font-bold text-center">Plan your tasks!</p>
        <div className="my-12 w-full flex flex-col justify-start items-start">
          <p className="text-[#494949] text-3xl font-semibold">Schedule ahead — no tasks delayed!</p>
          <p className="text-[#494949] text-lg ">Create your own to-do list and make your own tracker, and master the art of NOT cramming.</p>
          <NavLink text="Add Task" isButton={true} extra="px-8 py-3 mt-6 text-2xl rounded-full bg-[#113A3A] text-white"/>
        </div>
      </div>
    </main>
  );
}
