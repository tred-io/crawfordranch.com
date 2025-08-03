import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { insertContactInquirySchema } from "@shared/schema";
import { RopeIcon, StarIcon } from "@/components/icons/ranch-icons";

const formSchema = insertContactInquirySchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  eventType: z.string().optional(),
  preferredDate: z.string().optional(),
  guestCount: z.number().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      preferredDate: "",
      guestCount: undefined,
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const eventTypes = [
    "Wedding",
    "Corporate Retreat",
    "Christian Retreat",
    "Family Reunion",
    "Bachelor/Bachelorette Party",
    "Hunting Trip",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-ranch-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Plan Your Visit</h1>
              <div className="flex items-center justify-center mb-6">
                <RopeIcon className="text-warm-gray h-4 w-24" />
                <StarIcon className="text-texas-red h-6 w-6 mx-4" />
                <RopeIcon className="text-warm-gray h-4 w-24" />
              </div>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Ready to experience all that Crawford Ranch has to offer? Get in touch with us to start planning your event or visit.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="bg-white shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair font-semibold text-ranch-brown">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-texas-red h-5 w-5" />
                      <span className="text-warm-gray">Lampasas County, Central Texas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-texas-red h-5 w-5" />
                      <span className="text-warm-gray">(512) 555-RANCH</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-texas-red h-5 w-5" />
                      <span className="text-warm-gray">info@crawfordranch.com</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair font-semibold text-ranch-brown">
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-warm-gray">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>7:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair font-semibold text-ranch-brown">
                    Request Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(512) 555-0123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an event type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {eventTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="guestCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Guest Count</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="50" 
                                  {...field}
                                  onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4}
                                placeholder="Tell us about your event or any specific questions you have..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-texas-red hover:bg-texas-red-light text-white py-3 px-6 text-lg font-semibold"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}