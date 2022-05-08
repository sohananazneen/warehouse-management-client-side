import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:4000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add Inventory Item </h2>
            <form className='d-flex flex-column border border-success rounded-pill p-5 my-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />

                <textarea className='mb-2' placeholder='Description' {...register("description")} />

                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />

                <input className='btn btn-success' type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddItem;