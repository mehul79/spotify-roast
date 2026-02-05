import Container from "@/components/container"
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen relative">
      <div className="h-screen w-full bg-blue-200 ">
        <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
          <div className="w-px bg-black absolute h-full left-20"/>
          <div className="w-px bg-black absolute h-full right-20"/>
        </div>
        <Container className="">
          <NavBar />
        </Container>
      </div>
    </div>
  );
}