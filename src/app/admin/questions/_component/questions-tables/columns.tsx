"use client";
import { Questions } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Questions>[] = [
  {
    accessorKey: 'index',
    header: 'S.No',
    cell: ({ row }) => {
      return <span>{row.index + 1}</span>;
    }
  },
  {
    accessorKey: "image_url",
    header: "IMAGE",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image_url") as string;
      return (
        <div className="relative aspect-square">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={row.getValue("text")}
              fill
              className="rounded-lg"
            />
          ) : (
            <span>No Image</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "text",
    header: "NAME",
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
  },
  {
    accessorKey: "options",
    header: "Options",
  },
  {
    accessorKey: "correctAnswer",
    header: "Correct Answer",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
