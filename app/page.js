import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import SvgMap from "@/components/map/SvgMap";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  return (
    <>
      <header>
        <p>header</p>
      </header>
      <main>
        <div className="flex mx-4 mb-4 p-8 shadow-lg items-center justify-center rounded">
          <SvgMap />
        </div>
        <div className="flex mx-4">
          <div className="w-2/3 p-4 shadow-lg">
            <DataTableDemo />
          </div>
          <div className="w-1/3 p-4 shadow-lg">
            <div className="flex flex-col">
              <Calendar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
