import ChestProgression from "./components/ChestProgression"

export default function Home() {
  return (
    <>
      <div className="bg-white p-4">
        <h1 className="font-bold text-xl text-brandHeading">The Gains Lab Dashboard</h1>
      </div>
      <div className="flex justify-center">
        <ChestProgression title = "Incline Chest Press Machine" data = {[70, 70, 80, 90] } warning = "Incline Chest Press Machine progression didn't increase between weeks 1 and 2" succ = "You have increased 20 pounds in 4 weeks, keep up the great work!"/>
        <ChestProgression title = "Preacher Curl Machine" data = {[55, 60, 70, 70]} warning = "Preacher Curl Machine progression didn't increase between weeks 3 and 4" succ = "You have increased 15 pounds in 4 weeks, keep up the great work!" />
      </div>
      

      
    </>
  );
}
