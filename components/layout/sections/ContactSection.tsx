import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ContactForm = () => {
  return (
    <section className="body-font relative">
      <div className="container">
        <div className='text-center flex flex-col gap-3 mb-5'>
          <p className="text-5xl font-extrabold">
            Connect With Us.
          </p>
          <p>
            we are always looking for new opportunities to collaborate with talented people.
          </p>
        </div>
        <Card className="max-w-[500px] rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-lg mb-1 font-medium">
            Get a quote
          </h2>
          <p className="leading-relaxed mb-5">
            Explore our delicious selection of spices foods and get a personalized
            quote for your order.
          </p>
          <div className="relative mb-4">
            <Label htmlFor="email" className="leading-7 text-sm">
              Email
            </Label>
            <Input />
          </div>
          <div className="relative mb-4">
            <Label htmlFor="message" className="leading-7 text-sm">
              Message
            </Label>
            <Textarea />
          </div>
          <Button className="text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
            Send Enquiry
          </Button>
          <p className="text-xs text-gray-500 mt-3">
            You&apos;ll immediately receive a reply once we update the status of your enquiry.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;