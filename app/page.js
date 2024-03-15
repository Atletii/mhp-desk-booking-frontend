import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  return (
    <>
      <header>
        <p>header</p>
      </header>
      <main>
        <div className="flex p-2">
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
