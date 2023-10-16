import { UniqueIdentifier } from "@dnd-kit/core";

interface IEntryContainer {
  id: UniqueIdentifier;
  title: string;
  totalHours?: number;
  children?: React.ReactNode;
  items?: IEntry[];
}

interface IEntry {
  id: UniqueIdentifier;
  // entryContainerId: UniqueIdentifier;
  title: string;
  hours: number;
}

interface IDragAndDropKitContainer {
  id: UniqueIdentifier;
  title: string;
  totalHours?: number;
  items: IDragAndDropKitItem[];
}

interface IDragAndDropKitItem {
  id: UniqueIdentifier;
  title: string;
  hours: number;
}

export type {
  IEntryContainer,
  IEntry,
  IDragAndDropKitContainer,
  IDragAndDropKitItem,
}
