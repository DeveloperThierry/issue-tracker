'use client'
import React from 'react'
import {TextField, TextArea, Button } from '@radix-ui/themes'
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

interface IssueForm{
    title:string,
    description:string
}
const NewIssuePage = () => {
    const SimpleMDE = dynamic(
        () => import('react-simplemde-editor'),
        { ssr: false }
    );
    const router = useRouter()
    const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        console.log(data)
        router.push('/issues');
    })}>
       <TextField.Root placeholder="Title" {...register('title')}>
	<TextField.Slot>
	</TextField.Slot>
</TextField.Root>
<Controller
    name="description"
    control={control}
    render={({field})=><SimpleMDE placeholder="Description" {...field}/>}
/>

<Button>Submit New Issue</Button>


    </form>
  )
}

export default NewIssuePage