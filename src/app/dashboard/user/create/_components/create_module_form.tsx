"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
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
import { CreateModuleSchema } from "~/server/validator/module";

import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useToast } from "~/hooks/use-toast";

const CreateModuleForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const generateModule = api.userRoute.generate.generate.useMutation({
    onSuccess(data) {
      if (data) {
        router.push(`/dashboard/module/${data}`);
      }
    },
    onError(error) {
      toast({
        title: error.data?.code,
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const form = useForm<z.infer<typeof CreateModuleSchema>>({
    resolver: zodResolver(CreateModuleSchema),
    defaultValues: {
      title: "",
      subjects: "",
      subjects_matter: "",
      learning_model: "",
      class: "",
      year: "",
      lesson_meet: 0,
      lesson_time: 0,
      lesson_hour: 0,
    },
  });

  function onSubmit(values: z.infer<typeof CreateModuleSchema>) {
    generateModule.mutate(values)
  }

  return (
    <div className="mx-auto max-w-[600px]">
      <div></div>
      <div className="mb-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Modul</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="cth. Modul pembelajaran matematika"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Nama modul yang anda buat</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subjects"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Materi</FormLabel>
                  <FormControl>
                    <Input placeholder="cth. Matematika" {...field} />
                  </FormControl>
                  <FormDescription>Materi yang akan dipelajari</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subjects_matter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fokus Bab</FormLabel>
                  <FormControl>
                    <Input placeholder="cth. Trigonometri" {...field} />
                  </FormControl>
                  <FormDescription>
                    Fokus bab dalam pembelajaran
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="learning_model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model Pembelajaran</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="cth. Problem based learning"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Model pembelajaran yang digunakan, boleh lebih dari satu
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun Pelajaran</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Tahun pelajaran" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2024/2025">2024/2025</SelectItem>
                      <SelectItem value="2025/2026">2025/2026</SelectItem>
                      <SelectItem value="2026/2027">2026/2027</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Pilih tahun pelajaran</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kelas</FormLabel>
                  <FormControl>
                    <Input placeholder="cth. 2 SMA" {...field} />
                  </FormControl>
                  <FormDescription>
                    Tingkat kelas pembelajaran di laksanakan
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lesson_meet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jumlah pertemuan</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <Input type="number" placeholder="cth. 4" {...field} />
                      <div>Kali</div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Jumlah pertemuan yang diadakan untuk modul ini
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lesson_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jumlah Jam Pelajaran</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <Input type="number" placeholder="cth 3" {...field} />
                      <div>Jam</div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Jumlah jam pelajaran dalam satu kali pertemuan
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lesson_hour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lama Jam Pelajaran</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <Input type="number" placeholder="cth. 45" {...field} />
                      <div>Menit</div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Lama waktu dalam satu jam pelajaran
                  </FormDescription>
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
