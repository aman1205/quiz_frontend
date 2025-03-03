import { Checkbox } from '@/components/ui/checkbox';
import { Quiz } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const Columns:ColumnDef<Quiz>[]=[
    {
        id:'select',
    },
    {
        accessorKey:'title',
        header:'Title'
    },
    {
        accessorKey:'questions',
        header:''
    },
    {
        accessorKey:'',
        header:''
    },
    {
        accessorKey:'',
        header:''
    },
    {
        accessorKey:'',
        header:''
    },
]