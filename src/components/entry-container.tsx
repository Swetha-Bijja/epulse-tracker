import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { IEntryContainer } from "@/types";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";
// import { GripVertical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const EntryContainer = ({
  id,
  children,
  title,
  totalHours,
}: IEntryContainer) => {
  const { attributes, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: id,
      data: {
        type: "container",
      },
    });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={cn(
        "w-full h-full p-2 bg-primary-50",
        "flex flex-col gap-y-2",
        "border border-collapse",
        "bg-slate-50 hover:bg-slate-100",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-primary text-md font-bold">{title}</span>
          <span className="text-primary text-md font-bold">
            {totalHours}h of 8h
          </span>
        </div>
        <Progress
          value={Math.round(((totalHours ?? 0) / 8) * 100)}
          className="h-2 bg-gray-300"
        />
      </div>
      {children}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full border-2 border-dashed",
              "hover:bg-foreground hover:text-background hover:border-none"
            )}
          >
            Log Time
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Time</DialogTitle>
            {/* <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Task</Label>
              <Input id="name" defaultValue="ABC-123" className="col-span-3" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Task Description</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EntryContainer;
