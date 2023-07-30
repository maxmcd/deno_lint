import { Header } from "../components/Header.tsx";
import { CommonHead } from "../components/CommonHead.tsx";
import Playground from "../islands/Playground.tsx";

export default function PlaygroundPage() {
  return (
    <div class="py-6 h-screen">
      <div class="flex flex-col mx-auto max-w-screen-md px-6 sm:px-6 md:px-8 h-full">
        <CommonHead />
        <Header />
        <div class="flex-1">
          <Playground />
        </div>
      </div>
    </div>
  );
}