import { Button } from "@/components/ui/button";

export default function Stocks() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Stocks</h1>
      </div>

      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Today&apos;s Stock
          </h3>
          <p className="text-sm text-muted-foreground">
            Make sure to update the stock each day.
          </p>
          <Button className="mt-4">Update Stock</Button>
        </div>
      </div>
    </main>
  );
}
