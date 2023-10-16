import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IEntry } from "@/types";
import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import EntryOptions from "./entry-options";

const Entry = ({ id, title }: IEntry) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={cn(
        "p-2 bg-background rounded w-full",
        "border border-gray-100 hover:border-gray-200 cursor-pointer",
        "group",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-md font-bold">{title}</div>
          <div className="text-sm">Exploring IA</div>
        </div>
        {/* <Button variant='outline' size='icon' className="hidden group-hover:flex">
          <MoreVertical className="w-4 h-4" />
        </Button> */}
        <EntryOptions />
      </div>
      <div className="flex items-center justify-between">
        <Badge>ABC-123</Badge>
        <div className="text-sm font-bold">1h</div>
      </div>
    </div>
  );
};

export default Entry;
