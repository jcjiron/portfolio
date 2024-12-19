import React, { useState } from 'react'
import { Button } from './Button'
import Input from './Input'
import TextArea from './TextArea'
import { postForm } from '../helpers/form'

export const ContactForm = () => {
    const [formValue, setFormValue] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            postForm(formValue);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex-1 rounded-29xl bg-gray-100 overflow-hidden flex flex-col items-start justify-center p-12 box-border gap-[24px] min-w-[280px] max-w-full mq750:py-[31px] mq750:px-6 mq750:box-border">
            <Input label="Name" textContainerPlaceholder="Your Name" type="text" name="name" value={formValue.name} onChange={handleChange} />
            <Input label="Email" textContainerPlaceholder="Your Email" type="email" name="email" value={formValue.email} onChange={handleChange} />
            <TextArea label="Message" textContainerPlaceholder="Your Message" name="message" className='h-[174px]' value={formValue.message} onChange={handleChange} >
                Your Message
            </TextArea>
            <Button type='submit'>
                Send
            </Button>
        </form>
    )
}
