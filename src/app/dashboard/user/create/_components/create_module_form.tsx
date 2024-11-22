"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { CreateModuleSchema } from "~/server/validator/module";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";

const CreateModuleForm = () => {
  const form = useForm<z.infer<typeof CreateModuleSchema>>({
    resolver: zodResolver(CreateModuleSchema),
    defaultValues: {
      name: "",
      phase: "",
    },
  });

  function onSubmit(values: z.infer<typeof CreateModuleSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-[600px] mx-auto">
      <div></div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Module Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Module name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your module name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phase</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select phase" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A">
                        A
                      </SelectItem>
                      <SelectItem value="B">
                        B
                      </SelectItem>
                      <SelectItem value="C">
                        C
                      </SelectItem>
                      <SelectItem value="D">
                        D
                      </SelectItem>
                      <SelectItem value="E">
                        E
                      </SelectItem>
                      <SelectItem value="F">
                        F
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Generate</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateModuleForm;
